import React from "react";
import { Link } from "react-router-dom";

export default function BottonNavigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/new">New</Link>
    </div>
  );
}
