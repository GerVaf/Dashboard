import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Row = () => {
  return (
    <tbody>
      <tr className="border-b border-gray-300  text-zinc-600">
        <td>
          <div className="p-4">
            <input
              type="checkbox"
              defaultValue
              className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-[#5156be] focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-[#5156be] dark:border-zinc-500"
            />
          </div>
        </td>
        <td>
          <div className="p-4">
            <a href="javascript: void(0);" className="text-black font-medium ">
              #MN0215
            </a>
          </div>
        </td>
        <td className="p-4 text-zinc-600">12 Oct, 2020</td>
        <td className="p-4 text-zinc-600">Connie Franco</td>
        <td className="p-4 text-zinc-600">$26.30</td>
        <td className="p-4">
          <div className="text-xs bg-green-50 inline-block text-green-700 px-1 py-0.5 rounded font-medium dark:bg-green-500/30">
            Paid
          </div>
        </td>
        <td className="p-4">
          <button
            type="button"
            className=" p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 dark:bg-zinc-600/50 dark:text-zinc-100"
          >
            <i className="bx bx-download label-icon px-2 py-1.5 bg-gray-200/20 text-black rounded-l dark:bg-zinc-600/50 dark:text-gray-100" />
            <span className="px-4 text-13">Pdf</span>{" "}
          </button>
        </td>
        <td>
          <div className="dropdown relative">
            <a
              className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenu123"
              aria-expanded="false"
            >
              {/* <i className="bx bx-dots-horizontal-rounded" /> */}
              <BsThreeDots />
            </a>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 dark:bg-zinc-700    rounded-lg shadow-lg hidden bg-clip-padding border-none"
              aria-labelledby="dropdownMenu123"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Print
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>

      <tr className="border-b border-gray-300 text-zinc-600">
        <td>
          <div className="p-4">
            <input
              type="checkbox"
              defaultValue
              className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-violet-500 dark:border-zinc-500"
            />
          </div>
        </td>
        <td>
          <div className="p-4">
            <a
              href="javascript: void(0);"
              className="text-black font-medium"
            >
              #MN0214
            </a>
          </div>
        </td>
        <td className="p-4 text-zinc-600">11 Oct, 2020</td>
        <td className="p-4 text-zinc-600">Paul Reynolds</td>
        <td className="p-4 text-zinc-600">$24.20</td>
        <td className="p-4">
          <div className="text-xs bg-green-50 inline-block text-green-700 px-1 py-0.5 rounded font-medium dark:bg-green-500/30">
            Paid
          </div>
        </td>
        <td className="p-4">
          <button
            type="button"
            className=" p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 dark:bg-zinc-600/50 dark:text-zinc-100"
          >
            <i className="bx bx-download label-icon px-2 py-1.5 bg-gray-200/20 text-black rounded-l dark:bg-zinc-600/50 dark:text-gray-100" />
            <span className="px-4 text-13">Pdf</span>{" "}
          </button>
        </td>
        <td>
          <div className="dropdown relative">
            <a
              className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenu123"
              aria-expanded="false"
            >
              <i className="bx bx-dots-horizontal-rounded" />
            </a>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 dark:bg-zinc-700
                                                            rounded-lg shadow-lg hidden bg-clip-padding border-none"
              aria-labelledby="dropdownMenu123"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Print
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr className="border-b border-gray-300 text-zinc-600">
        <td>
          <div className="p-4">
            <input
              type="checkbox"
              defaultValue
              className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-violet-500 dark:border-zinc-500"
            />
          </div>
        </td>
        <td>
          <div className="p-4">
            <a
              href="javascript: void(0);"
              className="text-black font-medium "
            >
              #MN0213
            </a>
          </div>
        </td>
        <td className="p-4 text-zinc-600">10 Oct, 2020</td>
        <td className="p-4 text-zinc-600">Ronald Patterson</td>
        <td className="p-4 text-zinc-600">$20.20</td>
        <td className="p-4">
          <div className="text-xs bg-yellow-50 inline-block text-yellow-500 px-1 py-0.5 rounded font-medium dark:bg-yellow-500/30">
            Pending
          </div>
        </td>
        <td className="p-4">
          <button
            type="button"
            className=" p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 dark:bg-zinc-600/50 dark:text-zinc-100"
          >
            <i className="bx bx-download label-icon px-2 py-1.5 bg-gray-200/20 text-black rounded-l dark:bg-zinc-600/50 dark:text-gray-100" />
            <span className="px-4 text-13">Pdf</span>{" "}
          </button>
        </td>
        <td>
          <div className="dropdown relative">
            <a
              className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenu123"
              aria-expanded="false"
            >
              <i className="bx bx-dots-horizontal-rounded" />
            </a>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 dark:bg-zinc-700
                                                            rounded-lg shadow-lg hidden bg-clip-padding border-none"
              aria-labelledby="dropdownMenu123"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Print
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr className="border-b border-gray-300  text-zinc-600">
        <td>
          <div className="p-4">
            <input
              type="checkbox"
              defaultValue
              className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-[#5156be] focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-[#5156be] dark:border-zinc-500"
            />
          </div>
        </td>
        <td>
          <div className="p-4">
            <a href="javascript: void(0);" className="text-black font-medium ">
              #MN0215
            </a>
          </div>
        </td>
        <td className="p-4 text-zinc-600">12 Oct, 2020</td>
        <td className="p-4 text-zinc-600">Connie Franco</td>
        <td className="p-4 text-zinc-600">$26.30</td>
        <td className="p-4">
          <div className="text-xs bg-green-50 inline-block text-green-700 px-1 py-0.5 rounded font-medium dark:bg-green-500/30">
            Paid
          </div>
        </td>
        <td className="p-4">
          <button
            type="button"
            className=" p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 dark:bg-zinc-600/50 dark:text-zinc-100"
          >
            <i className="bx bx-download label-icon px-2 py-1.5 bg-gray-200/20 text-black rounded-l dark:bg-zinc-600/50 dark:text-gray-100" />
            <span className="px-4 text-13">Pdf</span>{" "}
          </button>
        </td>
        <td>
          <div className="dropdown relative">
            <a
              className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenu123"
              aria-expanded="false"
            >
              {/* <i className="bx bx-dots-horizontal-rounded" /> */}
              <BsThreeDots />
            </a>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 dark:bg-zinc-700    rounded-lg shadow-lg hidden bg-clip-padding border-none"
              aria-labelledby="dropdownMenu123"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Print
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>

      <tr className="border-b border-gray-300 text-zinc-600">
        <td>
          <div className="p-4">
            <input
              type="checkbox"
              defaultValue
              className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-violet-500 dark:border-zinc-500"
            />
          </div>
        </td>
        <td>
          <div className="p-4">
            <a
              href="javascript: void(0);"
              className="text-black font-medium"
            >
              #MN0214
            </a>
          </div>
        </td>
        <td className="p-4 text-zinc-600">11 Oct, 2020</td>
        <td className="p-4 text-zinc-600">Paul Reynolds</td>
        <td className="p-4 text-zinc-600">$24.20</td>
        <td className="p-4">
          <div className="text-xs bg-green-50 inline-block text-green-700 px-1 py-0.5 rounded font-medium dark:bg-green-500/30">
            Paid
          </div>
        </td>
        <td className="p-4">
          <button
            type="button"
            className=" p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 dark:bg-zinc-600/50 dark:text-zinc-100"
          >
            <i className="bx bx-download label-icon px-2 py-1.5 bg-gray-200/20 text-black rounded-l dark:bg-zinc-600/50 dark:text-gray-100" />
            <span className="px-4 text-13">Pdf</span>{" "}
          </button>
        </td>
        <td>
          <div className="dropdown relative">
            <a
              className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenu123"
              aria-expanded="false"
            >
              <i className="bx bx-dots-horizontal-rounded" />
            </a>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 dark:bg-zinc-700
                                                            rounded-lg shadow-lg hidden bg-clip-padding border-none"
              aria-labelledby="dropdownMenu123"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Print
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr className="border-b border-gray-300 text-zinc-600">
        <td>
          <div className="p-4">
            <input
              type="checkbox"
              defaultValue
              className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-violet-500 dark:border-zinc-500"
            />
          </div>
        </td>
        <td>
          <div className="p-4">
            <a
              href="javascript: void(0);"
              className="text-black font-medium "
            >
              #MN0213
            </a>
          </div>
        </td>
        <td className="p-4 text-zinc-600">10 Oct, 2020</td>
        <td className="p-4 text-zinc-600">Ronald Patterson</td>
        <td className="p-4 text-zinc-600">$20.20</td>
        <td className="p-4">
          <div className="text-xs bg-yellow-50 inline-block text-yellow-500 px-1 py-0.5 rounded font-medium dark:bg-yellow-500/30">
            Pending
          </div>
        </td>
        <td className="p-4">
          <button
            type="button"
            className=" p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 dark:bg-zinc-600/50 dark:text-zinc-100"
          >
            <i className="bx bx-download label-icon px-2 py-1.5 bg-gray-200/20 text-black rounded-l dark:bg-zinc-600/50 dark:text-gray-100" />
            <span className="px-4 text-13">Pdf</span>{" "}
          </button>
        </td>
        <td>
          <div className="dropdown relative">
            <a
              className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenu123"
              aria-expanded="false"
            >
              <i className="bx bx-dots-horizontal-rounded" />
            </a>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 dark:bg-zinc-700
                                                            rounded-lg shadow-lg hidden bg-clip-padding border-none"
              aria-labelledby="dropdownMenu123"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Print
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr className="border-b border-gray-300  text-zinc-600">
        <td>
          <div className="p-4">
            <input
              type="checkbox"
              defaultValue
              className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-[#5156be] focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-[#5156be] dark:border-zinc-500"
            />
          </div>
        </td>
        <td>
          <div className="p-4">
            <a href="javascript: void(0);" className="text-black font-medium ">
              #MN0215
            </a>
          </div>
        </td>
        <td className="p-4 text-zinc-600">12 Oct, 2020</td>
        <td className="p-4 text-zinc-600">Connie Franco</td>
        <td className="p-4 text-zinc-600">$26.30</td>
        <td className="p-4">
          <div className="text-xs bg-green-50 inline-block text-green-700 px-1 py-0.5 rounded font-medium dark:bg-green-500/30">
            Paid
          </div>
        </td>
        <td className="p-4">
          <button
            type="button"
            className=" p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 dark:bg-zinc-600/50 dark:text-zinc-100"
          >
            <i className="bx bx-download label-icon px-2 py-1.5 bg-gray-200/20 text-black rounded-l dark:bg-zinc-600/50 dark:text-gray-100" />
            <span className="px-4 text-13">Pdf</span>{" "}
          </button>
        </td>
        <td>
          <div className="dropdown relative">
            <a
              className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenu123"
              aria-expanded="false"
            >
              {/* <i className="bx bx-dots-horizontal-rounded" /> */}
              <BsThreeDots />
            </a>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 dark:bg-zinc-700    rounded-lg shadow-lg hidden bg-clip-padding border-none"
              aria-labelledby="dropdownMenu123"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Print
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>

      <tr className="border-b border-gray-300 text-zinc-600">
        <td>
          <div className="p-4">
            <input
              type="checkbox"
              defaultValue
              className="w-4 h-4 ring-0 border-gray-100 rounded checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-700 dark:checked:bg-violet-500 dark:border-zinc-500"
            />
          </div>
        </td>
        <td>
          <div className="p-4">
            <a
              href="javascript: void(0);"
              className="text-black font-medium"
            >
              #MN0214
            </a>
          </div>
        </td>
        <td className="p-4 text-zinc-600">11 Oct, 2020</td>
        <td className="p-4 text-zinc-600">Paul Reynolds</td>
        <td className="p-4 text-zinc-600">$24.20</td>
        <td className="p-4">
          <div className="text-xs bg-green-50 inline-block text-green-700 px-1 py-0.5 rounded font-medium dark:bg-green-500/30">
            Paid
          </div>
        </td>
        <td className="p-4">
          <button
            type="button"
            className=" p-0 border-transparent bg-gray-50/30 rounded hover:bg-gray-50/50/80 transition-all duration-300 dark:bg-zinc-600/50 dark:text-zinc-100"
          >
            <i className="bx bx-download label-icon px-2 py-1.5 bg-gray-200/20 text-black rounded-l dark:bg-zinc-600/50 dark:text-gray-100" />
            <span className="px-4 text-13">Pdf</span>{" "}
          </button>
        </td>
        <td>
          <div className="dropdown relative">
            <a
              className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenu123"
              aria-expanded="false"
            >
              <i className="bx bx-dots-horizontal-rounded" />
            </a>
            <ul
              className=" dropdown-menu min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 dark:bg-zinc-700
                                                            rounded-lg shadow-lg hidden bg-clip-padding border-none"
              aria-labelledby="dropdownMenu123"
            >
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Print
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap dark:text-gray-100 dark:hover:bg-zinc-600/50 bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
                  href="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
     
    </tbody>
  );
};

export default Row;
