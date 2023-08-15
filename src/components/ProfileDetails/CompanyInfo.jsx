const CompanyInfo = ({ ComapanyInfo }) => {
  console.log("com", CompanyInfo);
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-2 pt-4">
        <h1 className="text-gray-500 font-medium ">Company</h1>
        <div className="flex w-full">
          <ul className="flex flex-col items-end gap-2 w-[100px]">
            <li className="text-gray-500 font-medium">Name:</li>
            <li className="text-gray-500 font-medium">catchphrase:</li>
            <li className="text-gray-500 font-medium">bs:</li>
          </ul>
          <ul className="flex w-full flex-col  gap-2">
            <li className="pl-4 text-slate-600 font-bold">
              {ComapanyInfo[0]?.company?.name}
            </li>
            <li className="pl-4 text-slate-600 font-bold">
              {ComapanyInfo[0]?.company?.catchPhrase}
            </li>
            <li className="pl-4 text-slate-600 font-bold">
              {ComapanyInfo[0]?.company?.bs}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
