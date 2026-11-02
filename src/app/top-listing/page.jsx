"use client";
import TopListingPageComponent from "@/components/pages/topListing/TopListingPageComponent";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const Page = () => {
  return (
    <AdminLayout>
      <TopListingPageComponent />
    </AdminLayout>
  );
};

export default Page;
