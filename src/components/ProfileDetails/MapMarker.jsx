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
  const userData = useSelector((state) => state.profile.filteredUserList);
  //converting values to number to pass lat,lng values in Google Map
  const lat = +userData[0]?.address?.geo?.lat;
  const lng = +userData[0]?.address?.geo?.lng;
  const center = {
    lat: lat,
    lng: lng,
  };

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
