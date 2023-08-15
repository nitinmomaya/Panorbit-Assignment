import { createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";
import UserList from "./components/UserList";
import { useEffect, useState } from "react";
import fetchUser from "./utlis/fetchUser";
import { useDispatch } from "react-redux";
import { setChatData, setData } from "./slices/profileSlice";

const App = () => {
  const [users, setUser] = useState([]);

  const dispatch = useDispatch();
  const getUser = async () => {
    const data = await fetchUser();
    setUser(data);
    dispatch(setData(data));
    dispatch(setChatData(data));
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="font-display w-screen flex flex-col items-center justify-center  h-screen ">
      <div className="w-full bg-img h-[100%] bg-cover relative"></div>
      <UserList className="absolute" users={users} />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },

  {
    path: "/profile/:id",
    element: <Profile />,
    errorElement: <Error />,
  },
]);

export default App;
