'use client';
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import StarRatings from 'react-star-ratings';
import ReactTimeAgo from 'react-time-ago';

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
      <div key={review._id} withBorder p={20} radius="md" mt={20}>
        <div justify="space-between" align={'start'}>

          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${review.user.avatar}`}
              alt={review.user.name}
              radius="xl"
            />
            <div>
              <p fz="sm">{review.user.name}</p>
              <p fz="xs" c="dimmed">
                <ReactTimeAgo date={new Date()} locale="en-US" />
              </p>
            </div>
          </div>
          <div direction="horizontal" justify='flex-end'>
            <StarRatings rating={rating}
              starRatedColor="blue" numberOfStars={5} />
            {/* {
              currentUser && currentUser._id === review.user._id && (
                <ActionIcon color="red" title={'delete'} size={'sm'} variant="filled" onClick={
                  () => deleteReview(review._id)
                }>
                  <IconTrashFilled size={'xs'} />
                </ActionIcon>
              )
            } */}
          </div>
        </div>
        <p mt={10}>{review.review}</p>
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
        product: id,
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
        <div withBorder radius="md" p={20}>

          <StarRatings rating={rating}
            starRatedColor="blue"
            changeRating={setRating}
            numberOfStars={5} />

          <textarea
            ref={reviewRef}
            mt={10}
            placeholder="Write your review here"
            radius="md"
            w={'100%'}
            className={classes.textarea}
          />
          <button variant="outline" color="blue" radius="md" mt={20} onClick={submitReview}>
            Submit
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
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                  We tackle the challenges start-ups face
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">
                  Besides working with start-up enterprises as a partner for
                  digitalization, we have built enterprise products for common pain
                  points that we have encountered in various products and projects.
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul className="space-y-2 sm:space-y-4">
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
                    <span className="font-bold">Easy &amp; fast</span> designing
                  </span>
                </li>
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
                    Powerful <span className="font-bold">features</span>
                  </span>
                </li>
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
                    User Experience Design
                  </span>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    )
  }

  return (
    <div>
      {showPlanDetails()}
      {displayReviews()}
      {ratingForm()}
    </div>
  )
}

export default PlanDetails