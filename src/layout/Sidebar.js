"use client";
import useScreenWidth from "@/hooks/useScreenWidth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { LuListOrdered } from "react-icons/lu";
import { MdPermMedia } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";

import { TbListDetails } from "react-icons/tb";
import { PiFlagBannerFoldFill } from "react-icons/pi";

import { IoIosArrowDown } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { RiRefundFill } from "react-icons/ri";

const links = [
  {
    href: "/",
    label: "Home",
    Icon: () => <FaHome className="w-6 h-6" />,
  },
  {
    href: "/products",
    label: "Products",
    Icon: () => <AiFillProduct className="w-6 h-6" />,
  },
  {
    href: "/categories",
    label: "Category",
    Icon: () => <BiCategory className="w-6 h-6" />,
  },
  {
    href: "/media",
    label: "Media",
    Icon: () => <MdPermMedia className="w-6 h-6" />,
  },

  {
    href: "/orders",
    label: "Orders",
    Icon: () => <LuListOrdered className="w-6 h-6" />,
  },
  {
    href: "/order-items",
    label: "Order Items",
    Icon: () => <LuListOrdered className="w-6 h-6" />,
  },

  {
    href: "/carts",
    label: "Carts",
    Icon: () => <FaCartArrowDown className="w-6 h-6" />,
  },

  /*  {
    href: "/banner",
    label: "Add Banner",
    Icon: () => <PiFlagBannerFoldFill className="w-6 h-6" />,
  }, */
  {
    href: "/customers",
    label: "Customers",
    Icon: () => <FaUsersCog className="w-6 h-6" />,
  },

  {
    href: "/refunds",
    label: "Refunds",
    Icon: () => <RiRefundFill className="w-6 h-6" />,
  },
  {
    label: "Settings",
    Icon: () => <IoSettings className="w-6 h-6" />,
    children: [
      {
        href: "/banner",
        label: "Banner",
        Icon: () => <PiFlagBannerFoldFill className="w-6 h-6" />,
      },

      {
        href: "/top-listing",
        label: "Top Listing",
        Icon: () => <IoMdAddCircle className="w-6 h-6" />,
      },
      {
        href: "/file-check",
        label: "File Check",
        Icon: () => <FaFileCircleCheck className="w-6 h-6" />,
      },
    ],
  },
];

const ChildrenLink = ({ link, hideSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="slide has-sub">
      <div
        className="flex items-center gap-2 cursor-pointer side-menu__item"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>
          <link.Icon />
        </span>
        <span
          className={`${
            hideSidebar ? " opacity-0 invisible" : " opacity-100 visible"
          }`}
        >
          <span className="side-menu__label">{link.label}</span>
        </span>
        <span>
          <IoIosArrowDown
            className={`w-7 h-5 ${
              isOpen ? "transform rotate-180" : "transform rotate-0"
            }`}
          />
        </span>
      </div>
      <ul className={`sub-menu ${isOpen ? "" : "hidden"} ml-4`}>
        {link.children.map((child, idx) => (
          <li key={idx}>
            <Link
              href={child.href}
              className="flex items-center gap-2 side-menu__item"
            >
              <span>
                <child.Icon />
              </span>
              <span
                className={`${
                  hideSidebar ? " opacity-0 invisible" : " opacity-100 visible"
                }`}
              >
                <span className="side-menu__label">{child.label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Sidebar = ({ hideSidebar, toggleSidebar, isOpen, setIsOpen }) => {
  const [screen_size, setScreenSize] = useState(0);

  const screenWidth = useScreenWidth();

  useEffect(() => {
    setScreenSize(screenWidth);
  }, [screenWidth]);

  return (
    <div>
      <div
        className={`w-screen h-screen app-sidebar lg:hidden ${
          screen_size <= 992 && isOpen ? "block" : "hidden"
        }`}
        onClick={() => {
          setIsOpen(false);
        }}
        style={{
          opacity: 0.2,
        }}
      ></div>
      <aside
        className={`${
          screen_size <= 992 && isOpen ? "block" : "hidden"
        } app-sidebar lg:block   ${hideSidebar ? "w-[5rem]" : "w-[15rem]"} `}
        id="sidebar"
      >
        {/*  <!-- Start::main-sidebar-header --> */}
        <div
          className="main-sidebar-header "
          style={{
            width: hideSidebar ? "5rem" : "15rem",
          }}
        >
          <Link
            href="/"
            className={`header-logo ${
              hideSidebar ? " opacity-0 invisible" : " opacity-100 visible"
            }"`}
          >
            {!hideSidebar && (
              <img
                src="../assets/images/brand-logos/printlab-logo.jpg"
                alt="logo"
                className="desktop-dark"
              />
            )}
          </Link>
        </div>
        {/*  <!-- End::main-sidebar-header -->

    <!-- Start::main-sidebar --> */}
        <div className="main-sidebar " id="sidebar-scroll">
          {/*  <!-- Start::nav --> */}
          <nav className="main-menu-container nav nav-pills flex-column sub-open">
            <div className="slide-left" id="slide-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </svg>
            </div>
            <ul className="main-menu">
              {links.map((link, idx) => {
                if (link.children) {
                  return (
                    <ChildrenLink
                      link={link}
                      key={idx}
                      hideSidebar={hideSidebar}
                    />
                  );
                }

                return (
                  <li className="slide has-sub" key={idx}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 side-menu__item"
                    >
                      <span>
                        <link.Icon />
                      </span>
                      <span
                        className={`${
                          hideSidebar
                            ? " opacity-0 invisible"
                            : " opacity-100 visible"
                        }`}
                      >
                        <span className="side-menu__label">{link.label}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/*       <!-- End::nav --> */}
        </div>
        {/*   <!-- End::main-sidebar --> */}
      </aside>
    </div>
  );
};

export default Sidebar;
