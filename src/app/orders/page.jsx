"use client";
import MetaData from "@/components/MetaData";
import OrderComponents from "@/components/pages/Orders/OrderComponents";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const Orders = () => {
  return (
    <AdminLayout>
      <MetaData title="Orders" />
      <OrderComponents />
    </AdminLayout>
  );
};

export default Orders;
