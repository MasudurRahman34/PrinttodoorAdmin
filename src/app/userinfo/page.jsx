"use client";
import MetaData from "@/components/MetaData";
import UserProfile from "@/components/userProfile/UserProfile";
import AdminLayout from "@/layout/AdminLayout";

export default function Userinfo() {
  return (
    <AdminLayout>
      <MetaData title="User Profile" />
      <UserProfile />
    </AdminLayout>
  );
}
