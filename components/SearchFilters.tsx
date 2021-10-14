import 'tailwindcss/tailwind.css';
import React, { Component } from "react";

export default class SearchFilters extends React.Component {

    render() {
        return (
            <section className="bg-gray-800">
                <div className="flex justify-between px-4 py-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-6 w-6 fill-current text-gray-600" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
                                <path d="M20.745,32.62c2.883,0,5.606-1.022,7.773-2.881L39.052,40.3c0.195,0.196,0.452,0.294,0.708,0.294  c0.255,0,0.511-0.097,0.706-0.292c0.391-0.39,0.392-1.023,0.002-1.414L29.925,28.319c3.947-4.714,3.717-11.773-0.705-16.205  c-2.264-2.27-5.274-3.52-8.476-3.52s-6.212,1.25-8.476,3.52c-4.671,4.683-4.671,12.304,0,16.987  C14.533,31.37,17.543,32.62,20.745,32.62z M13.685,13.526c1.886-1.891,4.393-2.932,7.06-2.932s5.174,1.041,7.06,2.932  c3.895,3.905,3.895,10.258,0,14.163c-1.886,1.891-4.393,2.932-7.06,2.932s-5.174-1.041-7.06-2.932  C9.791,23.784,9.791,17.431,13.685,13.526z" />
                            </svg>
                        </div>
                        <input className="bg-gray-900 focus:outline-none focus:bg-white text-gray-900 rounded-lg pl-10 pr-4 px-9 py-2" placeholder="Search by keywords"></input>
                    </div>
                    <button className="inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow px-3 py-2">
                        <svg className="h-6 w-6 fill-current text-gray-500" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32">
                            <g>
                                <path d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z" />
                                <path d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z" />
                                <path d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z" />
                            </g>
                        </svg>
                        <span className="text-white font-medium">Filters</span>
                    </button>
                </div>
                <form>
                    <fieldset className="px-4 py-4 border-t border-gray-900">
                        <div className="flex -mx-2">
                            <label className="block w-1/2 px-2">
                                <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
                                <select className="mt-1 block py-2 rounded-lg text-white bg-gray-700 w-full shadow">
                                    <option>4</option>
                                </select>
                            </label>
                            <label className="block w-1/2 px-2">
                                <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
                                <select className="mt-1 block py-2 rounded-lg text-white bg-gray-700 w-full shadow">
                                    <option>4</option>
                                </select>
                            </label>
                        </div>
                        <div className="mt-4">
                            <label>
                                <span className="text-sm font-semibold text-gray-500">Price Range</span>
                                <select className="mt-1 block py-2 rounded-lg text-white bg-gray-700 w-full shadow">
                                    <option>Up to $2,000/wk</option >
                                </select>
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className="px-4 py-4 border-t border-gray-900">
                        <span className="block text-sm font-semibold text-gray-500">Property Type</span>  
                        <label className="mt-2 flex item-center">
                            <input className="h-6 w-6 bg-gray-500 text-gray-500 focus:ring-gray-500 focus:text-gray-500" type="radio" value="House" name="propertyType" />
                            <span className="ml-2 text-white">House</span>
                        </label>
                        <label className="mt-2 flex item-center">
                            <input className="h-6 w-6 bg-gray-500" type="radio" value="apartment" name="propertyType" />
                            <span className="ml-2 text-white">Apartment</span>
                        </label>
                        <label className="mt-2 flex item-center">
                            <input className="h-6 w-6 bg-gray-500" type="radio" value="loft" name="propertyType" />
                            <span className="ml-2 text-white">Loft</span>
                        </label>
                        <label className="mt-2 flex item-center">
                            <input className="h-6 w-6 bg-gray-500" type="radio" value="townhouse" name="propertyType" />
                            <span className="ml-2 text-white">Townhouse</span>
                        </label>
                    </fieldset>
                    <fieldset className="px-4 py-4 border-t border-gray-900">
                        <span className="text-sm font-semibold text-gray-500">Amenities</span>
                        <label className="flex text-white">
                            <input className="mr-2 font-gray-900" type="checkbox" name="balcony"/>Balcony
                        </label>
                        <label className="flex text-white">
                            <input className="mr-2" type="checkbox" name="airCongitioning"/>Air Congitioning
                        </label>
                        <label className="flex text-white">
                            <input className="mr-2" type="checkbox" name="pool"/>Pool
                        </label>
                        <label className="flex text-white">
                            <input className="mr-2" type="checkbox" name="beach"/>Beach
                        </label>
                        <label className="flex text-white">
                            <input className="mr-2" type="checkbox" name="petFriendly"/>Pet Friendly
                        </label>
                        <label className="flex text-white">
                            <input className="mr-2" type="checkbox" name="kidFriendly"/>Kid Friendly
                        </label>
                        <label className="flex text-white">
                            <input className="mr-2" type="checkbox" name="parking"/>Parking
                        </label>
                    </fieldset>
                    <div className="bg-gray-900 px-4 py-4 ">
                        <button className="block w-full bg-indigo-500 hover:bg-indigo-400 font-semibold rounded-lg text-white px-4 py-2">Update results</button>
                    </div>
                </form>
            </section>
        );
    }
}
