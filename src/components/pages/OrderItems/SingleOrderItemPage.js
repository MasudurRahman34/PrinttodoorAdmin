"use client";
import Loading from "@/components/ui/Loading";
import OrdersList, { OrderItemCard } from "@/components/ui/OrdersList";
import { useAuth } from "@/hooks/useAuth";
import { getOrderItemById } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const SingleOrderItemComponent = () => {
  const { session } = useAuth();
  const params = useParams();
  const order_item_id = params?.order_item_id;

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["get_order_items_by_id", order_item_id, session?.token],
    queryFn: () =>
      getOrderItemById({ id: order_item_id, token: session?.token }),
    enabled: !!session?.token && !!order_item_id,
  });

  return (
    <div>
      <div className="justify-between block page-header md:flex">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            {" "}
            Orders Details
          </h3>
        </div>
        {/* <ol className="flex items-center min-w-0 whitespace-nowrap">
          <li className="text-[0.813rem] ps-[0.5rem]">
            <a
              className="flex items-center truncate text-primary hover:text-primary dark:text-primary"
              href="javascript:void(0);"
            >
              Ecommerce
              <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
            </a>
          </li>
          <li
            className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
            aria-current="page"
          >
            Orders Details
          </li>
        </ol> */}
      </div>

      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 ">
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <div>
              <h1>Error</h1>
              <button onClick={() => refetch()}>Retry</button>
            </div>
          ) : (
            data &&
            data.data && <OrderItemCard item={data?.data} refetch={refetch} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleOrderItemComponent;
