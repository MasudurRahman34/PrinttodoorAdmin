"use client";
import CategorySelect from "@/components/CategorySelect";
import TextEditor from "@/components/TextEditor";
import { addProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProductForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category_id: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "add-product",
    mutationFn: addProductMutation,
  });

  const handleSubmit = () => {
    const variables = {};
    for (const key in formData) {
      if (formData[key]) {
        variables[key] = formData[key];
      } else {
        toast.error("Please fill all the fields");
        return;
      }
    }

    mutate(
      { variables },
      {
        onSuccess: (data) => {
          toast.success("Product added successfully");
          router.push(`/products/${data.data.slug}`);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 xl:col-span-12">
        <div className="box">
          <div className="box-body add-products !p-0">
            <div className="p-6">
              <div className="grid grid-cols-12 md:gap-x-[3rem] gap-0">
                <div className="col-span-12 xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 xl:col-span-12">
                      <label for="product-name-add" className="form-label">
                        Product Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control w-full !rounded-md"
                        id="product-name-add"
                        placeholder="Name"
                      />
                      <label
                        for="product-name-add"
                        className="form-label mt-1 text-[0.75rem] opacity-[0.5] !text-[#8c9097] dark:text-white/50 !mb-0"
                      >
                        *Product Name should not exceed 30 characters
                      </label>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <label for="product-category-add" className="form-label">
                        Category
                      </label>
                      <CategorySelect
                        name="category_id"
                        selected={formData.category_id}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-12 xl:col-span-12">
                      <label
                        for="product-description-add"
                        className="form-label"
                      >
                        Product Description
                      </label>
                      <TextEditor
                        text={formData.description}
                        handleChange={(value) =>
                          setFormData({ ...formData, description: value })
                        }
                      />

                      <label
                        for="product-description-add"
                        className="form-label mt-1 text-[0.75rem] opacity-[0.5] !text-[#8c9097] dark:text-white/50 mb-0"
                      >
                        *Description should not exceed 500 letters
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-end px-6 py-4 border-t border-dashed dark:border-defaultborder/10 sm:flex">
              <button
                type="button"
                className="ti-btn ti-btn-primary !font-medium m-1"
                disabled={isPending}
                onClick={handleSubmit}
              >
                {isPending ? "Adding Product..." : "Add Product"}
                <i className="bi bi-plus-lg ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
