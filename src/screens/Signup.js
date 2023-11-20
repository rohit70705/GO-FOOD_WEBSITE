import React , {useState} from 'react'
import { Link } from 'react-router-dom'


export function Signup() {
    const [credentials, setcredentials] = useState({name:"" , email:"",password:"", geolocation:""})

    const handleSubmit = async(e)=>{
        e.preventDefault();
        //just to check.
        console.log(JSON.stringify({
            name:credentials.name,
            email : credentials.email,
            password: credentials.password,
            location: credentials.geolocation
        }))
        const response = await fetch("http://localhost:4000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:credentials.name,
                email : credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            })
        })
        console.log(response);
        const data = await response.json();
        console.log(data);

        if(data.sucess){
            alert("Signup successfully");
        }
        
        if(!data.sucess){
            alert("Enter Valid Credential");
        }
    }
    const handleChange = (e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value});
    }


  return (
    <>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={credentials.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={handleChange} id="exampleInputPassword1"/>
        </div>

        <div className="mb-3">
            <label htmlFor="geolocation" className="form-label">Address</label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={handleChange} id="exampleInputPassword1"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/login' className='m-3 btn btn-danger'>Already User</Link>
        </form>
      </div>   
    </>
  )
}

export default Signup