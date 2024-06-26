'use client';
import { Dialog } from '@headlessui/react';
import { IconPlus } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'


const ComparePlans = () => {

  const [selPlans, setSelPlans] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [planResult, setPlanResult] = useState([]);
  const [allPlans, setAllPlans] = useState([]);

  const fetchPlanDetails = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan/getbyid/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSelPlans(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const fetchAllPlans = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan/getall`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setAllPlans(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const addPlanToComparison = (plan) => {
    setAllPlans([...selPlans, plan]);
    console.log(selPlans);
  }

  const filterPlans = (e) => {
    const search = e.target.value;
    if (search === '') setPlanResult([]);
    const filteredPlans = allPlans.filter(plan => plan.title.toLowerCase().includes(search.toLowerCase()));
    setPlanResult(filteredPlans);
  }

  useEffect(() => {
    fetchAllPlans();
  }, [])

  const showComparison = () => {

  }

  const displayPlansComparision = () => {
    return selPlans.map(plan => (
      <div className="col-span-1">
        {/* Header */}
        <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
          <div>
            <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
              Free
            </span>
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Free forever
            </p>
          </div>
          <div className="mt-2">
            <a
              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>
        {/* End Header */}
      </div>
    ))
  }

  const planSearchResult = () => {
    return <div className='h-96 overflow-auto py-10'>
      {
        planResult.map(plan => (
          <div className="flex items-end content-between bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="p-4 md:p-5">
              <div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {plan.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  ₹{plan.pricing}
                </p>
              </div>
              <button onClick={() => addPlanToComparison(plan)} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Add Plan
              </button>
            </div>
          </div>
        ))
      }
    </div>
  }

  const addPlanModal = () => {
    return <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Find Plans for Comparison
        </h3>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          Select the plans you want to compare
        </p>
        <div className='my-10'>
          <label
            htmlFor="hs-trailing-button-add-on-with-icon-and-button"
            className="sr-only"
          >
            Label
          </label>
          <div className="relative flex rounded-lg shadow-sm">
            <input
              onChange={filterPlans}
              type="text"
              id="hs-trailing-button-add-on-with-icon-and-button"
              name="hs-trailing-button-add-on-with-icon-and-button"
              className="border-2 py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <svg
                className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500"
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
          </div>

          {
            planSearchResult()
          }
        </div>
      </div>
      <div className="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
        <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
          Last updated 5 mins ago
        </p>
      </div>
    </div>

  }

  return (
    <div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-lg rounded bg-transparent">
            {addPlanModal()}


          </Dialog.Panel>
        </div>
      </Dialog>
      <>
        {/* Comparison Table */}
        <div className="relative dark:bg-slate-800">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
                Compare Hosting Plans
              </h2>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Choose the best plan for your business
              </p>
            </div>
            <button onClick={e => setIsOpen(true)} className='mb-5 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-700 dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800'>
              <IconPlus size={20} />
              Add Plan to Comparison
            </button>
            <div className="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:w-full after:h-48 after:bg-gradient-to-t after:from-white after:via-white/70 dark:after:from-neutral-900 dark:after:via-neutral-900/95">
              {/* Header */}
              <div className="hidden lg:block sticky top-0 start-0 py-2 bg-white dark:bg-slate-800">
                {/* Grid */}
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2">
                    {/* Header */}
                    <div className="h-full"></div>
                    {/* End Header */}
                  </div>
                  {/* End Col */}

                  {
                    displayPlansComparision()
                  }
                </div>
                {/* End Grid */}
              </div>
              {/* End Header */}
              {/* Section */}
              <div className="space-y-4 lg:space-y-0">
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      General
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Number of seats
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        1
                      </span>
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Up to 3
                      </span>
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Up to 10
                      </span>
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Unlimited
                      </span>
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Storage
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        15 GB
                      </span>
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        1 TB
                      </span>
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        15 TB
                      </span>
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Unlimited
                      </span>
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Email sharing
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Any time, anywhere access
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
              </div>
              {/* End Section */}
              {/* Section */}
              <div className="mt-6 space-y-4 lg:space-y-0">
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Financial data
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Open/High/Low/Close
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Price-volume difference indicator
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
              </div>
              {/* End Section */}
              {/* Section */}
              <div className="mt-6 space-y-4 lg:space-y-0">
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      On-chain data
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Network growth
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Average token age consumed
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Exchange flow
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Total ERC20 exchange funds flow
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Transaction volume
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Total circulation (beta)
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Velocity of tokens (beta)
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      ETH gas used
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
              </div>
              {/* End Section */}
              {/* Section */}
              <div className="mt-6 space-y-4 lg:space-y-0">
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Social data
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Dev activity
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Topic search
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
                {/* List */}
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  {/* Item */}
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Relative social dominance
                    </span>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Free
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Startup
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Team
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600"
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
                    </div>
                  </li>
                  {/* End Item */}
                  {/* Item */}
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                        Enterprise
                      </span>
                      <svg
                        className="flex-shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500"
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
                    </div>
                  </li>
                  {/* End Item */}
                </ul>
                {/* End List */}
              </div>
              {/* End Section */}
              {/* Load More Content */}
              <div
                id="view-all-features-button"
                className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="view-all-features"
              >
                {/* Section */}
                <div className="mt-6 relative z-20 space-y-4 lg:space-y-0">
                  {/* List */}
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    {/* Item */}
                    <li className="lg:col-span-2 lg:py-3">
                      <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Additional features
                      </span>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                    {/* End Item */}
                  </ul>
                  {/* End List */}
                  {/* List */}
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    {/* Item */}
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Dedicated account manager
                      </span>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Free
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Startup
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Team
                        </span>
                        <svg
                          className="size-5 lg:mx-auto text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Enterprise
                        </span>
                        <svg
                          className="size-5 lg:mx-auto text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                  </ul>
                  {/* End List */}
                  {/* List */}
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    {/* Item */}
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        24/7 support
                      </span>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Free
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Startup
                        </span>
                        <svg
                          className="size-5 lg:mx-auto text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Team
                        </span>
                        <svg
                          className="size-5 lg:mx-auto text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Enterprise
                        </span>
                        <svg
                          className="size-5 lg:mx-auto text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                  </ul>
                  {/* End List */}
                  {/* List */}
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    {/* Item */}
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Rewards
                      </span>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Free
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Startup
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Team
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Enterprise
                        </span>
                        <svg
                          className="size-5 lg:mx-auto text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                  </ul>
                  {/* End List */}
                  {/* List */}
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    {/* Item */}
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Business API
                      </span>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Free
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Startup
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Team
                        </span>
                        <svg
                          className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                    {/* Item */}
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Enterprise
                        </span>
                        <svg
                          className="size-5 lg:mx-auto text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    </li>
                    {/* End Item */}
                  </ul>
                  {/* End List */}
                </div>
                {/* End Section */}
              </div>
              {/* End Load More Content */}
            </div>
            {/* View More Button */}
            <div className="mt-8 text-center">
              <button
                type="button"
                id="view-all-features"
                className="hs-collapse-toggle hs-collapse-open:rounded-full hs-collapse-open:px-3 group py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                data-hs-collapse="#view-all-features-button"
              >
                <span className="hs-collapse-open:hidden">View all features</span>
                <svg
                  className="hidden hs-collapse-open:block group-hover:rotate-180 transition duration-300 flex-shrink-0 size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            {/* End View More Button */}
          </div>
        </div>
        {/* End Comparison Table */}
      </>

    </div>
  )
}

export default ComparePlans