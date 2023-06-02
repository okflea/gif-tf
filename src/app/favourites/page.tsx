"use client"

import GifContainer from "../components/GifContainer";
import useLocalStorage from "../utils/useLocalStorage";

const page = () => {

  const userId ="",isLoaded=""//TODO
  const [favourites, setFavourites] = useLocalStorage(`${userId}`, [])


  return (
    <div
      className="flex flex-col justify-center items-center absolute top-1/4 w-full p-5">

      {favourites.length >0 ? (
      <p className="text-slate-200 font-thin mt-4">click on any gold button to remove all</p>
      ) : ("")}
      <div
        className={`glass mt-4 w-full flex flex-wrap gap-2 justify-center rounded-lg max-w-5xl mx-auto p-5 md:p-16 `}>
        {favourites.length === 0 ?
          <h1 className="font-semibold text-slate-200">It seems to be empty</h1> :
          favourites.map((gif:{
            id:string
            title:string
            url:string
          }) => (
              <p>refactor gifCont</p> //TODO
              // <GifContainer key={gif.id} id={gif.id} title={gif.title} url={gif.url} userID={userId} isLoaded={isLoaded} favourites={favourites} setFavourites={setFavourites} isFav={false}/>
          ))}
      </div>
    </div>
  )
}

export default page
