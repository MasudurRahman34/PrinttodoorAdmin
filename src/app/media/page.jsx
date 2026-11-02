"use client";
import MetaData from "@/components/MetaData";
import Media from "@/components/pages/Media";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const Page = () => {
  return (
    <AdminLayout>
      <MetaData title="Media" />
      <div className="bg-[#F6F8F7] px-5 pt-5 h-full min-h-[90vh] ">
        <Media />
      </div>
    </AdminLayout>
  );
};

export default Page;
