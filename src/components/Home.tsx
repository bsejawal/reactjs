import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = async () => {
    setAuth(null);
    navigate("/linkpage");
  };
  return (
    <>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <Link to="/editor">Go to the Editor page</Link>
      <br />
      <Link to="/admin">Go to the Admin page</Link>
      <br />
      <Link to="/lounge">Go to the Lounge page</Link>
      <br />
      <Link to="/linkpage">Go to the Link page</Link>
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
      <br />
    </>
  );
};

export default Home;
