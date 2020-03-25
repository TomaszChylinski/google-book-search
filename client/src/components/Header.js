import React from "react";
import {Link} from "react-router-dom";
import "./component.css";


const Header = () => (

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
          <h1> T.C. Book Search</h1>
          <Link className="navLink" to="/">Search</Link>
          <Link className="navLink" to="/saved">Saved</Link>
      </div>
    </div>
  );


export default Header;
