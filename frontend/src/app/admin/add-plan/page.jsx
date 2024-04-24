import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'



const AddPlan = () => {

    const addplanForm = useFormik({
        initialValues: {
            title: '',
    pricing: '',
    provider: '',
     
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
             fetch('http://localhost:5000/addplan/add',{
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
        <select className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm 
        focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
        disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 
        dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                <option selected="">Open this select menu</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
    </div>
  )
}

export default AddPlan