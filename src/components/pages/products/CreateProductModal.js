"use client";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { addProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

const product_types = [
  { id: 1, name: "simple", value: "1" },
  { id: 2, name: "configurable", value: "2" },
  { id: 3, name: "clothing", value: "3" },
];

const CreateProductModal = ({ modalIsOpen = false, setIsOpen }) => {
  const showToastMessage = useToastMessage();
  const { session, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    type: "",
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
    variables.type = parseInt(variables.type);

    mutate(
      { variables, token: session?.token },
      {
        onSuccess: (data) => {
          toast.success("Product added successfully");
          setIsOpen(false);
          setFormData({
            title: "",
            type: "",
            description: "",
          });
          window.open(`/products/${data.data.slug}`);
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Create a new product"
      style={{
        overlay: {
          background: "rgba(0,0,0,0.5)",
          position: "fixed",
          zIndex: 999999,
        },
        content: {
          width: "90%",
          height: "90%",
          zIndex: 999999,
          overflow: "hidden",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
        },
      }}
    >
      <div className="grid h-full grid-cols-12 gap-6 overflow-y-auto">
        <div className="h-full col-span-12 xl:col-span-12">
          <div className="h-full box">
            <div className="box-body add-products !p-0 flex flex-col h-full justify-between">
              <div className="flex items-center justify-between ">
                <div className="py-2 text-base font-bold md:text-xl">
                  <p className="">Create Product</p>
                </div>
                <button
                  className="flex items-center justify-center w-12 h-12 border hover:bg-gray-200"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto md:p-6">
                <div className="grid grid-cols-12 md:gap-x-[3rem] gap-0">
                  <div className="col-span-12 ">
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
                      </div>
                      <div className="col-span-12">
                        <label
                          for="product-category-add"
                          className="form-label"
                        >
                          Product Type
                        </label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="form-select w-full !rounded-md"
                          id="product-category-add"
                        >
                          <option value="">Select Product Type</option>
                          {product_types.map((type) => (
                            <option key={type.id} value={type.value}>
                              {type.name}
                            </option>
                          ))}
                        </select>
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
    </Modal>
  );
};

export default CreateProductModal;
