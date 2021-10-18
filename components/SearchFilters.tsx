import 'tailwindcss/tailwind.css';
import React, { Component } from "react";
import FiltersComponent from './FiltersComponent';

export default class SearchFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (
            <section className="bg-gray-800 xl:w-72">
                <div className="flex justify-between px-4 py-3 xl:hidden">
                    <div className="relative w-full max-w-xl">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-6 w-6 fill-current text-gray-600" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
                                <path d="M20.745,32.62c2.883,0,5.606-1.022,7.773-2.881L39.052,40.3c0.195,0.196,0.452,0.294,0.708,0.294  c0.255,0,0.511-0.097,0.706-0.292c0.391-0.39,0.392-1.023,0.002-1.414L29.925,28.319c3.947-4.714,3.717-11.773-0.705-16.205  c-2.264-2.27-5.274-3.52-8.476-3.52s-6.212,1.25-8.476,3.52c-4.671,4.683-4.671,12.304,0,16.987  C14.533,31.37,17.543,32.62,20.745,32.62z M13.685,13.526c1.886-1.891,4.393-2.932,7.06-2.932s5.174,1.041,7.06,2.932  c3.895,3.905,3.895,10.258,0,14.163c-1.886,1.891-4.393,2.932-7.06,2.932s-5.174-1.041-7.06-2.932  C9.791,23.784,9.791,17.431,13.685,13.526z" />
                            </svg>
                        </div>
                        <input className="block bg-gray-900 focus:outline-none w-full max-w-xl focus:bg-white text-gray-900 rounded-lg pl-10 pr-4 px-9 py-2" placeholder="Search by keywords"></input>
                    </div>
                    <button onClick={this.toggleMenu} className="ml-4 inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow px-3 py-2">
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
                {this.state.visible
                    ? <FiltersComponent />
                    : <div className="hidden xl:flex"><FiltersComponent /></div>
                }
            </section>
        );
    }
}
