import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="bg-gray-200 antialiased">
      <header className="flex justify-between item-center bg-gray-900 px-4 py-3">

        <div className="flex justify-between">
          <svg className="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.09,30.82A1.5,1.5,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.59,1.59,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35H52A1.48,1.48,0,0,0,53.09,30.82Zm-14,19.68V38.06a1.5,1.5,0,0,0-1.5-1.5H26.45a1.5,1.5,0,0,0-1.5,1.5V50.5H17.84V29.85A1.57,1.57,0,0,0,16,28.35l1.38-1.23h0L32,14,46.66,27.12h0L48,28.35a1.58,1.58,0,0,0-1.88,1.51V50.5Z" /></g></svg>
          <h1 className="fill-current text-gray-400">
            Workcation
          </h1>
        </div>
        <button>
          <svg className="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </header>
      <section className="flex justify-between bg-gray-800 px-4 py-3">
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
      </section>
      <main className="px-4 py-4">
        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
        <p className="text-gray-600">Live like the stars in these luxurious Southern California estates.</p>
        <div>
          <div>

            <div>
              <img className="rounded-lg shadow-md h-64" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg" alt=""></img>
            </div>
            <div className="relative px-4 -mt-12">
              <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
                <div className="flex">
                  <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
                  <div className="ml-2 py-0.5 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                    3 beds &bull; 2 baths
                  </div>
                </div>
                <h4 className="mt-1 text-gray-900 font-semibold text-lg">Modern home in city center</h4>
                <div className="mt-1">
                  <span className="text-gray-900">$1,400</span><span className="ml-1 text-gray-600">/wk</span>
                </div>
                <div className="flex flex-row text-sm text-gray-600">
                  <svg className="h-3 w-3 text-teal-500" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" >
                    <desc>Created with Sketch.</desc>
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Rounded" transform="translate(-273.000000, -4323.000000)">
                        <g id="Toggle" transform="translate(100.000000, 4266.000000)">
                          <g id="-Round-/-Toggle-/-star" transform="translate(170.000000, 54.000000)">
                            <g>
                              <polygon id="Path" fillRule="nonzero" points="0 0 24 0 24 24 0 24" />
                              <path d="M12,17.27 L16.15,19.78 C16.91,20.24 17.84,19.56 17.64,18.7 L16.54,13.98 L20.21,10.8 C20.88,10.22 20.52,9.12 19.64,9.05 L14.81,8.64 L12.92,4.18 C12.58,3.37 11.42,3.37 11.08,4.18 L9.19,8.63 L4.36,9.04 C3.48,9.11 3.12,10.21 3.79,10.79 L7.46,13.97 L6.36,18.69 C6.16,19.55 7.09,20.23 7.85,19.77 L12,17.27 Z" id="🔹-Icon-Color" fill="#1D1D1D" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg className="h-3 w-3 text-teal-500" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" >
                    <desc>Created with Sketch.</desc>
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Rounded" transform="translate(-273.000000, -4323.000000)">
                        <g id="Toggle" transform="translate(100.000000, 4266.000000)">
                          <g id="-Round-/-Toggle-/-star" transform="translate(170.000000, 54.000000)">
                            <g>
                              <polygon id="Path" fillRule="nonzero" points="0 0 24 0 24 24 0 24" />
                              <path d="M12,17.27 L16.15,19.78 C16.91,20.24 17.84,19.56 17.64,18.7 L16.54,13.98 L20.21,10.8 C20.88,10.22 20.52,9.12 19.64,9.05 L14.81,8.64 L12.92,4.18 C12.58,3.37 11.42,3.37 11.08,4.18 L9.19,8.63 L4.36,9.04 C3.48,9.11 3.12,10.21 3.79,10.79 L7.46,13.97 L6.36,18.69 C6.16,19.55 7.09,20.23 7.85,19.77 L12,17.27 Z" id="🔹-Icon-Color" fill="#1D1D1D" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg className="h-3 w-3 text-teal-500" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" >
                    <desc>Created with Sketch.</desc>
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Rounded" transform="translate(-273.000000, -4323.000000)">
                        <g id="Toggle" transform="translate(100.000000, 4266.000000)">
                          <g id="-Round-/-Toggle-/-star" transform="translate(170.000000, 54.000000)">
                            <g>
                              <polygon id="Path" fillRule="nonzero" points="0 0 24 0 24 24 0 24" />
                              <path d="M12,17.27 L16.15,19.78 C16.91,20.24 17.84,19.56 17.64,18.7 L16.54,13.98 L20.21,10.8 C20.88,10.22 20.52,9.12 19.64,9.05 L14.81,8.64 L12.92,4.18 C12.58,3.37 11.42,3.37 11.08,4.18 L9.19,8.63 L4.36,9.04 C3.48,9.11 3.12,10.21 3.79,10.79 L7.46,13.97 L6.36,18.69 C6.16,19.55 7.09,20.23 7.85,19.77 L12,17.27 Z" id="🔹-Icon-Color" fill="#1D1D1D" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg className="h-3 w-3 text-teal-500" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" >
                    <desc>Created with Sketch.</desc>
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Rounded" transform="translate(-273.000000, -4323.000000)">
                        <g id="Toggle" transform="translate(100.000000, 4266.000000)">
                          <g id="-Round-/-Toggle-/-star" transform="translate(170.000000, 54.000000)">
                            <g>
                              <polygon id="Path" fillRule="nonzero" points="0 0 24 0 24 24 0 24" />
                              <path d="M12,17.27 L16.15,19.78 C16.91,20.24 17.84,19.56 17.64,18.7 L16.54,13.98 L20.21,10.8 C20.88,10.22 20.52,9.12 19.64,9.05 L14.81,8.64 L12.92,4.18 C12.58,3.37 11.42,3.37 11.08,4.18 L9.19,8.63 L4.36,9.04 C3.48,9.11 3.12,10.21 3.79,10.79 L7.46,13.97 L6.36,18.69 C6.16,19.55 7.09,20.23 7.85,19.77 L12,17.27 Z" id="🔹-Icon-Color" fill="#1D1D1D" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg className="h-3 w-3 text-teal-500" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" >
                    <desc>Created with Sketch.</desc>
                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Rounded" transform="translate(-273.000000, -4323.000000)">
                        <g id="Toggle" transform="translate(100.000000, 4266.000000)">
                          <g id="-Round-/-Toggle-/-star" transform="translate(170.000000, 54.000000)">
                            <g>
                              <polygon id="Path" fillRule="nonzero" points="0 0 24 0 24 24 0 24" />
                              <path d="M12,17.27 L16.15,19.78 C16.91,20.24 17.84,19.56 17.64,18.7 L16.54,13.98 L20.21,10.8 C20.88,10.22 20.52,9.12 19.64,9.05 L14.81,8.64 L12.92,4.18 C12.58,3.37 11.42,3.37 11.08,4.18 L9.19,8.63 L4.36,9.04 C3.48,9.11 3.12,10.21 3.79,10.79 L7.46,13.97 L6.36,18.69 C6.16,19.55 7.09,20.23 7.85,19.77 L12,17.27 Z" id="🔹-Icon-Color" fill="#1D1D1D" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  34 reviews
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}




