import { createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";
import UserList from "./components/UserList";
import { useEffect, useState } from "react";
import fetchUser from "./utlis/fetchUser";
import { useDispatch } from "react-redux";
import { setChatData, setData } from "./slices/profileSlice";

const App = () => {
  const [users, setUser] = useState([]);
  // const { dispatch } = useUserContext();
  const dispatch = useDispatch();
  const getUser = async () => {
    const data = await fetchUser();
    setUser(data);
    dispatch(setData(data));
    dispatch(setChatData(data));
    // dispatch({ type: "SET_DATA", payload: data });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="font-display w-screen flex items-center justify-center h-screen">
      <UserList users={users} />
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
