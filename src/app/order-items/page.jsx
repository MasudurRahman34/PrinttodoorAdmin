"use client";
import MetaData from "@/components/MetaData";
import OrderItemsComponent from "@/components/pages/OrderItems";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const OrderItemsPage = () => {
  return (
    <AdminLayout>
      <MetaData title="Order Items" />
      <OrderItemsComponent />
    </AdminLayout>
  );
};

export default OrderItemsPage;
