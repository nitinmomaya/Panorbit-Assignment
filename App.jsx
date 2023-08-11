import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./src/pages/Profile";
import UserList from "./src/components/UserList";

const App = () => {
  return (
    <div className="font-display-500">
      <UserList />
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
    path: "/profile",
    element: <Profile />,
    errorElement: <Error />,
  },
]);

export default App;
