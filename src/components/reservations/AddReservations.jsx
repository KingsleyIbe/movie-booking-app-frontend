import React, { useState } from 'react';  
import NavBar from '../navbar/NavBar';

const AddReservations =() => {
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <NavBar />
        <div className="w-full flex justify-center bg-gray-100 py-16">
            <div className="w-1/2 shadow-md border bg-white pb-12">
            <div className="py-3 px-8 border-b-2">
                <h1>Add Reservation</h1>
            </div>
            <form className=" px-10 mt-12">
            <div className="flex mb-4">
                <label htmlFor="date" className="block mr-5 w-1/2">
                    <span className="block mb-1">Date</span>
                    <input
                        type="text"
                        id="date"
                        className="py-2 px-3 border border-gray-300 w-full"
                        placeholder="Enter movie title"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label htmlFor="date" className="block mr-5 w-1/2">
                    <span className="block mb-1">Date</span>
                    <input
                        type="text"
                        id="date"
                        className="py-2 px-3 border border-gray-300 w-full"
                        placeholder="Enter movie title"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
            </div>
            <hr />
            <div className="mt-3 flex justify-end">
                <button
                type="submit"
                className="mt-5 py-3 px-16 bg-gray-900 text-white"
                >
                Save Movie
                </button>
            </div>
            </form>
        </div>
        </div>
    </>
    )
}
 
export default AddReservations