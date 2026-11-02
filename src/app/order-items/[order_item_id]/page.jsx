"use client";
import MetaData from "@/components/MetaData";
import SingleOrderItemComponent from "@/components/pages/OrderItems/SingleOrderItemPage";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const OrderItemsSinglePage = () => {
  return (
    <AdminLayout>
      <MetaData title="Orders Items" />
      <SingleOrderItemComponent />
    </AdminLayout>
  );
};

export default OrderItemsSinglePage;
