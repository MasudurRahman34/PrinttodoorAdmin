"use client";
import DeleteModal from "@/components/ui/DeleteModal";
import { deleteProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const TableRow = ({ product, refetch }) => {
  const [show, setShow] = React.useState(false);
  const { mutate, isPending } = useMutation({
    mutationKey: "delete_product",
    mutationFn: deleteProductMutation,
  });

  const handleDelete = () => {
    mutate(
      {
        product_id: product.id,
      },
      {
        onSuccess: (data) => {
          setShow(false);
          toast.success("Product deleted successfully");
        },
        onError: (error) => {
          toast.error("Something went wrong");
          console.log(error);
        },
      }
    );
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <DeleteModal
        handleDelete={handleDelete}
        isPending={isPending}
        show={show}
        hideModal={hideModal}
        title="Product Delation"
      />
      <tr class="product-list">
        <td>
          <div class="flex items-center">
            <span class="avatar avatar-md me-2">
              <img
                src={
                  product.media.filter((item) => item.is_profile === 1)[0]
                    ?.url || "../assets/images/faces/6.jpg"
                }
                alt="img"
              />
            </span>
          </div>
        </td>
        <td>
          <div class="flex items-center">
            <div class="font-semibold">{product.title}</div>
          </div>
        </td>
        <td>
          <span class="badge bg-light text-default text-wrap">
            {product?.categories.length > 0 &&
              product.categories.map((category) => category.title).join(", ")}
          </span>
        </td>
        <td>$1,299</td>

        <td>24,Nov 2022 - 04:42PM</td>
        <td>
          <div class="flex flex-row items-center !gap-2 text-[0.9375rem]">
            <Link
              aria-label="anchor"
              href={`/products/${product.slug}`}
              class="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
            >
              <i class="ri-pencil-line"></i>
            </Link>
            <button
              type="button"
              class="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
              onClick={() => setShow(true)}
            >
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
