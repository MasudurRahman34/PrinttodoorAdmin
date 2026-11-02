"use client";
import MetaData from "@/components/MetaData";
import FileCheckComponent from "@/components/pages/FileCheck";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const FileCheck = () => {
  return (
    <AdminLayout>
      <MetaData title="File Check" />
      <FileCheckComponent />
    </AdminLayout>
  );
};

export default FileCheck;
