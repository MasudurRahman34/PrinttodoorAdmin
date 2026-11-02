"use client";
import MetaData from "@/components/MetaData";
import CartsComponent from "@/components/pages/carts";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const CartsPage = () => {
  return (
    <AdminLayout>
      <MetaData title="Carts" />
      <CartsComponent />
    </AdminLayout>
  );
};

export default CartsPage;
