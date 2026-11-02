"use client";
import ConfigureTable from "../ProductSetting/ConfigureTable";
import AccordionsCard from "./AccordionsCard";
import AddProductmiddle from "./AddProductmiddle";
import AddProductleft from "@/components/AddProductleft";
import MetaData from "@/components/MetaData";
import ProductData from "@/components/productdata/ProductData";
import Loading from "@/components/ui/Loading";
import {
  getProductCombinationQuery,
  getSingleProductQuery,
} from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const SingleProduct = () => {
  const params = useParams();
  const slug = params?.slug;

  const { data, isLoading, isError, error, refetch, isFetched } = useQuery({
    queryKey: ["getSingleProductQuery", slug],
    queryFn: () => getSingleProductQuery(slug),
    enabled: !!slug,
  });

  const {
    data: combination_data,
    isError: combination_error,
    isLoading: combination_loading,
    refetch: combination_refetch,
  } = useQuery({
    queryKey: ["getCombinationTable", data?.data?.id],
    queryFn: () => getProductCombinationQuery(data?.data?.id),
    enabled: !!data?.data?.id,
  });

  return (
    <>
      <MetaData
        title={data?.data?.meta_title}
        description={data?.data?.meta_description}
      />
      <div className="grid grid-cols-12 gap-3  mt-5 bg-[#F0F1F7] mb-[50px]">
        <div className="col-span-12 lg:col-span-4">
          <AddProductleft />
        </div>
        <div className="col-span-12 lg:col-span-4 ">
          <AddProductmiddle
            data={data?.data}
            isLoading={isLoading}
            refetch={refetch}
            isError={isError}
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <AccordionsCard
            data={data?.data}
            isLoading={isLoading}
            refetch={refetch}
            isError={isError}
          />
        </div>
        <div className="col-span-12 bg-white px-5 rounded-md border border-[#333335]">
          <ProductData
            data={data?.data}
            isLoading={isLoading}
            error={error}
            isError={isError}
            refetch={refetch}
            combination_refetch={combination_refetch}
            combination_data={combination_data}
          />
        </div>

        {combination_loading ? (
          <Loading />
        ) : combination_error ? (
          <div>Error: {combination_error.message}</div>
        ) : (
          combination_data?.data.length > 0 && (
            <div className="col-span-12 bg-white  rounded-md border border-[#333335]">
              <ConfigureTable
                data={combination_data}
                product_id={data?.data?.id}
                combination_refetch={combination_refetch}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default SingleProduct;
