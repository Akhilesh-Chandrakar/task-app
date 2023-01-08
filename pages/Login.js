import React,{useState} from 'react'
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'
const Login = () => {
    const router=useRouter();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const changehandler=(e)=>{
      
        if(e.target.name=="email"){
            setemail(e.target.value);
        }
        if(e.target.name=="password"){
            setpassword(e.target.value);
        }
    }
    const handlesubmit= async(e)=>{
       e.preventDefault();

       const data = {  email, password };

let res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
 let response=await res.json();
 console.log(response);

 setemail('');
 setpassword('');
if(response.success){
    window.localStorage.setItem("IsLoggedIn", true);
    alert("successfully logged in")
    router.push(`${process.env.NEXT_PUBLIC_HOST}`)
}
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
    <h1 className={styles.heading}>Welcome! SignIn to</h1>
        <form onSubmit={handlesubmit} action="" method="POST">
            <div className="mt-4">
                
                <div className="mt-4">
                    <label className="block" htmlFor="email">Email</label>
                            <input value={email} onChange={changehandler} name="email" type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input value={password} onChange={changehandler} name="password" type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
               
                <div className="flex">
                    <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login
                </button>
                </div>
                <div className="mt-6 text-grey-dark">
                  Didn't have an account?
                    <a href='/Signup' className="text-blue-600 hover:underline" >
                       Signup
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login