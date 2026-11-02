"use client";
import MetaData from "@/components/MetaData";
import BannerPageComponent from "@/components/pages/banner/BannerPageComponent";
import AdminLayout from "@/layout/AdminLayout";

const Banner = () => {
  return (
    <AdminLayout>
      <MetaData title="Banner" />
      <BannerPageComponent />
    </AdminLayout>
  );
};

export default Banner;
