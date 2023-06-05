import SignInForm from "@/components/signInForm";
import SigninWithGoogle from "@/components/signinWithGoogle";
import Link from "next/link";

function SignIn() {
  return (
    <div
      className="flex justify-center items-center absolute top-1/4 w-full p-5">
      <div
        className={`glass mt-4 w-full flex flex-col flex-wrap gap-2 justify-center items-center rounded-lg max-w-5xl mx-auto p-5 md:p-16 `}>
        <SignInForm />
        <Link className="block font-semibold md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4" href="/signup">Dont have an account? Register ! </Link>
        <SigninWithGoogle/>
      </div>
    </div>
  )
}

export default SignIn;
