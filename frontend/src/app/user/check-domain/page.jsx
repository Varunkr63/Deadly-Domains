'use client';
import { IconCheckbox, IconX } from "@tabler/icons-react";
import { useRef, useState } from "react";

const CheckDomain = () => {

    const [availabilityStatus, setAvailabilityStatus] = useState({});
    const inputRef = useRef(null);
    const [isAvailable, setIsAvailable] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const callAPI = (domain) => {
        fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}&domainName=${domain}&credits=DA`)
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    response.json()
                        .then((data) => {
                            console.log(data);
                            setSubmitted(true);
                            console.log(data.DomainInfo.domainAvailability);
                            if (data.DomainInfo.domainAvailability === "AVAILABLE") {
                                setIsAvailable(true);
                            }else {
                                setIsAvailable(false);
                            }
                        }).catch((err) => {
                            console.log(err);
                        });
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitted(false);
        const form = e.target;
        // console.log(form.elements[0].value);
        callAPI(form.elements[0].value)
    }

    return (
        <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-2xl md:max-w-4xl lg:pt-32 md:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-slate-300 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 dark:text-slate-600 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative"></span>
                    </span>
                    Check Domain Availability
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Check the availability of your domain name and get the best
                    domain name for your business.
                </p>
            </div>
            <form onSubmit={handleFormSubmit} className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
                    ref={inputRef}
                    placeholder="Enter Domain Name"
                    required=""
                    name="domain"
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    Check Availability
                </button>
            </form>
            {
                !submitted &&
                <p className="text-center font-bold text-slate-600 mt-32 text-4xl">Enter a Domain to Check its availability</p>
            }
            {
                (isAvailable && submitted) && (
                    <div className="flex items-center flex-col space-y-8">
                        <IconCheckbox size={70} color="#22ff46" />
                        <p className="text-6xl font-bold text-yellow-300">{inputRef.current && inputRef.current.value}</p>
                        <p className="text-3xl font-bold text-slate-300">Domain is Available</p>
                    </div>
                )
            }
            {
                (!isAvailable && submitted) && (
                    <div className="flex items-center flex-col space-y-8">
                        <IconX size={70} color="#ff2246" />
                        <p className="text-6xl font-bold text-yellow-300">{inputRef.current && inputRef.current.value}</p>
                        <p className="text-3xl font-bold text-slate-300">Domain is Not Available</p>
                    </div>
                )
            }


        </div>
    );
};

export default CheckDomain;