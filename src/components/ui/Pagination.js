import Link from "next/link";
import React, { useState } from "react";

const splitedUrl = (url) => {
  return url.split("v1")[1];
};

const Pagination = ({ links }) => {

  return (
    <div className="flex-wrap items-center justify-end sm:flex">
      <nav aria-label="Page navigation w-full">
        <ul className="ti-pagination  mb-0 flex gap-2 flex-row rounded-sm text-[1rem] !ps-0">
          {links?.first && (
            <li className="page-item disabled">
              <Link
                href={splitedUrl(links?.first)}
                className="page-link !py-[0.375rem] !px-[0.75rem]"
              >
                First Page
              </Link>
            </li>
          )}
          {links?.prev && (
            <li className="page-item active">
              <Link
                className="page-link !py-[0.375rem] !px-[0.75rem] !text-sm"
                href={splitedUrl(links?.prev)}
              >
                Prev
              </Link>
            </li>
          )}

          {links?.next && (
            <li className="hidden page-item sm:block text-[10px] ">
              <Link
                className="page-link !py-[0.375rem] !px-[0.75rem] !text-sm"
                href={splitedUrl(links?.next)}
              >
                Next
              </Link>
            </li>
          )}
          {links?.last && (
            <li className="page-item">
              <Link
                href={splitedUrl(links?.last)}
                className="page-link !text-primary !py-[0.375rem] !px-[0.75rem] !text-sm "
              >
                Last Page
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
