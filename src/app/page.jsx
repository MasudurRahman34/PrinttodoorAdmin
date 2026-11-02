"use client";
import MetaData from "@/components/MetaData";
import AdminLayout from "@/layout/AdminLayout";

const Home = () => {
  return (
    <AdminLayout>
      <MetaData title="Home" />
      <div className="grid grid-cols-12 mt-5 gap-x-6">
        {/* left section */}
        <div className="col-span-12 xxl:col-span-9 xl:col-span-9">
          <div className="grid grid-cols-12 gap-x-6 ">
            {/* <div className="col-span-12 xxl:col-span-4 xl:col-span-4">
              <div className="box crm-highlight-card">
                <div className="box-body ">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[1.125rem] text-white mb-2">
                        Your target is incomplete
                      </div>
                      <span className="block text-[0.75rem] text-white">
                        <span className="opacity-[0.7]">
                          You have completed
                        </span>
                        <span className="font-semibold text-warning">48%</span>{" "}
                        <span className="opacity-[0.7]">
                          of the given target, you can also check your status
                        </span>
                      </span>
                      <span className="block font-semibold mt-[0.125rem]">
                        <a
                          className="text-white text-[0.813rem]"
                          href="javascript:void(0);"
                        >
                          <u>Click here</u>
                        </a>
                      </span>
                    </div>
                    <div>
                      <div id="crm-main"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* end left section */}
            {/* start middle section */}
            <div className="col-span-12 ">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 xxl:col-span-6 xl:col-span-6">
                  <div className="box">
                    <div className="box-body">
                      <div className="flex justify-between items-top">
                        <div>
                          <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-primary">
                            <i className="ti ti-users text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex flex-wrap items-center justify-between">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                                Total Customers
                              </p>
                              <h4 className="font-semibold  text-[1.5rem] !mb-2 ">
                                1,02,890
                              </h4>
                            </div>
                            <div id="crm-total-customers"></div>
                          </div>
                          <div className="flex items-center justify-between !mt-1">
                            <div>
                              <a
                                className="text-primary text-[0.813rem]"
                                href="javascript:void(0);"
                              >
                                View All
                                <i className="inline-block font-semibold ti ti-arrow-narrow-right ms-2"></i>
                              </a>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">
                                +40%
                              </p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                                this month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-6 xl:col-span-6">
                  <div className="overflow-hidden box">
                    <div className="box-body">
                      <div className="flex justify-between items-top">
                        <div>
                          <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-secondary">
                            <i className="ti ti-wallet text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex flex-wrap items-center justify-between">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                                Total Revenue
                              </p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                                $56,562
                              </h4>
                            </div>
                            <div id="crm-total-revenue"></div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <a
                                className="text-secondary text-[0.813rem]"
                                href="javascript:void(0);"
                              >
                                View All
                                <i className="inline-block font-semibold ti ti-arrow-narrow-right ms-2"></i>
                              </a>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">
                                +25%
                              </p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                                this month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-6 xl:col-span-6">
                  <div className="overflow-hidden box">
                    <div className="box-body">
                      <div className="flex justify-between items-top">
                        <div>
                          <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-success">
                            <i className="ti ti-wave-square text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex flex-wrap items-center justify-between">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                                Conversion Ratio
                              </p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                                12.08%
                              </h4>
                            </div>
                            <div id="crm-conversion-ratio"></div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <a
                                className="text-success text-[0.813rem]"
                                href="javascript:void(0);"
                              >
                                View All
                                <i className="inline-block font-semibold ti ti-arrow-narrow-right ms-2"></i>
                              </a>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-danger text-[0.813rem] font-semibold">
                                -12%
                              </p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                                this month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-6 xl:col-span-6">
                  <div className="overflow-hidden box">
                    <div className="box-body">
                      <div className="flex justify-between items-top">
                        <div>
                          <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-warning">
                            <i className="ti ti-briefcase text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex flex-wrap items-center justify-between">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                                Total Deals
                              </p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                                2,543
                              </h4>
                            </div>
                            <div id="crm-total-deals"></div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <a
                                className="text-warning text-[0.813rem]"
                                href="javascript:void(0);"
                              >
                                View All
                                <i className="inline-block font-semibold ti ti-arrow-narrow-right ms-2"></i>
                              </a>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">
                                +19%
                              </p>
                              <p className="text-[#8c9097] dark:text-white/50  opacity-[0.7] text-[0.6875rem]">
                                this month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 xxl:col-span-12 xl:col-span-12">
            <div className="box custom-card">
              <div className="justify-between box-header">
                <div className="box-title">Deals Statistics</div>
                <div className="flex flex-wrap gap-2">
                  <div>
                    <input
                      className="ti-form-control form-control-sm"
                      type="text"
                      placeholder="Search Here"
                      aria-label=".form-control-sm example"
                    />
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                    <a
                      href="javascript:void(0);"
                      className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                      aria-expanded="false"
                    >
                      Sort By
                      <i className="inline-block align-middle ri-arrow-down-s-line ms-1"></i>
                    </a>
                    <ul
                      className="hidden hs-dropdown-menu ti-dropdown-menu"
                      role="menu"
                    >
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          New
                        </a>
                      </li>
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Popular
                        </a>
                      </li>
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Relevant
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box-body">
                <div className="overflow-x-auto">
                  <table className="table min-w-full border whitespace-nowrap table-hover table-bordered">
                    <thead>
                      <tr className="border border-solid border-inherit dark:border-defaultborder/10">
                        <th scope="row" className="!ps-4 !pe-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkboxNoLabel1"
                            value=""
                            aria-label="..."
                          />
                        </th>
                        <th
                          scope="col"
                          className="!text-start !text-[0.85rem] min-w-[200px]"
                        >
                          Sales Rep
                        </th>
                        <th scope="col" className="!text-start !text-[0.85rem]">
                          Category
                        </th>
                        <th scope="col" className="!text-start !text-[0.85rem]">
                          Mail
                        </th>
                        <th scope="col" className="!text-start !text-[0.85rem]">
                          Location
                        </th>
                        <th scope="col" className="!text-start !text-[0.85rem]">
                          Date
                        </th>
                        <th scope="col" className="!text-start !text-[0.85rem]">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-solid border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                        <th scope="row" className="!ps-4 !pe-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkboxNoLabel2"
                            value=""
                            aria-label="..."
                          />
                        </th>
                        <td>
                          <div className="flex items-center font-semibold">
                            <span className="!me-2 inline-flex justify-center items-center">
                              <img
                                src="../assets/images/faces/4.jpg"
                                alt="img"
                                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                              />
                            </span>
                            Mayor Kelly
                          </div>
                        </td>
                        <td>Manufacture</td>
                        <td>mayorkelly@gmail.com</td>
                        <td>
                          <span className="inline-flex text-info !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-info/10">
                            Germany
                          </span>
                        </td>
                        <td>Sep 15 - Oct 12, 2023</td>
                        <td>
                          <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"
                            >
                              <i className="ri-download-2-line"></i>
                            </a>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border border-solid border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                        <th scope="row" className="!ps-4 !pe-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkboxNoLabel13"
                            value=""
                            aria-label="..."
                            checked
                          />
                        </th>
                        <td>
                          <div className="flex items-center font-semibold">
                            <span className="inline-flex items-center justify-center me-2">
                              <img
                                src="../assets/images/faces/15.jpg"
                                alt="img"
                                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                              />
                            </span>
                            Andrew Garfield
                          </div>
                        </td>
                        <td>Development</td>
                        <td>andrewgarfield@gmail.com</td>
                        <td>
                          <span className="inline-flex text-primary !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-primary/10">
                            Canada
                          </span>
                        </td>
                        <td>Apr 10 - Dec 12, 2023</td>
                        <td>
                          <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"
                            >
                              <i className="ri-download-2-line"></i>
                            </a>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border border-solid border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                        <th scope="row" className="!ps-4 !pe-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkboxNoLabel4"
                            value=""
                            aria-label="..."
                          />
                        </th>
                        <td>
                          <div className="flex items-center font-semibold">
                            <span className="inline-flex items-center justify-center me-2">
                              <img
                                src="../assets/images/faces/11.jpg"
                                alt="img"
                                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                              />
                            </span>
                            Simon Cowel
                          </div>
                        </td>
                        <td>Service</td>
                        <td>simoncowel234@gmail.com</td>
                        <td>
                          <span className="inline-flex text-danger !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-danger/10">
                            Europe
                          </span>
                        </td>
                        <td>Sep 15 - Oct 12, 2023</td>
                        <td>
                          <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"
                            >
                              <i className="ri-download-2-line"></i>
                            </a>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border border-solid border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                        <th scope="row" className="!ps-4 !pe-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkboxNoLabel5"
                            value=""
                            aria-label="..."
                            checked
                          />
                        </th>
                        <td>
                          <div className="flex items-center font-semibold">
                            <span className="inline-flex items-center justify-center me-2">
                              <img
                                src="../assets/images/faces/8.jpg"
                                alt="img"
                                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                              />
                            </span>
                            Mirinda Hers
                          </div>
                        </td>
                        <td>Marketing</td>
                        <td>mirindahers@gmail.com</td>
                        <td>
                          <span className="inline-flex text-warning !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-warning/10">
                            USA
                          </span>
                        </td>
                        <td>Apr 14 - Dec 14, 2023</td>
                        <td>
                          <div className="flex flex-row items-center !gap-2  text-[0.9375rem]">
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"
                            >
                              <i className="ri-download-2-line"></i>
                            </a>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border border-solid border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                        <th scope="row" className="!ps-4 !pe-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkboxNoLabel3"
                            value=""
                            aria-label="..."
                            checked
                          />
                        </th>
                        <td>
                          <div className="flex items-center font-semibold">
                            <span className="inline-flex items-center justify-center me-2">
                              <img
                                src="../assets/images/faces/9.jpg"
                                alt="img"
                                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                              />
                            </span>
                            Jacob Smith
                          </div>
                        </td>
                        <td>Social Plataform</td>
                        <td>jacobsmith@gmail.com</td>
                        <td>
                          <span className="inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10">
                            Singapore
                          </span>
                        </td>
                        <td>Feb 25 - Nov 25, 2023</td>
                        <td>
                          <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !m-0 !h-[1.75rem] !gap-0 !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"
                            >
                              <i className="ri-download-2-line"></i>
                            </a>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-icon ti-btn-wave !m-0 !h-[1.75rem] !gap-0 !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"
                            >
                              <i className="ri-edit-line"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="box-footer">
                <div className="items-center sm:flex">
                  <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                    Showing 5 Entries{" "}
                    <i className="font-semibold bi bi-arrow-right ms-2"></i>
                  </div>
                  <div className="ms-auto">
                    <nav
                      aria-label="Page navigation"
                      className="pagination-style-4"
                    >
                      <ul className="mb-0 ti-pagination">
                        <li className="page-item disabled">
                          <a className="page-link" href="javascript:void(0);">
                            Prev
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link active"
                            href="javascript:void(0);"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0);">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link !text-primary"
                            href="javascript:void(0);"
                          >
                            next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end middle section */}
        {/* start last section */}
        <div className="col-span-12 xxl:col-span-3 xl:col-span-3">
          <div className="col-span-12 xxl:col-span-3 xl:col-span-12">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 xxl:col-span-12 xl:col-span-6">
                <div className="box">
                  <div className="justify-between box-header">
                    <div className="box-title">Deals Status</div>
                    <div className="hs-dropdown ti-dropdown">
                      <a
                        href="javascript:void(0);"
                        className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                        aria-expanded="false"
                      >
                        View All
                        <i className="inline-block align-middle ri-arrow-down-s-line ms-1"></i>
                      </a>
                      <ul
                        className="hidden hs-dropdown-menu ti-dropdown-menu"
                        role="menu"
                      >
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            This Week
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Last Week
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="flex items-center mb-[0.8rem]">
                      <h4 className="font-bold mb-0 text-[1.5rem] ">4,289</h4>
                      <div className="ms-2">
                        <span className="py-[0.18rem] px-[0.45rem] rounded-sm text-success !font-medium !text-[0.75em] bg-success/10">
                          1.02
                          <i className="ri-arrow-up-s-fill align-mmiddle ms-1"></i>
                        </span>
                        <span className="text-[#8c9097] dark:text-white/50 text-[0.813rem] ms-1">
                          compared to last week
                        </span>
                      </div>
                    </div>

                    <div className="flex w-full h-[0.3125rem] mb-6 rounded-full overflow-hidden">
                      <div
                        className="flex flex-col justify-center rounded-s-[0.625rem] overflow-hidden bg-primary w-[21%]"
                        aria-valuenow="21"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <div
                        className="flex flex-col justify-center rounded-none overflow-hidden bg-info w-[26%]"
                        aria-valuenow="26"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <div
                        className="flex flex-col justify-center rounded-none overflow-hidden bg-warning w-[35%]"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <div
                        className="flex flex-col justify-center rounded-e-[0.625rem] overflow-hidden bg-success w-[18%]"
                        aria-valuenow="18"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <ul className="pt-2 mb-0 list-none crm-deals-status">
                      <li className="primary">
                        <div className="flex items-center text-[0.813rem]  justify-between">
                          <div>Successful Deals</div>
                          <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                            987 deals
                          </div>
                        </div>
                      </li>
                      <li className="info">
                        <div className="flex items-center text-[0.813rem]  justify-between">
                          <div>Pending Deals</div>
                          <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                            1,073 deals
                          </div>
                        </div>
                      </li>
                      <li className="warning">
                        <div className="flex items-center text-[0.813rem]  justify-between">
                          <div>Rejected Deals</div>
                          <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                            1,674 deals
                          </div>
                        </div>
                      </li>
                      <li className="success">
                        <div className="flex items-center text-[0.813rem]  justify-between">
                          <div>Upcoming Deals</div>
                          <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                            921 deals
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-12 xxl:col-span-12 xl:col-span-6">
                <div className="box">
                  <div className="justify-between box-header">
                    <div className="box-title">Recent Activity</div>
                    <div className="hs-dropdown ti-dropdown">
                      <a
                        href="javascript:void(0);"
                        className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                        aria-expanded="false"
                      >
                        View All
                        <i className="inline-block align-middle ri-arrow-down-s-line ms-1"></i>
                      </a>
                      <ul
                        className="hidden hs-dropdown-menu ti-dropdown-menu"
                        role="menu"
                      >
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            This Week
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Last Week
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body">
                    <div>
                      <ul className="mb-0 list-none crm-recent-activity">
                        <li className="crm-recent-activity-content">
                          <div className="flex items-start">
                            <div className="me-4">
                              <span className="w-[1.25rem] h-[1.25rem] inline-flex items-center justify-center font-medium leading-[1.25rem] text-[0.65rem] text-primary bg-primary/10 rounded-full">
                                <i className="bi bi-circle-fill text-[0.5rem]"></i>
                              </span>
                            </div>
                            <div className="crm-timeline-content text-defaultsize">
                              <span className="font-semibold ">
                                Update of calendar events &amp;
                              </span>
                              <span>
                                <a
                                  href="javascript:void(0);"
                                  className="font-semibold text-primary"
                                >
                                  Added new events in next week.
                                </a>
                              </span>
                            </div>
                            <div className="flex-grow text-end">
                              <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                                4:45PM
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="crm-recent-activity-content">
                          <div className="flex items-start text-defaultsize">
                            <div className="me-4">
                              <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-secondary bg-secondary/10 rounded-full">
                                <i className="bi bi-circle-fill text-[0.5rem]"></i>
                              </span>
                            </div>
                            <div className="crm-timeline-content">
                              <span>
                                New theme for{" "}
                                <span className="font-semibold">
                                  Spruko Website
                                </span>{" "}
                                completed
                              </span>
                              <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                Lorem ipsum, dolor sit amet.
                              </span>
                            </div>
                            <div className="flex-grow text-end">
                              <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                                3 hrs
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="crm-recent-activity-content text-defaultsize">
                          <div className="flex items-start">
                            <div className="me-4">
                              <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-success bg-success/10 rounded-full">
                                <i className="bi bi-circle-fill  text-[0.5rem]"></i>
                              </span>
                            </div>
                            <div className="crm-timeline-content">
                              <span>
                                Created a{" "}
                                <span className="font-semibold text-success">
                                  New Task
                                </span>{" "}
                                today{" "}
                                <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] text-[0.65rem] inline-flex items-center justify-center font-medium bg-purple/10 rounded-full ms-1">
                                  <i className="ri-add-fill text-purple text-[0.75rem]"></i>
                                </span>
                              </span>
                            </div>
                            <div className="flex-grow text-end">
                              <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                                22 hrs
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="crm-recent-activity-content text-defaultsize">
                          <div className="flex items-start">
                            <div className="me-4">
                              <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-pink bg-pink/10 rounded-full">
                                <i className="bi bi-circle-fill text-[0.5rem]"></i>
                              </span>
                            </div>
                            <div className="crm-timeline-content">
                              <span>
                                New member{" "}
                                <span className="py-[0.2rem] px-[0.45rem] font-semibold rounded-sm text-pink text-[0.75em] bg-pink/10">
                                  @andreas gurrero
                                </span>{" "}
                                added today to AI Summit.
                              </span>
                            </div>
                            <div className="flex-grow text-end">
                              <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                                Today
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="crm-recent-activity-content text-defaultsize">
                          <div className="flex items-start">
                            <div className="me-4">
                              <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-warning bg-warning/10 rounded-full">
                                <i className="bi bi-circle-fill text-[0.5rem]"></i>
                              </span>
                            </div>
                            <div className="crm-timeline-content">
                              <span>32 New people joined summit.</span>
                            </div>
                            <div className="flex-grow text-end">
                              <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                                22 hrs
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="crm-recent-activity-content text-defaultsize">
                          <div className="flex items-start">
                            <div className="me-4">
                              <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-info bg-info/10 rounded-full">
                                <i className="bi bi-circle-fill text-[0.5rem]"></i>
                              </span>
                            </div>
                            <div className="crm-timeline-content">
                              <span>
                                Neon Tarly added{" "}
                                <span className="font-semibold text-info">
                                  Robert Bright
                                </span>{" "}
                                to AI summit project.
                              </span>
                            </div>
                            <div className="flex-grow text-end">
                              <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                                12 hrs
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="crm-recent-activity-content text-defaultsize">
                          <div className="flex items-start">
                            <div className="me-4">
                              <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-[#232323] dark:text-white bg-[#232323]/10 dark:bg-white/20 rounded-full">
                                <i className="bi bi-circle-fill text-[0.5rem]"></i>
                              </span>
                            </div>
                            <div className="crm-timeline-content">
                              <span>
                                Replied to new support request{" "}
                                <i className="ri-checkbox-circle-line text-success text-[1rem] align-middle"></i>
                              </span>
                            </div>
                            <div className="flex-grow text-end">
                              <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                                4 hrs
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="crm-recent-activity-content text-defaultsize">
                          <div className="flex items-start">
                            <div className="me-4">
                              <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-purple bg-purple/10 rounded-full">
                                <i className="bi bi-circle-fill text-[0.5rem]"></i>
                              </span>
                            </div>
                            <div className="crm-timeline-content">
                              <span>
                                Completed documentation of{" "}
                                <a
                                  href="javascript:void(0);"
                                  className="font-semibold underline text-purple"
                                >
                                  AI Summit.
                                </a>
                              </span>
                            </div>
                            <div className="flex-grow text-end">
                              <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                                4 hrs
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end last sectin */}
      </div>
    </AdminLayout>
  );
};
export default Home;
