import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';



export default class SiteHeader extends React.Component {
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
      <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-between item-center px-4 py-3">
          <div className="flex justify-between">
            <svg className="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"
            ><path d="M53.09,30.82A1.5,1.5,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.59,1.59,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35H52A1.48,1.48,0,0,0,53.09,30.82Zm-14,19.68V38.06a1.5,1.5,0,0,0-1.5-1.5H26.45a1.5,1.5,0,0,0-1.5,1.5V50.5H17.84V29.85A1.57,1.57,0,0,0,16,28.35l1.38-1.23h0L32,14,46.66,27.12h0L48,28.35a1.58,1.58,0,0,0-1.88,1.51V50.5Z" /></g></svg>
            <h1 className="fill-current text-gray-400">
              Workcation
            </h1>
          </div>
          <button onClick={this.toggleMenu} className="px-2 sm:hidden text-gray-500 hover:text-white focus:outline-none focus:text-white">
            {this.state.visible
              ? <svg className="h-4 w-4 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.963 60.842"  >
                <path d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611  c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611  l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369  l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369  C61.42,57.647,61.42,54.687,59.595,52.861z" />
              </svg>
              : <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            }
          </button>
        </div>
        {this.state.visible
          ? <div>
            <nav className="sm:flex sm:items-center sm:px-4">
              <div className="px-2 pt-2 pb-5 border-b border-gray-800">
                <a href="#" className="block px-3 py-1 leading-tight font-semibold text-white hover:bg-gray-800">List your property</a>
                <a href="#" className="mt-1 block px-3 py-1 leading-tight font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm">Trips</a>
                <a href="#" className="mt-1 block px-3 py-1 leading-tight font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm">Messages</a>
              </div>
              <div className="px-5 py-5">
                <div className="flex items-center">
                  <img className="h-10 w-10 object-cover rounded-full border-2 border-gray-600" src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                  <span className="ml-4 font-semibold text-gray-200">FirstName LastName</span>
                </div>
                <div className="mt-5">
                  <a href="#" className="block text-gray-400 hover:text-white">Account Settings</a>
                  <a href="#" className="mt-3 block text-gray-400 hover:text-white">Support</a>
                  <a href="#" className="mt-3 block text-gray-400 hover:text-white">Sign Out</a>
                </div>
              </div>
            </nav>
          </div>
          : <div className="hidden sm:flex ">
            <div className="px-2 pt-2 pb-3 sm:flex sm:items-center">
              <a href="#" className="block px-3 py-1 leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2">List your property</a>
              <a href="#" className="mt-1 block px-3 py-1 leading-tight font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2">Trips</a>
              <a href="#" className="mt-1 block px-3 py-1 leading-tight font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2">Messages</a>
            </div>
            <div className="px-5 py-5 mt-2 mr-4 sm:py-0 sm:px-0">
              <img className="h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:h-8 sm:w-8" src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
            </div>
          </div>
        }

      </header>
    );
  }
}


function SiteHeaderMenu() {

}

