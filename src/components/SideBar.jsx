import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { setSideBar } from "../slices/sidebarSlice";

const SideBar = () => {
  const [profile, setProfile] = useState(true);
  const [post, setPost] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [todo, setTodo] = useState(false);

  const dispatch = useDispatch();
  const handleState = (e) => {
    let val = e.target.innerText;
    if (val === "Profile") {
      setProfile(true);
      setPost(false);
      setGallery(false);
      setTodo(false);
    } else if (val === "Post") {
      setProfile(false);
      setPost(true);
      setGallery(false);
      setTodo(false);
    } else if (val === "Gallery") {
      setProfile(false);
      setPost(false);
      setGallery(true);
      setTodo(false);
    } else {
      setProfile(false);
      setPost(false);
      setGallery(false);
      setTodo(true);
    }

    dispatch(setSideBar(e.target.innerText));
  };
  return (
    <>
      <ul className="w-48 h-[480px] flex flex-col gap-4 justify-center bg-blue-600 rounded-2xl">
        <li
          onClick={(e) => {
            handleState(e);
          }}
          className="w-full flex items-center justify-between pl-4"
        >
          <div className="text-slate-50 font-semibold">Profile</div>
          {profile ? (
            <div className="w-6 h-6 flex bg-slate-50 items-center justify-center rounded-l-lg ">
              <FiChevronRight className="text-slate-500" />
            </div>
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={(e) => {
            handleState(e);
          }}
          className="w-full flex items-center justify-between pl-4"
        >
          <div className="text-slate-50 font-semibold">Post</div>
          {post ? (
            <div className="w-6 h-6 flex bg-slate-50 items-center justify-center rounded-l-lg ">
              <FiChevronRight className="text-slate-500" />
            </div>
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={(e) => {
            handleState(e);
          }}
          className="w-full flex items-center justify-between pl-4"
        >
          <div className="text-slate-50 font-semibold">Gallery</div>
          {gallery ? (
            <div className="w-6 h-6 flex bg-slate-50 items-center justify-center rounded-l-lg ">
              <FiChevronRight className="text-slate-500" />
            </div>
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={(e) => {
            handleState(e);
          }}
          className="w-full flex items-center justify-between pl-4"
        >
          <div className="text-slate-50 font-semibold">Todo</div>
          {todo ? (
            <div className="w-6 h-6 flex bg-slate-50 items-center justify-center rounded-l-lg ">
              <FiChevronRight className="text-slate-500" />
            </div>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </>
  );
};

export default SideBar;
