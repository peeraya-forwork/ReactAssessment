import React from 'react'
import {Link}  from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div>
      <ul>
        <li>
           <Link to={"/"}>Home</Link>
        </li>
        <li>
           <Link to={"/HomeOwner"}>Owner</Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar