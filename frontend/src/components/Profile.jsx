import React from "react";

const Profile = () => {
  return (
    <div className="max-w-7xl min-h-72 p-3 bg-gray-100 justify-center flex flex-col gap-5 items-center m-auto">
        <div className="font-bold text-4xl">Profile</div>

      <div className="w-fit">
        <div className="grid grid-cols-2 text-lg font-semibold">
          <p className="">First Name: </p>
          <input type="text" className="font-normal" value={"Srinivas"} />
        </div>
        <div className="grid grid-cols-2 text-lg font-semibold">
          <p className="">Last Name: </p>
          <input type="text" className="font-normal" value={"Mekala"} />
        </div>
        <div className="grid grid-cols-2 text-lg font-semibold">
          <p className="">Email: </p>
          <input
            type="text"
            className="font-normal"
            value={"srinivas@gmail.com"}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
