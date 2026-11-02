"use client";
import useToastMessage from "@/hooks/useToastMessage";
import axios from "axios";
import React, { useState } from "react";
import { FilePond, File, registerPlugin } from "react-filepond";

const UploadMedia = ({ refetch }) => {
  const showToastMessage = useToastMessage();
  const [files, setFiles] = useState([]);
  const [fileUploadOpen, setFileUploadOpen] = useState(false);
  const [state, setState] = useState({
    file: null,
    imagePreviewUrl: "",
    isLoading: false,
    isError: false,
  });

  const toggleFileUpload = () => {
    setFileUploadOpen(!fileUploadOpen);
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-black md:text-2xl lg:text-3xl xl:text-4xl">
          Media Library
        </h1>
        <div className="flex items-center ml-5">
          <button
            className="bg-[#FFD200] text-black px-3 py-2 rounded-md"
            onClick={toggleFileUpload}
          >
            Upload Media
          </button>
        </div>
      </div>
      <div className="mt-5 ">
        {fileUploadOpen && (
          <div className="col-span-12 lg:col-span-4">
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              allowImagePreview={true}
              allowImageExifOrientation={true}
              imagePreviewHeight={200}
              imageCropAspectRatio="1:1"
              imageResizeTargetWidth={150}
              imageResizeTargetHeight={150}
              imageResizeMode="contain"
              maxFiles={5}
              allowRevert={false}
              labelIdle="Drag & Drop your files or <span class='filepond--label-action'>Browse</span>"
              name="file"
              server={{
                process: (
                  fieldName,
                  file,
                  metadata,
                  load,
                  error,
                  progress,
                  abort
                ) => {
                  const formData = new FormData();
                  formData.append("media[0]", file);

                  axios
                    .post(
                      `${process.env.NEXT_PUBLIC_BACKEND_URL}/media`,
                      formData
                    )
                    .then((res) => {
                      load(res);
                      refetch();
                    })
                    .catch((err) => {
                      if (
                        err?.response?.status &&
                        err?.response?.status !== 200
                      ) {
                        showToastMessage(err?.response?.data?.message);
                        error("Error uploading file");
                      }
                    });
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadMedia;
