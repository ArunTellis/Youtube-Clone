import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, json } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  //This dispatcher is used to toggle the Menu
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  //It will subscribe the store to maintain the cache to apply the debouncing
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // Make an api call after every key press
    // If the difference between 2 API call isM200ms
    // decline the API call

    const timer = setTimeout(() => {
      //This is the debouncing technique to optimise the api calls and caching technique
      if (searchCache[searchQuery]) {
        setSuggetions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    //To optimize the app we will return
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //This method  is used to set  the suggestion while searching
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggetions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  // UI Design of the Head Section
  return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-lg cursor-pointer ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="
      menu"
        />
        <img
          className="h-10 mx-2"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="Logo"
        />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className=" px-5 p-2 w-1/2 border border-gray-400  rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            //This will show the suggestion when you press the search bar
            onFocus={() => setShowSuggestions(true)}
            //Once if you leave the search bar it will hide the suggestions
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[43rem] rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggetions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-9"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Head;
