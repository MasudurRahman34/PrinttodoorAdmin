"use client";
import CreateProductModal from "./CreateProductModal";
import ProductTable from "./ProductTable";
import { getAllProducts } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "gridjs-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";

const ProductsComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <CreateProductModal
        /* refetch={refetch} */
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      />
      <div>
        {/* <!-- Page Header --> */}
        <div className="justify-between block page-header md:flex">
          <div className="flex items-center gap-3">
            <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-base font-semibold">
              {" "}
              Products List
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalIsOpen(true)}
              className="ti-btn ti-btn-primary"
            >
              Add Product
            </button>
          </div>
        </div>
        {/*   <!-- Page Header Close -->
                <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-12">
            <div className="box">
              <ProductTable />
            </div>
          </div>
        </div>
        {/*  <!--End::row-1 --> */}
      </div>
    </>
  );
};

export default ProductsComponent;
