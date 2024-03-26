import React from "react";
import User from "./User";
import useGetUsers from "../hooks/useGetUsers";

const Users = () => {
  const { loading, users } = useGetUsers();
  return (
    <div className="overflow-y-auto h-full">
      {loading ? (
        <div className="w-full flex justify-center min-h-full items-center">
          <span className=" loading loading-spinner loading-lg mx-auto"></span>
        </div>
      ) : (
        users.map((user, i) => {
          return <User key={user._id} user={user} />;
        })
      )}
    </div>
  );
};

export default Users;
