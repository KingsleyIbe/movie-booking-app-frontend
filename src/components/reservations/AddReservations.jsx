import React from 'react';
import NavBar from '../navbar/NavBar';

 
    <div className="w-full flex justify-center bg-gray-100 py-16">
      <div className="w-1/2 shadow-md border bg-white pb-12">
        <div className="py-3 px-8 border-b-2">
          <h1>Add Movie</h1>
        </div>
        form className=" px-10 mt-12">
          <div className="flex mb-4">
            <label htmlFor="title" className="block mr-5 w-1/2">
              <span className="block mb-1">Title</span>
              <input
                type="text"
                id="title"
                className="py-2 px-3 border border-gray-300 w-full"
                placeholder="Enter movie title"
                  />
            </label>
            <label htmlFor="director" className="block w-1/2">
              <span className="block mb-1">Director</span>
              <input
                type="text"
                id="director"
                placeholder="Enter director name"
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </label>