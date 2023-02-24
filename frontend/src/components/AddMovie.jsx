import React, { useState, useEffect } from "react";
import userContainer from "../config/UserStore";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_MOVIE } from "../graphql/Mutation";

function AddMovie() {
  const navigate = useNavigate();
  const getAuthorization = userContainer((state) => state.isAuthorized);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [dateOfReleased, setDateOfReleased] = useState("");
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  useEffect(() => {
    console.log("get Authorization", getAuthorization);
    if (!getAuthorization.isAuthorized) return navigate("/");
  }, []);

  const [createMovie] = useMutation(CREATE_MOVIE, {});

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await createMovie({
          variables: {
            title,
            image,
            description,
            dateOfReleased,
            numberOfLikes
            
          },
        });

        navigate("/home");
      }}
      className="w-2/4 grid ml-80 py-20 pr-5 px-5 pl-5"
    >
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-white my-2 dark:text-white"
        >
          Title
        </label>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          type="text"
          id="title"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="Image"
          className="block mb-2 text-sm font-medium text-white my-2 dark:text-white"
        >
          URL Image
        </label>
        <input
          onChange={(event) => {
            setImage(event.target.value);
          }}
          value={image}
          type="text"
          id="image"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="dateOfReleased"
          className="block mb-2 text-sm font-medium text-white my-5 dark:text-white"
        >
          Date of released
        </label>
        <input
          onChange={(event) => {
            setDateOfReleased(event.target.value);
          }}
          value={dateOfReleased}
          type="date"
          id="dateOfReleased"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      {/* <div>
        <label
          htmlFor="numberOfLikes"
          className="block mb-2 text-sm font-medium text-white my-5 dark:text-white"
        >
          Number of Likes
        </label>
        <input
          onChange={(event) => {
            setNumberOfLikes(event.target.value);
          }}
          value={numberOfLikes}
          type="number"
          id="numberOfLikes"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div> */}

      <div className="mb-6">
        <label
          htmlFor="Description"
          className="block mb-2 text-sm font-medium text-white my-5 dark:text-white"
        >
          Description
        </label>
        <input
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
          type="text"
          id="description"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;
