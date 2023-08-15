import { Link } from "react-router-dom";

const ProfileList = ({ userList }) => {
  return (
    <>
      <div className="flex flex-col h-60 overflow-x-hidden my-2 ">
        {userList.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            className="flex gap-2 items-center p-3 border-b border-slate-100"
          >
            <img
              src={user.profilepicture}
              className="w-8 rounded-full h-8"
              alt={`${user.name}'s profile picture`}
            />
            {user.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProfileList;