import React from 'react'
import Navbar from './(main)/navbar'

const Home = () => {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-slate-900 dark:border-gray-700">
        <nav
          className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="me-5 md:me-8">
            <a
              className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
          </div>
          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 size-[38px] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
            <div className="hidden sm:block">
              <label htmlFor="icon" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="py-2 pe-4 ps-10 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
              <button
                type="button"
                className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-offcanvas="#hs-offcanvas-right"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </button>
              <div
                className="hs-dropdown relative inline-flex"
                data-hs-dropdown-placement="bottom-right"
              >
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </button>
                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Signed in as
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                      james@site.com
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                      Newsletter
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                      Purchases
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M12 12v9" />
                        <path d="m8 17 4 4 4-4" />
                      </svg>
                      Downloads
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Team Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <nav
        className="sticky -top-px bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]"
        aria-label="Jump links"
      >
        <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900">
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
            <a
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Dashboard
            </a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Users
            </a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Account
            </a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Projects
            </a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Calendar
            </a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Documentation
              <span className="inline bg-gray-100 text-xs text-gray-500 font-semibold rounded-full py-1 px-2 dark:bg-gray-700 dark:text-gray-400">
                v12.7
              </span>
            </a>
          </div>
        </div>
      </nav>


      <>
        {/* Hero */}
        <div className="bg-slate-900">
          <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              {/* Announcement Banner */}
              <div className="flex justify-center">
                <a
                  className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
                  href="../figma.html"
                >
                  <p className="me-2 inline-block text-white text-sm">
                    Preline UI Figma is live.
                  </p>
                  <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                    <svg
                      className="flex-shrink-0 size-4"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              {/* End Announcement Banner */}
              {/* Title */}
              <div className="max-w-3xl text-center mx-auto">
                <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Now it's easier than ever to build products
                </h1>
              </div>
              {/* End Title */}
              <div className="max-w-3xl text-center mx-auto">
                <p className="text-lg text-gray-400">
                  Preline is a large open-source project, crafted with Tailwind CSS
                  framework by Hmlstream.
                </p>
              </div>
              {/* Buttons */}
              <div className="text-center">
                <a
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  Get started
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>
      <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card */}
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                <svg
                  className="size-28"
                  width={56}
                  height={56}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={10} fill="white" />
                  <path
                    d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z"
                    fill="url(#paint0_linear_2204_541)"
                  />
                  <path
                    d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z"
                    fill="#2684FF"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2204_541"
                      x1="24.734"
                      y1="29.2284"
                      x2="16.1543"
                      y2="44.0429"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0052CC" />
                      <stop offset="0.92" stopColor="#2684FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                  Atlassian API
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  Atlassian
                </h3>
                <p className="mt-3 text-gray-500">
                  A software that develops products for software developers and
                  developments.
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  View sample
                </a>
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  View API
                </a>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
                <svg
                  className="size-28"
                  width={56}
                  height={56}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={10} fill="white" />
                  <g clipPath="url(#clip0_2204_541)">
                    <path
                      d="M37.0409 28.8697C33.1968 28.8697 30.0811 31.9854 30.0811 35.8288C30.0811 39.6726 33.1968 42.789 37.0409 42.789C40.8843 42.789 44 39.6726 44 35.8288C44 31.9854 40.8843 28.8697 37.0409 28.8697ZM18.9594 28.8701C15.116 28.8704 12 31.9854 12 35.8292C12 39.6726 15.116 42.7886 18.9594 42.7886C22.8032 42.7886 25.9192 39.6726 25.9192 35.8292C25.9192 31.9854 22.8032 28.8701 18.9591 28.8701H18.9594ZM34.9595 20.1704C34.9595 24.0138 31.8438 27.1305 28.0004 27.1305C24.1563 27.1305 21.0406 24.0138 21.0406 20.1704C21.0406 16.3269 24.1563 13.2109 28.0003 13.2109C31.8438 13.2109 34.9591 16.3269 34.9591 20.1704H34.9595Z"
                      fill="url(#paint0_radial_2204_541)"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial_2204_541"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)"
                    >
                      <stop stopColor="#FFB900" />
                      <stop offset="0.6" stopColor="#F95D8F" />
                      <stop offset="0.999" stopColor="#F95353" />
                    </radialGradient>
                    <clipPath id="clip0_2204_541">
                      <rect
                        width={32}
                        height="29.5808"
                        fill="white"
                        transform="translate(12 13.2096)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
                  Asana API
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  Asana
                </h3>
                <p className="mt-3 text-gray-500">
                  Track tasks and projects, use agile boards, measure progress.
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  View sample
                </a>
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  View API
                </a>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
                <svg
                  className="size-28"
                  width={56}
                  height={56}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={10} fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.7326 11.968C21.9637 11.9693 20.5321 13.4049 20.5334 15.1738C20.5321 16.9427 21.965 18.3782 23.7339 18.3795H26.9345V15.1751C26.9358 13.4062 25.5029 11.9706 23.7326 11.968C23.7339 11.968 23.7339 11.968 23.7326 11.968M23.7326 20.5184H15.2005C13.4316 20.5197 11.9987 21.9553 12 23.7242C11.9974 25.4931 13.4303 26.9286 15.1992 26.9312H23.7326C25.5016 26.9299 26.9345 25.4944 26.9332 23.7255C26.9345 21.9553 25.5016 20.5197 23.7326 20.5184V20.5184Z"
                    fill="#36C5F0"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.0001 23.7242C44.0014 21.9553 42.5684 20.5197 40.7995 20.5184C39.0306 20.5197 37.5977 21.9553 37.599 23.7242V26.9312H40.7995C42.5684 26.9299 44.0014 25.4944 44.0001 23.7242ZM35.4666 23.7242V15.1738C35.4679 13.4062 34.0363 11.9706 32.2674 11.968C30.4985 11.9693 29.0656 13.4049 29.0669 15.1738V23.7242C29.0643 25.4931 30.4972 26.9286 32.2661 26.9312C34.035 26.9299 35.4679 25.4944 35.4666 23.7242Z"
                    fill="#2EB67D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32.2661 44.0322C34.035 44.0309 35.4679 42.5953 35.4666 40.8264C35.4679 39.0575 34.035 37.622 32.2661 37.6207H29.0656V40.8264C29.0642 42.594 30.4972 44.0295 32.2661 44.0322ZM32.2661 35.4804H40.7995C42.5684 35.4791 44.0013 34.0436 44 32.2747C44.0026 30.5058 42.5697 29.0702 40.8008 29.0676H32.2674C30.4985 29.0689 29.0656 30.5045 29.0669 32.2734C29.0656 34.0436 30.4972 35.4791 32.2661 35.4804V35.4804Z"
                    fill="#ECB22E"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 32.2746C11.9987 34.0435 13.4316 35.479 15.2005 35.4804C16.9694 35.479 18.4024 34.0435 18.401 32.2746V29.0688H15.2005C13.4316 29.0702 11.9987 30.5057 12 32.2746ZM20.5334 32.2746V40.825C20.5308 42.5939 21.9637 44.0295 23.7326 44.0321C25.5016 44.0308 26.9345 42.5952 26.9332 40.8263V32.2772C26.9358 30.5083 25.5029 29.0728 23.7339 29.0702C21.9637 29.0702 20.5321 30.5057 20.5334 32.2746C20.5334 32.2759 20.5334 32.2746 20.5334 32.2746Z"
                    fill="#E01E5A"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
                  Slack API
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  Slack
                </h3>
                <p className="mt-3 text-gray-500">
                  Email collaboration and email service desk made easy.
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  View sample
                </a>
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  View API
                </a>
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>
      <>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16">
            {/* Grid */}
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                  Fully customizable rules to match your unique needs
                </h2>
                {/* Tab Navs */}
                <nav
                  className="grid gap-4 mt-5 md:mt-10"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                      </svg>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Advanced tools
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Use Preline thoroughly thought and automated libraries to
                          manage your businesses.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 14 4-4" />
                        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                      </svg>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Smart dashboards
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Quickly Preline sample components, copy-paste codes, and
                          start right off.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        <path d="M5 3v4" />
                        <path d="M19 17v4" />
                        <path d="M3 5h4" />
                        <path d="M17 19h4" />
                      </svg>
                      <span className="grow ms-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Powerful features
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Reduce time and effort on building modern look design with
                          Preline only.
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
                {/* End Tab Navs */}
              </div>
              {/* End Col */}
              <div className="lg:col-span-6">
                <div className="relative">
                  {/* Tab Content */}
                  <div>
                    <div
                      id="tabs-with-card-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-1"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div
                      id="tabs-with-card-2"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-2"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div
                      id="tabs-with-card-3"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-3"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  {/* End Tab Content */}
                  {/* SVG Element */}
                  <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                    <svg
                      className="w-16 h-auto text-orange-500"
                      width={121}
                      height={135}
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            {/* Background Color */}
            <div className="absolute inset-0 grid grid-cols-12 size-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]" />
            </div>
            {/* End Background Color */}
          </div>
        </div>
        {/* End Features */}
      </>
      <>
        {/* Pricing */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Pricing
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Whatever your status, our offers evolve according to your needs.
            </p>
          </div>
          {/* End Title */}
          {/* Switch */}
          <div className="flex justify-center items-center">
            <label className="min-w-14 text-sm text-gray-500 me-3 dark:text-gray-400">
              Monthly
            </label>
            <input
              type="checkbox"
              id="hs-basic-with-description"
              className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600

    before:inline-block before:size-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-white"
              defaultChecked=""
            />
            <label className="relative min-w-14 text-sm text-gray-500 ms-3 dark:text-gray-400">
              Annual
              <span className="absolute -top-10 start-auto -end-28">
                <span className="flex items-center">
                  <svg
                    className="w-14 h-8 -me-6"
                    width={45}
                    height={25}
                    viewBox="0 0 45 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                      fill="currentColor"
                      className="fill-gray-300 dark:fill-gray-700"
                    />
                  </svg>
                  <span className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">
                    Save up to 10%
                  </span>
                </span>
              </span>
            </label>
          </div>
          {/* End Switch */}
          {/* Grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
            {/* Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Free
              </h4>
              <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
                Free
              </span>
              <p className="mt-2 text-sm text-gray-500">Forever free</p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">1 user</span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
              <p className="mb-3">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                  Most popular
                </span>
              </p>
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Startup
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                <span className="font-bold text-2xl -me-2">$</span>
                39
              </span>
              <p className="mt-2 text-sm text-gray-500">
                All the basics for starting a new business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">2 users</span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Team
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                <span className="font-bold text-2xl -me-2">$</span>
                89
              </span>
              <p className="mt-2 text-sm text-gray-500">
                Everything you need for a growing business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">5 users</span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                Enterprise
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
                <span className="font-bold text-2xl -me-2">$</span>
                149
              </span>
              <p className="mt-2 text-sm text-gray-500">
                Advanced features for scaling your business
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">10 users</span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Plan features
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-400">
                    Product support
                  </span>
                </li>
              </ul>
              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}
          {/* Comparison table */}
          <div className="mt-20 lg:mt-32">
            <div className="lg:text-center mb-10 lg:mb-20">
              <h3 className="text-2xl font-semibold dark:text-white">
                Compare plans
              </h3>
            </div>
            {/* xs to lg */}
            <div className="space-y-24 lg:hidden">
              <section>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Free
                  </h2>
                </div>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Financial data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Open/High/Low/Close
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Price-volume difference indicator
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    On-chain data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Network growth
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Average token age consumed
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Exchange flow
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total ERC20 exchange funds flow
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Transaction volume
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total circulation (beta)
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Velocity of tokens (beta)
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        ETH gas used
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Social data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Dev activity
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Topic search
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Relative social dominance
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total social volume
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Startup
                  </h2>
                </div>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Financial data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Open/High/Low/Close
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Price-volume difference indicator
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    On-chain data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Network growth
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Average token age consumed
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Exchange flow
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total ERC20 exchange funds flow
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Transaction volume
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total circulation (beta)
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Velocity of tokens (beta)
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        ETH gas used
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Social data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Dev activity
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Topic search
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Relative social dominance
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total social volume
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Team
                  </h2>
                </div>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Financial data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Open/High/Low/Close
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Price-volume difference indicator
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    On-chain data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Network growth
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Average token age consumed
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Exchange flow
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total ERC20 exchange funds flow
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Transaction volume
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total circulation (beta)
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Velocity of tokens (beta)
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        ETH gas used
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Social data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Dev activity
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Topic search
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Relative social dominance
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total social volume
                      </th>
                      <td className="py-5 pe-4">
                        {/* Minus */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-gray-400 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {/* Minus */}
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Enterprise
                  </h2>
                </div>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Financial data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Open/High/Low/Close
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Price-volume difference indicator
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    On-chain data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Network growth
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Average token age consumed
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Exchange flow
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total ERC20 exchange funds flow
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Transaction volume
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total circulation (beta)
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Velocity of tokens (beta)
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        ETH gas used
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                    Social data
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Dev activity
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Topic search
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Relative social dominance
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                        scope="row"
                      >
                        Total social volume
                      </th>
                      <td className="py-5 pe-4">
                        {/* Check */}
                        <svg
                          className="flex-shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {/* End Solid Check */}
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
            {/* End xs to lg */}
            {/* lg+ */}
            <div className="hidden lg:block">
              <table className="w-full h-px">
                <caption className="sr-only">Pricing plan comparison</caption>
                <thead className="sticky top-0 inset-x-0 bg-white dark:bg-slate-900">
                  <tr>
                    <th
                      className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
                      scope="col"
                    >
                      <span className="sr-only">Feature by</span>
                      <span className="dark:text-white">Plans</span>
                    </th>
                    <th
                      className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                      scope="col"
                    >
                      Free
                    </th>
                    <th
                      className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                      scope="col"
                    >
                      Startup
                    </th>
                    <th
                      className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                      scope="col"
                    >
                      Team
                    </th>
                    <th
                      className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                      scope="col"
                    >
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <tr>
                    <th
                      className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white"
                      colSpan={5}
                      scope="colgroup"
                    >
                      Financial data
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white"
                      colSpan={5}
                      scope="colgroup"
                    >
                      On-chain data
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white"
                      colSpan={5}
                      scope="colgroup"
                    >
                      Social data
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* Minus */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      {/* Minus */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Minus */}
                      {/* Minus */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      {/* Check */}
                      <svg
                        className="mx-auto flex-shrink-0 size-5 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* End Solid Check */}
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End lg+ */}
          </div>
          {/* End Comparison table */}
        </div>
        {/* End Pricing */}
      </>

      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="/docs/images/carousel/carousel-1.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="/docs/images/carousel/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="/docs/images/carousel/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="/docs/images/carousel/carousel-4.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="/docs/images/carousel/carousel-5.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          />
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>


      <footer className="bg-gray-900 w-full">
        <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
                aria-label="Brand"
              >
                Brand
              </a>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Product</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Changelog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Docs
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Company</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Blog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Careers
                  </a>{" "}
                  <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                    We're hiring
                  </span>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Customers
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-span-2">
              <h4 className="font-semibold text-gray-100">Stay up to date</h4>
              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-gray-800">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <a
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Subscribe
                  </a>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  New UI kits or big discounts. Never spam.
                </p>
              </form>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2022 Preline. All rights reserved.
              </p>
            </div>
            {/* End Col */}
            {/* Social Brands */}
            <div>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
              </a>
            </div>
            {/* End Social Brands */}
          </div>
        </div>
      </footer>




    </>
  )
}

export default Home