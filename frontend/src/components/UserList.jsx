import React from 'react'

const UserList = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers = async () => {
        try{
            const res = await fetch("http://localhost:5000/users")
            const data = await res.json();
            setUsers(data);
            console.log(data);
            console.log(users[0])
        }catch{
            console.log("error")
        }
    }
  return (
    <div>
        UserList
        <ul>
            {users.map((user,i,arr) => (<li>
            <div>
              {user.username} - {user.email} - {user.password}
            </div>
            </li>))}
        </ul>

    </div>
  )
}

export default UserList