import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UserList() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const allData  = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(allData)
    setUsers(allData.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(users);
  return <div>{ 
    <table class="table center">
   <thead style={{textAlign:"center"}} class="thead-light ">
   <tr >
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
  {users.map(el => (
      <tr key={el.id} style={{textAlign:"center"}}>
       <td>{el.name}</td>
       <td>{el.username}</td>
       <td>{el.email}</td>
       <td>{el.phone}</td>
       <td>{el.website}</td>
       </tr>
        
        
      ))}
      
        </tbody>
      </table>
    }
    
    </div>;
}

