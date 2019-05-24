import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Search from "../pages/SearchBar"
import '../index.css';
export default function Navigation() {
  const [data,setData]=useState([])
  const searchItem=async(name)=>{
    const response =await fetch(`http://localhost:8000/api/instagrams/name/${name}`)
   
    const res = await response.json();
    console.log(res)
    window.location.href=`http://localhost:3000/SearchResult/${res._id}`;

  };
  return (
    <div>
      <div className='Nav-ii'>
<nav className='Nav'>
<NavLink className='Nav-link' activeClassName='is-active' exact to='/'>Home</NavLink>

<NavLink className='Nav-link' activeClassName='is-active' to='/MyPage'>My   Page</NavLink>

</nav>
</div>
<div className="search"> 
<div class="topnav">
<div class="search-container">
<Search className="search" handleSearch={searchItem}/></div>
 </div>
</div>
</div>
  )
}


