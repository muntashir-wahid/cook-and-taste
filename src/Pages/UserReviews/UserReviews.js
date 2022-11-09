import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useChangeTitle from "../../hooks/useChangeTitle";
import UserReview from "./UserReview";

const UserReviews = () => {
  useChangeTitle("My Reviews");

  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then(({ data, result }) => {
        setTotalReviews(result);
        setUserReviews(data.userReviews);
      });
  }, [user?.email]);

  return (
    <Fragment>
      {!totalReviews && (
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
      <div className="min-h-screen my-8 px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-semibold text-center mb-12">
          All reviews ({totalReviews})
        </h2>
        <div className="flex flex-wrap justify-evenly gap-6">
          {userReviews.map((userReview) => (
            <UserReview key={userReview._id} reviewData={userReview} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default UserReviews;
