"use client";
import RefundPageComponent from "@/components/pages/refunds/RefundPageComponent";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const Page = () => {
  return (
    <AdminLayout>
      <RefundPageComponent />
    </AdminLayout>
  );
};

export default Page;
