import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSideBar } from "../../slices/sidebarSlice";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const [sidebarState, setSideBarState] = useState({
    profile: true,
    post: false,
    gallery: false,
    todo: false,
  });

  const dispatch = useDispatch();
  const handleState = (e) => {
    let val = e.target.innerText;
    console.log("valside", val);
    if (val === "Profile") {
      setSideBarState({
        profile: true,
        gallery: false,
        post: false,
        todo: false,
      });
    } else if (val === "Post") {
      setSideBarState({
        profile: false,
        post: true,
        gallery: false,
        todo: false,
      });
    } else if (val === "Gallery") {
      setSideBarState({
        profile: false,
        post: false,
        gallery: true,
        todo: false,
      });
    } else {
      setSideBarState({
        profile: false,
        post: false,
        gallery: false,
        todo: true,
      });
    }

    dispatch(setSideBar(e.target.innerText));
  };
  return (
    <>
      <ul className="w-60 h-full pl-6 py-20 flex flex-col gap-1 justify-center bg-custom-gradient rounded-2xl">
        <li
          onClick={(e) => {
            handleState(e);
          }}
          className="w-full flex items-center justify-between pl-4"
        >
          <SideBarItem ItemName={"Profile"} state={sidebarState.profile} />
        </li>
        <li
          onClick={(e) => {
            handleState(e);
          }}
          className="w-full flex items-center justify-between pl-4"
        >
          <SideBarItem ItemName={"Post"} state={sidebarState.post} />
        </li>
        <li
          onClick={(e) => {
            handleState(e);
          }}
          className="w-full flex items-center justify-between pl-4"
        >
          <SideBarItem ItemName={"Gallery"} state={sidebarState.gallery} />
        </li>
        <li
          onClick={(e) => {
            handleState(e);
          }}
          className="w-full flex items-center justify-between pl-4"
        >
          <SideBarItem ItemName={"Todo"} state={sidebarState.todo} />
        </li>
      </ul>
    </>
  );
};

export default SideBar;
