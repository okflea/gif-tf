"use client"
import GifContainer from "../../components/GifContainer";

const page = () => {

  const userId ="",isLoaded=""//TODO


  return (
    <div
      className="flex flex-col justify-center items-center absolute top-1/4 w-full p-5">

      <div
        className={`glass mt-4 w-full flex flex-wrap gap-2 justify-center rounded-lg max-w-5xl mx-auto p-5 md:p-16 `}>
            <GifContainer/>
      </div>
    </div>
  )
}

export default page
