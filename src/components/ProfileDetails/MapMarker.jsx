import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const MapMarker = () => {
  let keys = process.env.API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: keys,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = () => {
  const filteredData = useSelector((state) => state.profile.filteredData);
  const lat = +filteredData[0]?.address?.geo?.lat;
  const lng = +filteredData[0]?.address?.geo?.lng;
  const center = {
    lat: lat,
    lng: lng,
  };
  console.log("center", center);
  return (
    <GoogleMap
      zoom={2}
      center={center}
      mapContainerClassName="w-full h-full rounded-xl "
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapMarker;
