"use client";
import ArtworkComponent from "../pages/products/ProductSetting/Artwork";
import ArtworkService from "../pages/products/ProductSetting/ArtworkService";
import Attribute from "../pages/products/ProductSetting/Attribute";
import DeliveryService from "../pages/products/ProductSetting/DeliveryService";
import Specification from "../pages/products/ProductSetting/Specification";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import QuantityRule from "../pages/products/ProductSetting/QuantityRule";

const tabList = [
  {
    id: 1,
    name: "Artwork",
  },
  {
    id: 2,
    name: "Specification",
  },

  {
    id: 4,
    name: "Delivery Service",
  },
  {
    id: 5,
    name: "Artwork Service",
  },
  {
    id: 3,
    name: "Attribute",
  },
  {
    id: 6,
    name: "Quantity",
  },
];

export default function ProductData({
  data,
  isLoading,
  isError,
  error,
  refetch,
  combination_refetch,
  combination_data,
}) {
  const params = useParams();
  const slug = params?.slug;
  const [active, setActive] = useState("Artwork");

  useEffect(() => {
    if (slug) {
      setActive("Artwork");
    }
  }, [slug]);

  return (
    <div>
      <div className="flex items-center py-5 border-b border-[#333335]">
        <p className="text-base font-medium text-black">Product data</p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 py-3 ">
          <ul className="flex flex-col justify-between w-full gap-2 md:flex-row">
            {tabList.map((tab) => (
              <li
                key={tab.id}
                className={`px-3 py-2 border cursor-pointer w-full text-center  ${
                  active === tab.name ? "text-white  bg-primary " : ""
                }`}
                onClick={() => setActive(tab.name)}
              >
                <p className={`text-sm md:text-base font-bold`}>{tab.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12">
          {active === "Artwork" && (
            <ArtworkComponent
              data={data}
              isLoading={isLoading}
              error={error}
              isError={isError}
              refetch={refetch}
            />
          )}
          {active === "Specification" && (
            <Specification
              product_id={data?.id}
              product_data={data}
              product_isLoading={isLoading}
              product_error={error}
              product_isError={isError}
              product_refetch={refetch}
            />
          )}
          {active === "Attribute" && (
            <Attribute
              product_id={data?.id}
              product_data={data}
              product_isLoading={isLoading}
              product_error={error}
              product_isError={isError}
              combination_data={combination_data}
              product_refetch={refetch}
              combination_refetch={combination_refetch}
            />
          )}
          {active === "Delivery Service" && (
            <DeliveryService
              product_id={data?.id}
              product_data={data}
              product_isLoading={isLoading}
              product_error={error}
              product_isError={isError}
              product_refetch={refetch}
              combination_refetch={combination_refetch}
            />
          )}
          {active === "Artwork Service" && (
            <ArtworkService
              product_id={data?.id}
              product_data={data}
              product_isLoading={isLoading}
              product_error={error}
              product_isError={isError}
              product_refetch={refetch}
              combination_refetch={combination_refetch}
            />
          )}
          {active === "Quantity" && (
            <QuantityRule
              product_id={data?.id}
              product_data={data}
              isLoading={isLoading}
              product_error={error}
              product_isError={isError}
              product_refetch={refetch}
              combination_refetch={combination_refetch}
            />
          )}
        </div>
      </div>
    </div>
  );
}
