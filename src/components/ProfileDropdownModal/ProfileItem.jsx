import { Link } from "react-router-dom";

const ProfileItem = ({ id, name, profilepicture }) => {
  return (
    <>
      <Link
        key={id}
        to={`/profile/${id}`}
        className="flex gap-2 items-center p-2 border-b border-slate-300"
      >
        <img
          src={profilepicture}
          className="w-8 rounded-full h-8"
          alt={`name's profile picture`}
        />
        {name}
      </Link>
    </>
  );
};
export default ProfileItem;
