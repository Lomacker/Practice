import 'tailwindcss/tailwind.css';
import React, { Component } from "react";

export default class FiltersComponent extends React.Component {
    render() {
        return (
            <form>
                <div className="lg:flex xl:block">
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3  xl:w-full">
                        <div className="flex flex-wrap -mx-2">
                            <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
                                <select className="mt-1 block py-2 rounded-lg text-white bg-gray-700 w-full shadow">
                                    <option>4</option>
                                </select>
                            </label>
                            <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
                                <select className="mt-1 block py-2 rounded-lg text-white bg-gray-700 w-full shadow">
                                    <option>4</option>
                                </select>
                            </label>
                            <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full ">
                                <span className="text-sm font-semibold text-gray-500">Price Range</span>
                                <select className="mt-1  block py-2 rounded-lg text-white bg-gray-700 w-full shadow">
                                    <option>Up to $2,000/wk</option >
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l  xl:w-full">
                        <span className="block text-sm font-semibold text-gray-500">Property Type</span>
                        <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
                            <label className="mt-2 sm:w-1/4 sm:px-2 flex item-center lg:w-full lg:px-0 xl:w-full">
                                <input className="h-6 w-6 bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="radio" value="House" name="propertyType" />
                                <span className="ml-2 text-white">House</span>
                            </label>
                            <label className="mt-2 sm:w-1/4 sm:px-2 flex item-center lg:w-full lg:px-0 xl:w-full">
                                <input className="h-6 w-6 bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="radio" value="apartment" name="propertyType" />
                                <span className="ml-2 text-white">Apartment</span>
                            </label>
                            <label className="mt-2 sm:w-1/4 sm:px-2 flex item-center lg:w-full lg:px-0 xl:w-full">
                                <input className="h-6 w-6 bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="radio" value="loft" name="propertyType" />
                                <span className="ml-2 text-white">Loft</span>
                            </label>
                            <label className="mt-2 sm:w-1/4 sm:px-2 flex item-center lg:w-full lg:px-0">
                                <input className="h-6 w-6 bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="radio" value="townhouse" name="propertyType" />
                                <span className="ml-2 text-white">Townhouse</span>
                            </label>
                        </div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                        <span className="text-sm font-semibold text-gray-500">Amenities</span>
                        <div className="sm:flex sm:-mx-2 sm:flex-wrap">
                            <label className="mt-2 flex text-white sm:w-1/4 sm:px-2 lg:w-1/2">
                                <input className="mr-2 h-6 w-6 rounded-lg bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="checkbox" name="balcony" />Balcony
                            </label>
                            <label className="mt-2 flex text-white sm:w-1/4 sm:px-2 lg:w-1/2">
                                <input className="mr-2 h-6 w-6 rounded-lg bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="checkbox" name="pool" />Pool
                            </label>
                            <label className="mt-2 flex text-white sm:w-1/4 sm:px-2 lg:w-1/2">
                                <input className="mr-2 h-6 w-6 rounded-lg bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="checkbox" name="beach" />Beach
                            </label>
                            <label className="mt-2 flex text-white sm:w-1/4 sm:px-2 lg:w-1/2">
                                <input className="mr-2 h-6 w-6 rounded-lg bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="checkbox" name="petFriendly" />Pet Friendly
                            </label>
                            <label className="mt-2 flex text-white sm:w-1/4 sm:px-2 lg:w-1/2">
                                <input className="mr-2 h-6 w-6 rounded-lg bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="checkbox" name="kidFriendly" />Kid Friendly
                            </label>
                            <label className="mt-2 flex text-white sm:w-1/4 sm:px-2 lg:w-1/2">
                                <input className="mr-2 h-6 w-6 rounded-lg bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="checkbox" name="parking" />Parking
                            </label>
                            <label className="mt-2 flex text-white sm:w-1/4 sm:px-2 lg:w-full">
                                <input className="mr-2 h-6 w-6 rounded-lg bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="checkbox" name="airCongitioning" />Air Congitioning
                            </label>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 px-4 py-4 sm:text-right">
                    <button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold rounded-lg text-white px-4 py-2 xl:block xl:w-full">Update results</button>
                </div>
            </form>
        );
    }
}