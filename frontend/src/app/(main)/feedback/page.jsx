'use client';
import { useFormik } from 'formik'
import React from 'react'

import { enqueueSnackbar } from 'notistack';


const Feedback = () => {

  const feedbackForm = useFormik({
    initialValues: {
        fullname: '',
        email: '',
        comment:'',
        
       
    },
    onSubmit: (values) => {
        console.log(values);

         //sending request to backend
         fetch('http://localhost:5000/feedback/add',{
            method: 'POST',
            body: JSON.stringify(values),//convert js to json
            headers:{
                'content-type': 'application/json'
            }
         })
         .then((response) => {
            console.log(response.status);
            if (response.status === 200){
              enqueueSnackbar("feedback added Successfully", {variant:"success"})
             
            }else{
              enqueueSnackbar("Something went worng", {variant:"warning"})
            }
         }).catch((err) => {
            console.log(err);
            enqueueSnackbar("Something went worng", {variant:"warning"})
         })
        
         
        },
        
})

  return (
    <div>
        <>
  {/* Comment Form */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10">
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
          Feedback
        </h2>
      </div>
      {/* Card */}
      <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={feedbackForm.handleSubmit}>
          <div className="mb-4 sm:mb-8">
            <label
              htmlFor="hs-feedback-post-comment-name-1"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              value={feedbackForm.values.fullname}
              onChange={feedbackForm.handleChange}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Full name"
            />
          </div>
          <div className="mb-4 sm:mb-8">
            <label
              htmlFor="hs-feedback-post-comment-email-1"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={feedbackForm.values.email}
              onChange={feedbackForm.handleChange}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Email address"
            />
          </div>
          <div>
            <label
              htmlFor="hs-feedback-post-comment-textarea-1"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Comment
            </label>
            <div className="mt-1">
              <textarea
                id="comment"
                name="comment"
                value={feedbackForm.values.comment}
                onChange={feedbackForm.handleChange}
                rows={3}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Leave your comment here..."
                defaultValue={""}
              />
            </div>
          </div>
          <div className="mt-6 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* End Card */}
    </div>
  </div>
  {/* End Comment Form */}
</>

    </div>
    
    
    
  )
}

export default Feedback