"use client";
import Pagination from "./Pagination";
import useToastMessage from "@/hooks/useToastMessage";
import { attachMediaMutation } from "@/resolvers/mutation";
import { getAllMedia } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFilePdf, FaFileZipper } from "react-icons/fa6";
import Modal from "react-modal";

const MediaAttach = ({
  selectedMedia = [],
  multiple = true,
  attachmentable_id,
  attachmentable_type,
  is_profile,
  refetch,
  modalIsOpen,
  closeModal,
}) => {
  const [current_page, set_current_page] = useState(1);
  const showToastMessage = useToastMessage();
  const [ids, setIds] = React.useState(selectedMedia);

  const { mutate, isPending } = useMutation({
    mutationKey: "attach-media",
    mutationFn: attachMediaMutation,
  });

  const handleMediaSelect = ({ media_id, clear, add }) => {
    // check if media_id is already in the media_ids array

    // if not, add it to the media_ids array

    // if it is, remove it from the media_ids array

    // update the formState.media_ids with the new media_ids array

    // if clear is true, clear the media_ids array

    if (clear) {
      if (add) {
        return;
      }

      if (selectedMedia.length > 0) {
        setIds(selectedMedia);
        return;
      }
    }

    // max media ids to be selected 5

    if (multiple) {
      if (ids.length >= 5) {
        showToastMessage("You can only select 5 media");
        return;
      }

      if (ids.includes(media_id)) {
        const mediaIds = ids.filter((id) => id !== media_id);
        setIds(mediaIds);
        return;
      }

      setIds([...ids, media_id]);
    } else {
      setIds([media_id]);
    }
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["get-all-media", current_page],
    queryFn: () => getAllMedia({ current_page }),
    enabled: !!current_page,
  });

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const handleSubmit = () => {
    const variables = {
      media_id: ids,
    };

    if (attachmentable_id) variables.attachmentable_id = attachmentable_id;
    if (attachmentable_type) variables.source = attachmentable_type;
    if (is_profile) variables.is_profile = 1;

    mutate(
      {
        variables,
      },
      {
        onSuccess: (data) => {
          closeModal();
          toast.success(data?.message || "Media attached successfully");
          refetch();
          setIds([...selectedMedia]);
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  const paginateFn = ({ page }) => {
    set_current_page(page);
    refetch();
  };

  useEffect(() => {
    if (selectedMedia.length > 0) {
      setIds((prev) => [...selectedMedia]);
    }
  }, [selectedMedia]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => {
        handleMediaSelect({ clear: true });
        closeModal();
      }}
      className="transform -translate-x-1/2 -translate-y-1/2 bg-white border top-1/2 left-1/2 "
      style={{
        overlay: {
          background: "rgba(0,0,0,0.5)",
          position: "fixed",
          zIndex: 999999,
        },
        content: {
          width: "95%",
          height: "95%",
          zIndex: 999999,
          overflow: "hidden",
          top: "50%",
          left: "50%",
          position: "absolute",
        },
      }}
      contentLabel="Example Modal"
    >
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex items-center justify-between ">
          <div className="p-2 text-xl font-bold">
            <p className="">All Media</p>
          </div>
          <button
            className="flex items-center justify-center border w-14 h-14 hover:bg-gray-200"
            onClick={() => {
              closeModal();
              handleMediaSelect({ clear: true });
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

        <div className="flex-1 w-full h-full p-4">
          {isLoading ? (
            <div className="w-full h-full">
              <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
            </div>
          ) : isError ? (
            <div className="text-red-500">{error.message}</div>
          ) : data?.data.length === 0 ? (
            <div className="text-center text-gray-500">No media found</div>
          ) : (
            <div>
              <div className="flex flex-wrap justify-start gap-3 py-5 ">
                {data?.data.map((media) => (
                  <button
                    key={media.id}
                    className={`col-span-1 p-2 flex items-center justify-center border  bg-gray-100 rounded-md min-w-[150px] h-auto max-w-[200px] ${
                      ids.includes(media.id) && "border-primary"
                    }`}
                    onClick={() => handleMediaSelect({ media_id: media.id })}
                  >
                    {media.extension === "zip" ? (
                      <div className="flex flex-col items-center justify-center w-full h-full gap-1 bg-gray-400 rounded-xl">
                        <FaFileZipper className="w-10 h-28" />
                      </div>
                    ) : media.extension === "pdf" ? (
                      <div className="flex flex-col items-center justify-center w-full h-full gap-1 bg-gray-400 rounded-xl">
                        <FaFilePdf className="w-10 h-28" />
                      </div>
                    ) : (
                      <Image
                        src={media.url}
                        alt={media.name}
                        className="object-cover w-32 h-32"
                        width={200}
                        height={200}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div>
                <Pagination meta={data?.meta} paginationFn={paginateFn} />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 px-3 py-3">
          <button
            type="button"
            class="ti-btn ti-btn-danger ti-btn-wave"
            onClick={() => {
              closeModal();
              handleMediaSelect({ clear: true });
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            class="ti-btn ti-btn-primary-full shadow-primary ti-btn-wave"
            onClick={handleSubmit}
            disabled={isPending || ids.length === 0}
          >
            {isPending ? "Loading..." : "Attach"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MediaAttach;
