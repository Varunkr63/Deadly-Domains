'use client';
import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import usePlanContext from '@/context/PlanContext';



const AddPlan = () => {

  const {
    HOSTING_VENDORS
  } = usePlanContext();

  const addplanForm = useFormik({
    initialValues: {
      title: '',
      pricing: '',
      provider: '',
      description: '',
      backup: '',
      cloudhosting: '',
      managedhosting: '',
      customersupport: '',
      features: '',
      ddosProtection: '',
      malwareScanner: '',
      freeCDN: '',
      unlimitedfreeSSL: '',
      GITaccess: '',

      uptimegurantee: '',



    },
    onSubmit: (values) => {
      console.log(values);

      //sending request to backend
      fetch('http://localhost:5000/plan/add', {
        method: 'POST',
        body: JSON.stringify(values),//convert js to json
        headers: {
          'content-type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar("Paln added Successfully", { variant: "success" })

          } else {
            enqueueSnackbar("Something went worng", { variant: "warning" })
          }
        }).catch((err) => {
          console.log(err);
          enqueueSnackbar("Something went worng", { variant: "warning" })
        })


    },

  })

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Add Plans
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">

            </p>
          </div>
          {/* text - end */}
          {/* form - start */}
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={addplanForm.handleSubmit}>
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Title*
              </label>
              <input
                name="title"
                id='title'
                value={addplanForm.values.title}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Free CDN*
              </label>
              <input
                name="freeCDN"
                id='freeCDN'
                value={addplanForm.values.freeCDN}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Cloud Hosting*
              </label>
              <input
                name="cloudhosting"
                id='cloudhosting'
                value={addplanForm.values.cloudhosting}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Manage Hosting*
              </label>
              <input
                name="managedhosting"
                id='managedhosting'
                value={addplanForm.values.managedhosting}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Features*
              </label>
              <input
                name="features"
                id='features'
                value={addplanForm.values.features}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                DDOS Protection*
              </label>
              <input
                name="ddosProtection"
                id='ddosProtection'
                value={addplanForm.values.ddosProtection}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="text"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Provider
              </label>
              <select
                id='provider'
                value={addplanForm.values.provider}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              >
                <option value="select">Select</option>
                {
                  HOSTING_VENDORS.map((vendor, index) => (
                    <option key={index} value={vendor.name}>{vendor.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="number"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Backup*
              </label>
              <input
                name="backup"
                id='backup'
                value={addplanForm.values.backup}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Customer Support*
              </label>
              <input
                name="customersupport"
                id='customersupport'
                value={addplanForm.values.customersupport}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Malware Scanner*
              </label>
              <input
                name="malwareScanner"
                id='malwareScanner'
                value={addplanForm.values.malwareScanner}
                onChange={addplanForm.handleChange}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Unlimited FreeSSL*
              </label>
              <input
                name="unlimitedfreeSSL"
                id='unlimitedfreeSSL'
                value={addplanForm.values.unlimitedfreeSSL}
                onChange={addplanForm.handleChange}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                GIT Access*
              </label>
              <input
                name="GITaccess"
                id='GITaccess'
                value={addplanForm.values.GITaccess}
                onChange={addplanForm.handleChange}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={""}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Up Time Gurantee*
              </label>
              <input
                name="uptimegurantee"
                id='uptimegurantee'
                value={addplanForm.values.uptimegurantee}
                onChange={addplanForm.handleChange}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"

              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="pricing"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Pricing*
              </label>
              <input
                id='pricing'
                value={addplanForm.values.pricing}
                onChange={addplanForm.handleChange}
                className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"

              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Description*
              </label>
              <textarea
                rows={4}
                id='description'
                value={addplanForm.values.description}
                onChange={addplanForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              ></textarea>
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Add Plan
              </button>

            </div>

          </form>
          {/* form - end */}
        </div>
      </div>



    </div>
  )
}

export default AddPlan