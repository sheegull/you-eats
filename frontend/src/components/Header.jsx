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
    <div className="flex bg-black">
      {loading && <Loader />}
      <div className="flex">
        {pageName !== "video" && (
          <div className="flex" onClick={mobileMenuToggle}>
            {mobileMenu ? <CgClose className="text-white" /> : <SlMenu className="text-white" />}
          </div>
        )}
        <Link to="/" className="flex">
          {/* add logo-images !!!!! */}
          <img src="" alt="logo" className="h-full" />
          <img src="" alt="mobile-logo" className="h-full" />
        </Link>
      </div>
      <div className="flex">
        <div className="flex">
          <div className="w-10">
            <IoIosSearch className="text-white" />
          </div>
          <input
            type="text"
            className="text-white"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Food"
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="flex"
          onClick={() => {
            searchQueryHandler("searchButton");
          }}
        >
          <IoIosSearch className="text-white" />
        </button>
      </div>
      <div className="flex">
        <div className="md:flex">
          <div className="flex">
            <RiVideoAddLine className="text-white" />
          </div>
          <div className="flex">
            <FiBell className="text-white" />
          </div>
        </div>
        <div className="flex">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
