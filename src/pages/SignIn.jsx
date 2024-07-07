import React from 'react'
import { Link} from 'react-router-dom'
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input className="border p-3 rounded-lg" type="email" placeholder='email' id="email"/>
        <input className="border p-3 rounded-lg" type="password" placeholder='password' id="password"/>
        <button className="bg-myGreen text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to='/signup'>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  )
}
