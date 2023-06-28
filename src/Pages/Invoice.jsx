import React from "react";
import {BsThreeDots} from "react-icons/bs";
import Row from "../components/Row";

const Invoice = () => {
  return (
    <div className="main-content">
      <div className="page-content ">
        <div className="container-fluid px-[0.625rem]">
          <div className="grid grid-cols-1 mb-5">
            <div className="flex items-center justify-between">
              <h4 className="mb-sm-0 text-lg font-semibold grow text-gray-800 ">
                Invoice List
              </h4>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 ltr:md:space-x-3 rtl:md:space-x-0">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-900 "
                    >
                      Apps
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <a
                        href="#"
                        className="ltr:ml-1 rtl:mr-1 text-sm font-medium text-gray-500  ltr:md:ml-2 rtl:md:mr-2 "
                      >
                        Invoice List
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className=" grid grid-cols-1 ">
            <div className="card ">
              <div className="card-body">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-9">
                    <button
                      type="button"
                      className="btn bg-[#5156be] text-white p-2 rounded-lg"
                    >
                      Add Invoice
                    </button>
                  </div>
                  <div className="col-span-12 lg:col-span-3">
                    <div className="flex items-center mt-5 lg:mt-0 lg:justify-end">
                      <div className="inline-flex datepicker-range">
                        <input
                          type="hidden"
                          className="flatpickr-input"
                          data-input
                          aria-describedby="date1"
                        />
                        <input
                          className="py-1.5 border-gray-100 bg-[#c3c3c3ab]"
                          placeholder
                          tabIndex={0}
                          type="text"
                          readOnly="readonly"
                        />
                        <button
                          className="btn ltr:border-l-0 rtl:border-r-0 ltr:rounded-l-none rtl:rounded-r-none bg-gray-50/50 dark:bg-zinc-500 dark:border-zinc-600 dark:text-gray-100"
                          id="date1"
                          data-toggle
                        >
                          <i className="bx bx-calendar-event" />
                        </button>
                      </div>
                      <div className="dropdown relative">
                        <a
                          className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenu1"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-horizontal-rounded" />   
                        </a>
                        <ul
                          className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left rounded-lg shadow-lg hidden bg-clip-padding border-none"
                          aria-labelledby="dropdownMenu1"
                        >
                          <li>
                            <a
                              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                              href="#"
                            >
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/50  bg-transparent text-gray-700"
                              href="#"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                        text-gray-700 hover:bg-gray-50/50"
                              href="#"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex flex-wrap justify-between items-center">
                    <div>
                      <label
                        htmlFor="countries_multiple"
                        className="text-gray-600 "
                      >
                        Show
                        <select
                          id="countries"
                          className="py-0.5 w-16 inline-block text-11 bg-white border border-gray-100 text-gray-900 rounded p-2.5 focus:ring-1 focus:ring-violet-50 dark:bg-zinc-800 dark:text-gray-100 dark:border-zinc-600"
                        >
                          <option selected>10</option>
                          <option value="US">20</option>
                          <option value="CA">30</option>
                          <option value="FR">40</option>
                          <option value="DE">50</option>
                        </select>
                        entries
                      </label>
                    </div>
                    <div className="ltr:ml-auto rtl:mr-auto">
                      <label className="text-zinc-700">
                        Search:
                        <input
                          type="search"
                          className="py-0.5 px-1 w-40 rounded border-gray-100 bg-[#c3c3c3ab]"
                          placeholder
                          aria-controls
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-5 relative overflow-x-auto">
                  <table className="w-full ">
                    <thead className="border-b border-gray-300 cursor-pointer">
                      <tr className="">
                        <th className="relative w-8 text-start p-4">
                          <input
                            type="checkbox"
                            defaultValue
                            className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-violet-500 dark:border-zinc-500"
                          />
                          <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1" />
                          <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3" />
                        </th>
                        <th className="relative w-[120px] text-start p-4 text-zinc-700 ">
                          Invoice ID
                          <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1" />
                          <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3" />
                        </th>
                        <th className="relative w-[218px] text-start p-4 text-zinc-700">
                          Date
                          <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1" />
                          <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3" />
                        </th>
                        <th className="relative w-72 text-start p-4 text-zinc-700">
                          Billing Name
                          <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1" />
                          <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3" />
                        </th>
                        <th className="relative w-44 text-start p-4 text-zinc-700">
                          Amount
                          <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1" />
                          <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3" />
                        </th>
                        <th className="relative w-40 text-start p-4 text-zinc-700">
                          Status
                          <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1" />
                          <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3" />
                        </th>
                        <th className="relative w-40 text-start p-4 text-zinc-700">
                          Download Pdf
                          <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1" />
                          <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3" />
                        </th>
                        <th className="relative w-[90px] text-start p-4 text-zinc-700">
                          Action
                          <div className="hidden xl:block after:content-['↓'] absolute top-4 text-gray-200 text-15 ltr:right-1 rtl:left-1" />
                          <div className="hidden xl:block before:content-['↑'] absolute top-4 text-gray-200 text-15 ltr:right-3 rtl:left-3" />
                        </th>
                      </tr>
                    </thead>
                    
                     <Row />
                      
                      
                    
                  </table>
                </div>
                <div className="flex items-center place-content-between mt-4">
                  <div className="mt-4 mb-2">
                    <p className="text-gray-600 dark:text-gray-100">
                      Showing 1 to 10 of 12 entries
                    </p>
                  </div>
                  <div className="flex">
                    <nav aria-label="Page navigation example border">
                      <ul className="flex list-style-none">
                        <li
                          className="border ltr:rounded-l rtl:rounded-r border-gray-100 dark:border-zinc-600"
                          disabled
                        >
                          <a
                            className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-100 hover:text-violet-500 focus:shadow-none hover:bg-gray-200 pointer-events-none dark:text-gray-300"
                            href="#"
                          >
                            Previous
                          </a>
                        </li>
                        <li className="border border-l-0 border-r-0 border-violet-500 group hover:border-gray-200 transition-all duration-300 dark:border-zinc-600">
                          <a
                            className="page-link relative block py-2 px-3 border-0 group-hover bg-[#5156be] outline-none text-white hover:text-violet-500 group-hover:bg-gray-200 focus:shadow-none transition-all duration-300 dark:hover:bg-zinc-700 dark:hover:text-gray-100"
                            href="#"
                          >
                            1
                          </a>
                        </li>
                        <li className="border border-l-0 border-r-0 dark:border-zinc-600">
                          <a
                            className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-500 hover:text-violet-500 hover:bg-gray-50/50 focus:shadow-none dark:hover:bg-zinc-700 dark:hover:text-gray-100"
                            href="#"
                          >
                            2
                          </a>
                        </li>
                        <li className="border ltr:rounded-r rtl:rounded-l dark:border-zinc-600">
                          <a
                            className="page-link relative block py-2 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-500 hover:text-violet-500 hover:bg-gray-50/50 focus:shadow-none dark:hover:bg-zinc-700 dark:hover:text-gray-100"
                            href="#"
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
