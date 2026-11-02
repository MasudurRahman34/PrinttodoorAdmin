"use client";
import SingleTopListPageComponent from "@/components/pages/topListing/SingleTopList/SingleTopListPageComponent";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const Page = () => {
  return (
    <AdminLayout>
      <SingleTopListPageComponent />
    </AdminLayout>
  );
};

export default Page;
