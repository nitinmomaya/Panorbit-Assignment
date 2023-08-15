import AddressInfo from "./ProfileDetails/AddressInfo";
import CompanyInfo from "./ProfileDetails/CompanyInfo";
import UserInfo from "./ProfileDetails/UserInfo";
const UserDetails = ({ filteredData }) => {
  return (
    <>
      <div className="flex w-full ">
        <div className="border-r-[1px] border-gray-300 w-full">
          <UserInfo filteredData={filteredData} />
          <CompanyInfo filteredData={filteredData} />
        </div>

        <div className="w-full flex flex-col  p-10 ">
          <AddressInfo filteredData={filteredData} />
        </div>
      </div>
    </>
  );
};

export default UserDetails;
