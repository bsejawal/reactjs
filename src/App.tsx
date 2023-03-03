import React from "react";
import "./App.css";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import Lounge from "./components/Lounge";
import LinkPage from "./components/LinkPage";
import RequiredAuth from "./components/RequiredAuth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequiredAuth allowedRoles={["ROLE_USER"]} />}>
          <Route path="/" element={<Home />} />
          <Route path="editor" element={<Editor />} />
        </Route>

        <Route element={<RequiredAuth allowedRoles={["ROLE_ADMIN"]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route
          element={<RequiredAuth allowedRoles={["ROLE_USER", "ROLE_ADMIN"]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
