"use client";
import { useAuth } from "@/hooks/useAuth";

import {
  getAllCategoriesWithoutPageQuery,
  getAllProductsWithoutPageQuery,
  getSingleTopListForProductQuery,
} from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import UpdateTopListForm from "./UpdateTopListForm";
import Loading from "@/components/ui/Loading";

const SingleTopListPageComponent = () => {
  const params = useParams();
  const { session } = useAuth();
  const top_list_id = params?.top_list_id;

  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["single_top_list", top_list_id, session?.token],
    queryFn: () =>
      getSingleTopListForProductQuery({
        id: top_list_id,
        token: session?.token,
      }),
    enabled: !!top_list_id && !!session?.token,
  });

  const {
    data: productData,
    isLoading: productLoading,
    isError: isProductError,
    refetch: refetchProduct,
  } = useQuery({
    queryKey: [
      "get-all-product-without-page",
      session?.token,
      data?.data?.type,
    ],
    queryFn: () =>
      getAllProductsWithoutPageQuery({
        token: session?.token,
      }),
    enabled: !!session?.token && data?.data?.type === "product",
  });

  const {
    data: categoriesData,
    isLoading: categoryLoading,
    isError: categoryError,
    refetch: categoryRefetch,
  } = useQuery({
    queryKey: ["get-all-category-without-page", session?.token],
    queryFn: () =>
      getAllCategoriesWithoutPageQuery({
        token: session?.token,
      }),
    enabled: !!session?.token && data?.data?.type === "category",
  });

  return (
    <section>
      {isLoading || productLoading ? (
        <Loading />
      ) : isError || isProductError ? (
        <div className="text-center">Error</div>
      ) : (
        <UpdateTopListForm
          topList={data?.data}
          products={productData?.data}
          categories={categoriesData?.data}
          refetch={refetch}
          refetchProduct={refetchProduct}
        />
      )}
    </section>
  );
};

export default SingleTopListPageComponent;
