import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";


export default function Topbar() {
  const [username, setUsername] = useState("");
  const { user,dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    const fetchPosts = () => {
      if(user){
        setUsername(user.username);
       }else{
        setUsername(" ");
       }
       
      
    };

    fetchPosts();
  },[user]);


  return (
    
    <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-primary navbar-static-top">
        <a className="navbar-brand ml-5 mr-5 px-5" href="#">Book Shop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              
              <Link className="nav-link" to="/">
                  HOME
              </Link>

            </li>
            <li className="nav-item active">
              
              <Link className="nav-link" to="/#">
                  ABOUT
              </Link>

            </li>
            <li className="nav-item active">
              
              <Link className="nav-link" to="/allbooks">
                  BOOK STORE
              </Link>

            </li>
            <li className="nav-item active">
              
              <Link className="nav-link" to="/addbook">
                  ADD BOOK
              </Link>

            </li>
            
            
          </ul>
        </div>
      </nav>
  );
}
