'use client';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ManagePlan = () => {

  const [plan, setPlan] = useState([])
  const [masterList, setMasterList] = useState([]);

  const getPlan = async () => {
    const res = await fetch("http://localhost:5000/plan/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setPlan(data);
    setMasterList(data);
  }

  useEffect(() => {
    getPlan()
  }, [])

  const deletePlan = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/plan/delete/" + id, {
      method: "DELETE",
    })
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar("plan Deleted Successfully", { variant: "success" })
      getPlan()
    } else {
      enqueueSnackbar("Plan not Deleted", { variant: "warning" })
    }
  }

  //for searching

  const applysearch = (e) => {
    const inputText = e.target.value;

    setPlan(masterList.filter((plan) => {
      return plan.name.toLowerCase().includes(inputText.toLowerCase());
    }));
  }

  // for searching

  const displayPlan = () => {
    return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
             
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Provider
            </th>
            <th scope="col" className="px-6 py-3">
              Pricing
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {
          plan.map((a) => {
            return (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                   
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >

                    <div className="ps-3">
                      <div className="text-base font-semibold">{a.title}</div>
                      <div className="font-normal text-gray-500">

                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4"> {a.provider}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">

                      {a.pricing}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      onClick={(e) => deletePlan(a._id)}
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete Plan
                    </a>
                  </td>
                </tr>

              </tbody>
            )
          })
        }

      </table>
    )
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <div className=" flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div>
           
          </div>
          <label htmlFor="table-search" className="sr-only ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={applysearch}
              type="text"
              id="table-search-plans"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for plans"
            />
          </div>
        </div>
        {
          displayPlan()
        }
      </div>

    </div>
  )
}

export default ManagePlan;