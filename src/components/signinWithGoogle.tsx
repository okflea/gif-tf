"use client";
import { auth } from "@/firebase/init"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const SigninWithGoogle = () => {
  const googleAuth= new GoogleAuthProvider()
  const login = async ()=>{
    const result = await signInWithPopup(auth,googleAuth)
    // console.log(result)
  }
  return (
    <div>
      <button type="submit" onClick={login}
        className="bg-gray-700 text-white font-bold rounded-lg p-3 mt-2 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition-all duration-500"
      >
        SignIn with Google
      </button>
    </div>
  )
}
export default SigninWithGoogle
