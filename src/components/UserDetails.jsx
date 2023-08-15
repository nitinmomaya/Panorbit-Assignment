import AddressInfo from "./ProfileDetails/AddressInfo";
import CompanyInfo from "./ProfileDetails/CompanyInfo";
import UserInfo from "./ProfileDetails/UserInfo";
const UserDetails = ({ filteredUserList }) => {
  return (
    <>
      <div className="flex w-full ">
        <div className="border-r-[1px] border-gray-300 w-full">
          <UserInfo UserInfo={filteredUserList} />
          <CompanyInfo ComapanyInfo={filteredUserList} />
        </div>

        <div className="w-full flex flex-col  p-10 ">
          <AddressInfo AddressInfo={filteredUserList} />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
