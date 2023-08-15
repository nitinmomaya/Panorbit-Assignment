const UserInfo = ({ UserInfo }) => {
  return (
    <>
      <div>
        {/* image and name */}
        <div className="flex flex-col items-center justify-center ">
          <img
            className="w-36 h-36 rounded-full"
            src={UserInfo[0]?.profilepicture}
            alt=""
          />
          <h1 className="font-semibold text-slate-900">{UserInfo[0]?.name}</h1>
        </div>
        {/* User Details */}
        <div className="flex  py-4 mx-8 border-b-[1px] border-gray-300 ">
          <ul className="flex flex-col items-end gap-2 w-[100px] ">
            <li className="text-gray-500 font-medium">Username:</li>
            <li className="text-gray-500 font-medium">e-mail:</li>
            <li className="text-gray-500 font-medium">Phone:</li>
            <li className="text-gray-500 font-medium">Website:</li>
          </ul>
          <ul className="flex  flex-col  gap-2">
            <li className="pl-4 text-slate-600 font-bold">
              {UserInfo[0]?.username}
            </li>
            <li className="pl-4 text-slate-600 font-bold">
              {UserInfo[0]?.email}
            </li>
            <li className="pl-4 text-slate-600 font-bold">
              {UserInfo[0]?.phone}
            </li>
            <li className="pl-4 text-slate-600 font-bold">
              {UserInfo[0]?.website}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
