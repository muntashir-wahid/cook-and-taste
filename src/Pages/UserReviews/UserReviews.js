import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useChangeTitle from "../../hooks/useChangeTitle";
import UserReview from "./UserReview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/UI/Loader/Loader";

const UserReviews = () => {
  useChangeTitle("My Reviews");

  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);
  const [isReviewLoading, setIsReviewLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://cook-and-taste-server.vercel.app/api/v1/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setUserReviews(data.userReviews);
        setIsReviewLoading(false);
      });
  }, [user?.email]);

  const deletedReviewHandler = (reviewId) => {
    setUserReviews((preReviews) => {
      toast.success("Review deleted successfully!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const updatedReviews = preReviews.filter(
        (review) => review._id !== reviewId
      );
      return updatedReviews;
    });
  };

  console.log(userReviews);

  return (
    <Fragment>
      {isReviewLoading ? (
        <Loader className="min-h-screen" />
      ) : (
        <div
          className={`min-h-screen my-8 px-6 md:px-12 lg:px-16 ${
            !userReviews.length ? "hidden" : undefined
          }`}
        >
          <h2 className="text-4xl font-semibold text-center mb-12">
            All reviews ({userReviews.length})
          </h2>
          <div className="flex flex-wrap justify-evenly gap-6">
            {userReviews.map((userReview) => (
              <UserReview
                onDeleteReview={deletedReviewHandler}
                key={userReview._id}
                reviewData={userReview}
              />
            ))}
          </div>
        </div>
      )}
      {userReviews.length === 0 && !isReviewLoading && (
        <div className="flex flex-col min-h-screen items-center justify-center px-8 text-center">
          <h3 className="text-5xl font-semibold">You have no Review</h3>
          <p className="text-lg">
            Please visit
            <Link className="btn btn-link px-1" to="/recipes">
              All repices
            </Link>
          </p>
        </div>
      )}

      <ToastContainer />
    </Fragment>
  );
};

export default UserReviews;
