import ProfileItem from "./ProfileItem";

const ProfileList = ({ userList }) => {
  return (
    <>
      <div className="flex flex-col h-40 overflow-x-hidden my-2 bg-white">
        {userList.map((user) => (
          <ProfileItem
            id={user?.id}
            name={user?.name}
            profilepicture={user.profilepicture}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileList;
