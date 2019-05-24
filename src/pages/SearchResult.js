import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
export default function SearchResult(props) {
  const [data,setData]=useState([])
  const searchItem=async(id)=>{
    const response =await fetch(`http://localhost:8000/api/instagrams/${id}`)
    const res = await response.json();
setData(res);
    

  };
  searchItem(props.match.params.id);
  return (
<div>
  <br/><br/><br/><br/><br/> <br/><br/> <br/>
  <div  className="a1">
	<div  className="c2">

					  <Link  to={`/instagram/${data._id}`} className='ff5'>
				
		<img  className="avatar" src={data.avatar}  alt="avatar"/>
		<h3> {data.name} {data.username}</h3>	</Link>
	</div>
  


</div>




</div>
  )
}
