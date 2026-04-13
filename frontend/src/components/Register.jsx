import React from 'react'


const Register = () => {
    const [user, setUser] = React.useState({username:"",email:"",password:""})
    const updateUser = (field, value) => {
        const u = {...user, [field]: value}
        setUser(u)
    }
    const submit =  async (e) => {
        try{
        e.preventDefault()
        console.log(user)
        const res = await fetch("http://localhost:5000/users", {method:"post",payload: user});
        console.log(res)
        }catch{}
    }

  return (
    <div>Register
        <form>
            <label>Username</label>
            <input type="text" onChange={(e)=>updateUser("username",e.target.value)} />
            <label>Email</label>
            <input type="text" onChange={(e)=>updateUser("email",e.target.value)} />
            <label>Password</label>
            <input type="password" onChange={(e)=>updateUser("password",e.target.value)} />
            <button type="submit" onClick={(e)=>submit(e)}> Submit</button>
        </form>
    </div>
  )
}

export default Register