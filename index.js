import ReactDOM from "react-dom/client";
import { appRouter } from "./src/App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
