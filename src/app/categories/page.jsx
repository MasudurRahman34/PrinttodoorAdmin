"use client";
import MetaData from "@/components/MetaData";
import CategoryIndex from "@/components/pages/Categories";
import AdminLayout from "@/layout/AdminLayout";

const categories = () => {
  return (
    <AdminLayout>
      <MetaData title="Categories" />
      <CategoryIndex />
    </AdminLayout>
  );
};

export default categories;
