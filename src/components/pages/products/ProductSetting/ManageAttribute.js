"use client";
import AttributeList from "./AttributeList";
import OptionAccordions from "./OptionAccordions";
import Loading from "@/components/ui/Loading";
import Modal from "@/components/ui/Modal";
import {
  getCombinationTableMutation,
  saveAttributeMutation,
} from "@/resolvers/mutation";
import {
  getAllAttributeQuery,
  getProductAttributeExistanceQuery,
} from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState, useMemo } from "react";
import toast from "react-hot-toast";
import CombinationChangeAlert from "./CombinationChangeAlert";
import { FaBedPulse } from "react-icons/fa6";

const ManageAttribute = ({
  product_data,
  product_refetch,
  combination_refetch,
  combination_data,
}) => {
  const [checkList, setCheckList] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const hideModal = () => {
    setShow(false);
  };

  // state for checked attributes
  const [checkedAttributes, setCheckedAttributes] = useState([]);

  // mutation for product update. specially for

  const {
    data: productAttributeData,
    isLoading: productAttributeLoading,
    refetch: productAttributeRefetch,
  } = useQuery({
    queryKey: ["product_attribute", product_data?.id],
    queryFn: () => getProductAttributeExistanceQuery(product_data?.id),
    enabled: !!product_data?.id,
  });

  // getting all attribute from here
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["attributes"],
    queryFn: getAllAttributeQuery,
  });

  // mutate for saving attribute option

  const { mutate, isPending } = useMutation({
    mutationKey: ["save attribute"],
    mutationFn: saveAttributeMutation,
  });

  const { mutate: saveCombination, isPending: combinationLoading } =
    useMutation({
      mutationKey: "save_combination",
      mutationFn: getCombinationTableMutation,
    });

  const handleCheck = (id) => {
    if (checkedAttributes.filter((item) => item.id === id).length > 0) {
      setCheckedAttributes(checkedAttributes.filter((item) => item.id !== id));
    } else {
      const attribute_options = productAttributeData?.data
        .filter((attribute) => attribute.attribute_id === id)
        .map((attribute) => attribute.attribute_option_id);

      setCheckedAttributes([
        ...checkedAttributes,
        {
          id: id,
          options: [...attribute_options],
        },
      ]);
    }

    const temporarry = checkList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });

    setCheckList(temporarry);
  };

  const handleOptionCheck = ({ checked_value, attribute_id }) => {
    const temp = checkedAttributes.find((item) => item.id === attribute_id);

    if (temp.options.includes(checked_value)) {
      temp.options = temp.options.filter((item) => item !== checked_value);
    } else {
      temp.options.push(checked_value);
    }

    const newCheckedAttributes = checkedAttributes.map((item) => {
      if (item.id === attribute_id) {
        return temp;
      }
      return item;
    });

    setCheckedAttributes(newCheckedAttributes);
  };

  const toggleAccordion = (id) => {
    const temp = checkList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: !item.active,
        };
      }
      return item;
    });
    setCheckList(temp);
  };

  const handleSave = () => {
    const form_data = new FormData();

    checkedAttributes.forEach((attribute) => {
      attribute.options.forEach((option) => {
        form_data.append(`attributes[${attribute.id}][]`, option);
      });
    });

    mutate(
      {
        variables: form_data,
        product_id: product_data.id,
      },
      {
        onSuccess: () => {
          refetch();
          productAttributeRefetch();
          toast.success("Attribute created successfully");
        },
        onError: (error) => {
          toast.error("Attribute creation failed");
        },
      }
    );
  };

  const handleMutate = () => {
    const form_data = new FormData();

    form_data.append("is_new_attribute", isNewAttribute ? 1 : 0);

    checkedAttributes.forEach((attribute) => {
      attribute.options.forEach((option) => {
        form_data.append(`attributes[${attribute.id}][]`, option);
      });
    });
    saveCombination(
      {
        product_id: product_data.id,
        variables: form_data,
      },
      {
        onSuccess: (data) => {
          combination_refetch();
          productAttributeRefetch();
          refetch();
          toast.success("Product Configured successfully");
        },
        onError: (error) => {
          toast.error("Product Configuration failed");
        },
      }
    );
  };

  const { isNewAttributeOption, isNewAttribute, isConfigured, isDeleted } =
    useMemo(() => {
      const isNewAttributeOption = !!productAttributeData?.data?.find(
        (option) => option.default === 1
      );
      const isNewAttribute = !!productAttributeData?.data?.find(
        (option) => option.is_new_attribute === 1
      );

      const isConfigured = !!productAttributeData?.data?.find(
        (option) => option.is_configured === 0
      );

      const isDeleted = !!productAttributeData?.data?.find(
        (option) => option.deleted_at
      );

      return {
        isNewAttributeOption,
        isNewAttribute,
        isConfigured,
        isDeleted,
      };
    }, [productAttributeData?.data]);

  const isDisabled = isNewAttribute
    ? false
    : isConfigured
    ? isNewAttribute
    : isDeleted
    ? false
    : true;

  // useEffect for setting the data to the checkList
  useEffect(() => {
    if (data) {
      const temp = [];
      data.data.forEach((attribute) => {
        temp.push({
          id: attribute.id,
          title: attribute.title,
          options: attribute.options,
          type: attribute.type,
          active: true,
        });
      });
      // setState({
      //   is_attribute: product_data.is_attribute.value === 1,
      // });
      setCheckList(temp);
    }
  }, [data]);

  useEffect(() => {
    if (productAttributeData?.data.length > 0) {
      const temp = [];
      productAttributeData?.data.forEach((attribute) => {
        // if attribute id is same as the attribute id from the data then push the option id to the temp array else push the attribute id to the temp array with attribute options id as the options

        if (
          temp.filter((item) => item.id === attribute.attribute_id).length > 0
        ) {
          temp.forEach((item) => {
            if (item.id === attribute.attribute_id && !attribute.deleted_at) {
              item.options.push(attribute.attribute_option_id);
            }
          });
        } else {
          // if the attribute id is not in the temp array then push the attribute id with the option id as the options
          if (!attribute.deleted_at) {
            temp.push({
              id: attribute.attribute_id,
              options: [attribute.attribute_option_id],
            });
          }
        }
      });

      setCheckedAttributes(temp);
    }
  }, [productAttributeLoading]);

  return (
    <>
      <Modal show={show} hideModal={hideModal} refetch={refetch} />
      <div className="flex flex-col items-start justify-between w-full gap-3 md:flex-row">
        <div className="w-full box lg:max-w-64">
          <div className="flex justify-between box-header">
            <div className="box-title">Attributes</div>
            <div className="hs-dropdown ti-dropdown">
              <button
                type="button"
                aria-label="button"
                className="ti-btn ti-btn-icon ti-btn-primary-full ti-btn-wave"
                onClick={() => setShow(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-3 box-body">
            <div id="crm-profits-earned ">
              {isLoading ? (
                <Loading />
              ) : isError ? (
                <div>Error</div>
              ) : (
                data?.data.map((attribute) => (
                  <AttributeList
                    title={attribute.title}
                    value={attribute.id}
                    type={attribute.type}
                    attribute_refetch={refetch}
                    product_refetch={product_refetch}
                    checked={
                      checkedAttributes.filter(
                        (item) => item.id === attribute.id
                      ).length > 0
                    }
                    handleCheck={handleCheck}
                    key={attribute.id}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <OptionAccordions
          handleOptionCheck={handleOptionCheck}
          refetch={refetch}
          product_refetch={product_refetch}
          attribute_refetch={refetch}
          options={[...checkList]}
          checkedAttributes={checkedAttributes}
          toggleAccordion={toggleAccordion}
          productAttributeData={productAttributeData}
        />
      </div>
      <div className="pb-3">
        <div className="flex items-center justify-end w-full gap-3 mt-10">
          {productAttributeData?.data?.length > 0 && (
            <button
              type="button"
              className={`ti-btn  ti-btn-loader disabled:opacity-50 ${
                isNewAttribute ? "ti-btn-danger-full" : "ti-btn-primary-full"
              }`}
              disabled={isPending || isDisabled}
              onClick={handleMutate}
            >
              <span class="me-2">Configure Product</span>
              {combinationLoading ? (
                <span class="loading">
                  <i class="ri-loader-2-fill text-[1rem] animate-spin"></i>
                </span>
              ) : null}
            </button>
          )}
          <button
            type="button"
            className="ti-btn ti-btn-primary-full ti-btn-wave disabled:opacity-50"
            disabled={isPending}
            onClick={handleSave}
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </div>
        <CombinationChangeAlert
          isNewAttribute={isNewAttribute}
          isNewAttributeOption={isNewAttributeOption}
          isConfigured={isConfigured}
          isDeletedAt={isDeleted}
        />
      </div>
    </>
  );
};

export default ManageAttribute;
