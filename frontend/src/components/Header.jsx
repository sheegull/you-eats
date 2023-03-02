import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
// import avatar from "../assets/avatar.png";
import avatar from "../assets/shee-logo.png";

import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if ((e.key === "Enter" || e === "searchButton") && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="flex flex-row sticky top-0 z-10 items-center justify-between h-14 px-4 md:px-5 bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          {/* add logo-images !!!!! */}
          <img src="" alt="logo" className="h-full hidden" />
          <img src="" alt="mobile-logo" className="h-ful md:hidden" />
        </Link>
      </div>
      <div className="flex group items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-items-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="text-white bg-transparent outline-none pr-5 pl-5 md:pl-0 w-44"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Food..."
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="flex w-[40px] md:w-[60px] h-8 md:h-10 items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          onClick={() => {
            searchQueryHandler("searchButton");
          }}
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
