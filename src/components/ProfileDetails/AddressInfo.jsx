import MapMarker from "./MapMarker";
const AddressInfo = ({ AddressInfo }) => {
  return (
    <>
      <div className="w-full flex flex-col ">
        <h1>Address</h1>
        <div className="flex gap-2">
          <ul className="w-[100px] flex items-end flex-col gap-2">
            <li className="text-gray-500 font-medium">Street:</li>
            <li className="text-gray-500 font-medium">Suite:</li>
            <li className="text-gray-500 font-medium">City:</li>
            <li className="text-gray-500 font-medium">ZipCode:</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="pl-4 text-slate-600 font-bold">
              {AddressInfo[0]?.address?.street}
            </li>
            <li className="pl-4 text-slate-600 font-bold">
              {AddressInfo[0]?.address?.suite}
            </li>
            <li className="pl-4 text-slate-600 font-bold">
              {AddressInfo[0]?.address?.city}
            </li>
            <li className="pl-4 text-slate-600 font-bold">
              {AddressInfo[0]?.address?.zipcode}
            </li>
          </ul>
        </div>
        <div className="w-full h-[300px] rounded-xl my-4">
          <MapMarker />
        </div>
        <div className="flex justify-end gap-">
          <div className="flex gap-2">
            <h1 className="text-gray-400 text-sm">Lat:</h1>
            <h1 className="text-slate-900 font-semibold text-sm">
              {AddressInfo[0]?.address?.geo?.lat}
            </h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-gray-400 text-sm">Long:</h1>
            <h1 className="text-slate-900 font-semibold text-sm">
              {AddressInfo[0]?.address?.geo?.lng}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressInfo;
