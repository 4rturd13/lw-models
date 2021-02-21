import React from "react";

export const Header = () => {
  return (
    <div className="flex my-6 sm:justify-start">
      <div className="flex flex-col sm:flex-row">
        <figure>
          <img
            className="rounded-full w-20 mx-4 sm:w-32"
            src="https://picsum.photos/200/200"
            alt="profile-photo"
          />
        </figure>
        <div className="flex flex-col mt-5 mx-4 sm:w-5/12">
          <h4 className="text-xl font-semibold text-gray-900">Model Name</h4>
          <p>
            It is a long established fact that atablished fact that atablished
            that
          </p>
        </div>
      </div>
      <div className="flex absolute top-10 right-0 sm: right-4">
        <div className="flex flex-col mx-2">
          <span className="text-gray-900 font-bold text-lg text-center">
            300
          </span>
          <span className="text-gray-900 font-medium text-base text-center">
            Posts
          </span>
        </div>
        <div className="flex flex-col mx-2">
          <span className="text-gray-900 font-bold text-lg text-center">
            150K
          </span>
          <span className="text-gray-900 font-medium text-base text-center">
            Followers
          </span>
        </div>
        <div className="flex flex-col mx-2">
          <span className="text-gray-900 font-bold text-lg text-center">0</span>
          <span className="text-gray-900 font-medium text-base text-center">
            Following
          </span>
        </div>
      </div>
    </div>
  );
};
