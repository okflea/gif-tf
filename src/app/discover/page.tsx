"use client";

import { ChangeEvent, useState } from "react";
import GifContainer from "../../components/GifContainer";
import debounce from "../../utils/debounce";

type Data ={
  id: string;
  title: string;
  // url: string;
  images: {
    fixed_width_downsampled: {
      webp: string;
    };
  }
}
const Page = () => {
  const [data, setData] = useState<Array<Data>>([]);
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();
  const userId="",isLoaded=""//TODO 

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  }

  const handleFetch  = async (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let query = " "
      query = e.target.value;
    if (query.trim() === "")
      return;
    const limit = 9;
    const offset = selectedNumber ? (selectedNumber - 1) * limit : 0;

    const key = process.env.NEXT_PUBLIC_GIFY_KEY
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${limit}&offset=${offset}`);
    const data = await response.json();
    setData(data.data || []);
  }

  const debounceFetch = debounce(handleFetch, 500);

  return (
    <div className="flex flex-col justify-center items-center absolute top-1/4 w-full p-5">
      <h1 className="text-3xl font-bold mb-6 text-white transform hover:scale-110 transition-all duration-500">
        Discover
      </h1>
      <form className="flex flex-col items-center">
        <div className="flex flex-row mb-2">
          <input
            onChange={debounceFetch}
            type="text"
            name="search"
            className="w-full rounded-l-lg p-4 focus:outline-none focus:shadow-outline text-gray-700 bg-white"
          />
          <button
            type="submit"
            className="bg-gray-700 text-white font-bold rounded-r-lg p-4 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition-all duration-500"
          >
            Search
          </button>
        </div>
        <div className="flex flex-row space-x-2 mt-2">
          {[1, 2, 3, 4, 5].map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number)}
              className="bg-gray-700 text-white font-bold rounded-lg px-4 py-2 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition-all duration-500"
            >
              {number}
            </button>
          ))}
        </div>
      </form>
      {data?.length > 0 && (
        <>
          <p className="text-slate-200 font-thin mt-4">double click on the star button to stash</p>
          <div
            className={`glass mt-4 w-full flex flex-wrap gap-2 justify-center rounded-lg max-w-5xl mx-auto p-5 md:p-16 `}>
            {data.map((gif) => 
              <p>refactored gifcontainer </p>//TODO

              // <GifContainer key={gif.id} id={gif.id} title={gif.title} url={gif.images.fixed_width_downsampled.webp} userID={userId} isLoaded={isLoaded} favourites={favourites} setFavourites={setFavourites} isFav={false}/>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
