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
            fetch('http://localhost:5000/addplan/add', {
                method: 'POST',
                body: JSON.stringify(values),//convert js to json
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        enqueueSnackbar("feedback added Successfully", { variant: "success" })

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
           
           
            
        </div>
    )
}

export default AddPlan