import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContainer from "../config/UserStore";
import { useLazyQuery } from "@apollo/client";
import { GET_MOVIE_BY_TITLE } from "../graphql/Queries";

function Navbar() {
  const [title, setTitle] = useState("");
  const [movieData, setMovieData] = useState("")
  const [getMovieByTitle, { data, error }] = useLazyQuery(
    GET_MOVIE_BY_TITLE,
    {}
  );
  const getAuthorization = userContainer((state) => state.isAuthorized);
  const removeAuthorization = userContainer(
    (state) => state.removeAuthorization
  );
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="" className="flex items-center">
          <img
            src="https://cdn3.freelogovectors.net/svg10/hbo_max_logo-freelogovectors.net_.svg"
            className="h-6 mr-3 sm:h-9"
            alt="HBO Max Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>

        {!getAuthorization.isAuthorized ? (
          ""
        ) : (
          <>
            <div className="flex md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                  onBlur={ async (event) => {
                    await getMovieByTitle({ variables: { title: title } }).then(
                      function (response) {
                        console.log("response-movie", response);
                        setMovieData(response.data)
                      }
                    );
                  }}
                  type="search"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <Link
                to="/movie-detail"
                state={{data:movieData}}
                className="inline-flex items-center p-2 text-sm text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </Link>
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/home"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                {/* <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li> */}
                <li>
                  <Link
                    to="/add-movie"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Add Movie
                  </Link>
                </li>
              </ul>
              <div>
                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    removeAuthorization({ token: "" });
                    navigate("/");
                  }}
                  className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
