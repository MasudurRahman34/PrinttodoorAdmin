"use client";
import CusomtersComponent from "@/components/Customers/CusomtersComponent";
import MetaData from "@/components/MetaData";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const CustomersPage = () => {
  return (
    <AdminLayout>
      <MetaData title="Customers" />
      <CusomtersComponent />
    </AdminLayout>
  );
};

export default CustomersPage;
