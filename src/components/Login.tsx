import React, { useRef, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
// import axios from "./api/axios";
import axios from "axios";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const LOGIN_URL = "api/authenticate";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // headers: { 'content-type': 'application/x-www-form-urlencoded' },

      console.log(JSON.stringify(response?.data));
      console.log(response.data.roles);
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });

      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (e) {
      if (isAxiosError(e)) {
        if (!(e as AxiosError).response) {
          setErrMsg(
            "No Server Response, responseCode:" + (e as AxiosError).status
          );
        } else if ((e as AxiosError).response?.status === 400) {
          setErrMsg(
            "Missing Username or Password " + (e as AxiosError).response?.data
          );
        } else if ((e as AxiosError).response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          console.log(e.message);
          setErrMsg(
            "Login failed, statusCode " + e.response?.status + " " + e.message
          );
        }
      } else {
        console.log("this is not AxiosError" + e);
        setErrMsg("Login failed");
      }
      errRef.current?.focus();
    }
  };
  function isAxiosError(x: unknown): x is AxiosError {
    if (x && typeof x === "object" && "code" in x) {
      return true;
    }
    return false;
  }
  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </section>
  );
};
export default Login;
