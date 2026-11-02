"use client";
import { useAuth } from "@/hooks/useAuth";
import useScreenWidth from "@/hooks/useScreenWidth";
import React, { useEffect, useState } from "react";

const Header = ({ toggleSidebar, hideSidebar }) => {
  const { logout } = useAuth();
  const [screen_size, setScreenSize] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const screenWidth = useScreenWidth();

  useEffect(() => {
    setScreenSize(screenWidth);
  }, [screenWidth]);
  return (
    <>
      <header
        className="app-header"
        style={{
          paddingLeft: screen_size > 992 ? (hideSidebar ? "5rem" : "15rem") : 0,
        }}
      >
        <nav className="main-header !h-[3.75rem]" aria-label="Global">
          <div className="main-header-container ps-[0.725rem] pe-[1rem] ">
            <div className="header-content-left">
              {/* <div className="header-element">
                <div className="horizontal-logo">
                  <a href="index.html" className="header-logo">
                    PrintLab
                  </a>
                </div>
              </div> */}

              <div className="header-element md:px-[0.325rem] !items-center">
                <a
                  aria-label="Hide Sidebar"
                  className="inline-flex items-center sidemenu-toggle animated-arrow hor-toggle horizontal-navtoggle"
                  onClick={toggleSidebar}
                >
                  <span></span>
                </a>
              </div>
            </div>

            <div className="header-content-right">
              <div className="header-element py-[1rem] md:px-[0.65rem] px-2 header-search">
                <button
                  aria-label="button"
                  type="button"
                  data-hs-overlay="#search-modal"
                  className="inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                >
                  <i className="bx bx-search-alt-2 header-link-icon"></i>
                </button>
              </div>

              {/*   <!--Header Notifictaion --> */}
              <div className="header-element py-[1rem] md:px-[0.65rem] px-2 notifications-dropdown header-notification hs-dropdown ti-dropdown !hidden md:!block [--placement:bottom-left]">
                <button
                  id="dropdown-notification"
                  type="button"
                  className="hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs"
                >
                  <i className="bx bx-bell header-link-icon  text-[1.125rem]"></i>
                  <span className="flex absolute h-5 w-5 -top-[0.25rem] end-0  -me-[0.6rem]">
                    <span className="animate-slow-ping absolute inline-flex -top-[2px] -start-[2px] h-full w-full rounded-full bg-secondary/40 opacity-75"></span>
                    <span
                      className="relative inline-flex justify-center items-center rounded-full  h-[14.7px] w-[14px] bg-secondary text-[0.625rem] text-white"
                      id="notification-icon-badge"
                    >
                      5
                    </span>
                  </span>
                </button>
                <div
                  className="main-header-dropdown !-mt-3 !p-0 hs-dropdown-menu ti-dropdown-menu bg-white !w-[22rem] border-0 border-defaultborder hidden !m-0"
                  aria-labelledby="dropdown-notification"
                >
                  {/*   <div className="ti-dropdown-header !m-0 !p-4 !bg-transparent flex justify-between items-center">
                    <p className="mb-0 text-[1.0625rem] text-defaulttextcolor font-semibold dark:text-[#8c9097] dark:text-white/50">
                      Notifications
                    </p>
                    <span
                      className="text-[0.75em] py-[0.25rem/2] px-[0.45rem] font-[600] rounded-sm bg-secondary/10 text-secondary"
                      id="notifiation-data"
                    >
                      5 Unread
                    </span>
                  </div>
                  <div className="dropdown-divider"></div> */}
                  {/*    <ul
                    className="list-none !m-0 !p-0 end-0"
                    id="header-notification-scroll"
                  >
                    <li className="ti-dropdown-item dropdown-item ">
                      <div className="flex items-start">
                        <div className="pe-2">
                          <span className="inline-flex text-primary justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem] !bg-primary/10 !rounded-[50%]">
                            <i className="ti ti-gift text-[1.125rem]"></i>
                          </span>
                        </div>
                        <div className="flex items-center justify-between grow">
                          <div>
                            <p className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[0.8125rem] font-semibold">
                              <a href="notifications.html">
                                Your Order Has Been Shipped
                              </a>
                            </p>
                            <span className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">
                              Order No: 123456 Has Shipped To Your Delivery
                              Address
                            </span>
                          </div>
                          <div>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"
                            >
                              <i className="ti ti-x text-[1rem]"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ti-dropdown-item dropdown-item !flex-none">
                      <div className="flex items-start">
                        <div className="pe-2">
                          <span className="inline-flex text-secondary justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem]  bg-secondary/10 rounded-[50%]">
                            <i className="ti ti-discount-2 text-[1.125rem]"></i>
                          </span>
                        </div>
                        <div className="flex items-center justify-between grow">
                          <div>
                            <p className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[0.8125rem]  font-semibold">
                              <a href="notifications.html">
                                Discount Available
                              </a>
                            </p>
                            <span className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">
                              Discount Available On Selected Products
                            </span>
                          </div>
                          <div>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="min-w-fit  text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"
                            >
                              <i className="ti ti-x text-[1rem]"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ti-dropdown-item dropdown-item">
                      <div className="flex items-start">
                        <div className="pe-2">
                          <span className="inline-flex text-pink justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem]  bg-pink/10 rounded-[50%]">
                            <i className="ti ti-user-check text-[1.125rem]"></i>
                          </span>
                        </div>
                        <div className="flex items-center justify-between grow">
                          <div>
                            <p className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[0.8125rem]  font-semibold">
                              <a href="notifications.html">
                                Account Has Been Verified
                              </a>
                            </p>
                            <span className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">
                              Your Account Has Been Verified Sucessfully
                            </span>
                          </div>
                          <div>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"
                            >
                              <i className="ti ti-x text-[1rem]"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ti-dropdown-item dropdown-item">
                      <div className="flex items-start">
                        <div className="pe-2">
                          <span className="inline-flex text-warning justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem]  bg-warning/10 rounded-[50%]">
                            <i className="ti ti-circle-check text-[1.125rem]"></i>
                          </span>
                        </div>
                        <div className="flex items-center justify-between grow">
                          <div>
                            <p className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50  text-[0.8125rem]  font-semibold">
                              <a href="notifications.html">
                                Order Placed{" "}
                                <span className="text-warning">
                                  ID: #1116773
                                </span>
                              </a>
                            </p>
                            <span className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">
                              Order Placed Successfully
                            </span>
                          </div>
                          <div>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"
                            >
                              <i className="ti ti-x text-[1rem]"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="ti-dropdown-item dropdown-item">
                      <div className="flex items-start">
                        <div className="pe-2">
                          <span className="inline-flex text-success justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem]  bg-success/10 rounded-[50%]">
                            <i className="ti ti-clock text-[1.125rem]"></i>
                          </span>
                        </div>
                        <div className="flex items-center justify-between grow">
                          <div>
                            <p className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50  text-[0.8125rem]  font-semibold">
                              <a href="notifications.html">
                                Order Delayed{" "}
                                <span className="text-success">
                                  ID: 7731116
                                </span>
                              </a>
                            </p>
                            <span className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">
                              Order Delayed Unfortunately
                            </span>
                          </div>
                          <div>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"
                            >
                              <i className="ti ti-x text-[1rem]"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul> */}

                  <div className="p-4 mt-2 border-t empty-header-item1">
                    <div className="grid">
                      <a
                        href="notifications.html"
                        className="ti-btn ti-btn-primary-full !m-0 w-full p-2"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="p-[3rem] empty-item1 hidden">
                    <div className="text-center">
                      <span className="!h-[4rem]  !w-[4rem] avatar !leading-[4rem] !rounded-full !bg-secondary/10 !text-secondary">
                        <i className="ri-notification-off-line text-[2rem]  "></i>
                      </span>
                      <h6 className="font-semibold mt-3 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[1rem]">
                        No New Notifications
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*       <!--End Header Notifictaion -->




       {/* <!-- Header Profile --> */}
              <div className="header-element md:!px-[0.65rem] px-2 hs-dropdown !items-center ti-dropdown [--placement:bottom-left] open relative">
                <button
                  id="dropdown-profile"
                  type="button"
                  className="hs-dropdown-toggle ti-dropdown-toggle !gap-2 !p-0 flex-shrink-0 sm:me-2 me-0 !rounded-full !shadow-none text-xs align-middle !border-0 !shadow-transparent  bg-gray-300 h-8 w-8"
                  onClick={() => {
                    setSettingsOpen((prev) => !prev);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-[#536485] dark:text-white/50"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                {/*   <div className="hidden md:block dropdown-profile">
                  <p className="font-semibold mb-0 leading-none text-[#536485] text-[0.813rem] ">
                    Json Taylor
                  </p>
                  <span className="opacity-[0.7] font-normal text-[#536485] block text-[0.6875rem] ">
                    Web Designer
                  </span>
                </div> */}
                <div
                  className={`hs-dropdown-menu ti-dropdown-menu !-mt-3 border-0 w-[11rem] !p-0 border-defaultborder  main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end absolute  ${
                    settingsOpen ? "block" : "hidden"
                  }`}
                  style={{
                    top: "70px",
                    right: "20px",
                  }}
                  aria-labelledby="dropdown-profile"
                >
                  <ul className="text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50">
                    {/* <li>
                      <a
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex"
                        href="profile.html"
                      >
                        <i className="ti ti-user-circle text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Profile
                      </a>
                    </li>
 */}
                    <li>
                      <button
                        className="w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex"
                        onClick={logout}
                      >
                        <i className="ti ti-logout text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/*      <!-- End Header Profile -->



        <!-- End::header-element --> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
