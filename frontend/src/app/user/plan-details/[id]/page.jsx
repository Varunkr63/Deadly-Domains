'use client';
import { useParams } from 'next/navigation'
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useRef, useState } from 'react'
import StarRatings from 'react-star-ratings';
import ReactTimeAgo from 'react-time-ago';

const PLAN_FEATURES = [
  'freeCDN',
  'backup',
  'cloudhosting',
  'managedhosting',
  'customersupport',
  'ddosProtection',
  'malwareScanner',
  'unlimitedfreeSSL',
  'GITaccess',
  'uptimegurantee'
];

const PlanDetails = () => {

  const { id } = useParams();
  const [planDetails, setPlanDetails] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  const [rating, setRating] = useState(3);
  const reviewRef = useRef();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const fetchPlanDetails = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan/getbyid/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setPlanDetails(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchPlanDetails();
    fetchReviews();
  }, [])

  const fetchReviews = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/getbyplan/${id}`);
    // console.log(response.status);
    const data = await response.json();
    console.log(data);
    setReviewList(data);
  }

  const calculateAverageRating = () => {
    let total = 0;
    reviewList.forEach(review => {
      total += review.rating;
    });
    return total / reviewList.length;

  }

  const displayReviews = () => {
    return reviewList.map((review) => (
      <div className="h-auto mb-10">
        <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
          <div className="flex-auto p-4 md:p-6">
            <StarRatings starDimension="20px"
              starSpacing="3px" rating={review.rating}
              starRatedColor="#ffc300" numberOfStars={5} />
            <p className="mt-3 text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
              "{review.review}"
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${review.user.avatar}`}
                  alt={review.user.name}
                />
              </div>
              <div className="grow ms-3">
                <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                  <p fz="sm">{review.user.name}</p>
                </p>
                <p className="text-xs text-gray-500 dark:text-neutral-400">
                  <ReactTimeAgo date={new Date()} locale="en-US" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  const submitReview = async () => {
    if (!currentUser) {
      enqueueSnackbar('Please login to leave a review', { variant: 'error' });
      return;
    }
    const review = reviewRef.current.value;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': currentUser.token
      },
      body: JSON.stringify({
        user: currentUser._id,
        plan: id,
        review,
        rating
      })
    });
    if (response.status === 200) {
      fetchReviews();
      enqueueSnackbar('Review submitted successfully', { variant: 'success' });
    }
  }

  const ratingForm = () => {
    if (currentUser) {
      return (
        <div className='mt-20'>

          <StarRatings
            starDimension="40px"
            starSpacing="10px"
            rating={rating}
            starRatedColor="#ffc300"
            changeRating={setRating}
            starHoverColor="#ffc300"
            numberOfStars={5} />
          <div className="max-w-xl space-y-3">
            <textarea
              className="mt-5 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              rows={3}
              ref={reviewRef}
              placeholder="Leave your review here..."
            />
          </div>

          <button onClick={submitReview} type="button" className="mt-3 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Submit Review
          </button>
        </div>
      )
    } else {
      return <p>Please login to leave a review</p>
    }
  }

  const showPlanDetails = () => {
    if (planDetails === null) {
      return <div>Loading...</div>
    }
    return (

      <div className="mb-20 md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img
            className="rounded-xl"
            src={`https://www.acewebstudio.com/wp-content/uploads/2019/05/hosting-plan.jpg`}
            alt="Image Description"
          />
        </div>
        {/* End Col */}
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                {planDetails.title}
              </h2>
              <p className="text-gray-500 dark:text-neutral-500">
                {planDetails.description}
              </p>
            </div>
            {/* End Title */}
            {/* List */}
            <ul className="space-y-2 sm:space-y-4">
              {
                PLAN_FEATURES.map((feature) => (
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                    </span>
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      <span className="font-bold">{feature}</span> {planDetails[feature]}
                    </span>
                  </li>
                ))
              }
            </ul>
            {/* End List */}
          </div>
        </div>
        {/* End Col */}
      </div>
    )
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {showPlanDetails()}
      {displayReviews()}
      {ratingForm()}
    </div>
  )
}

export default PlanDetails