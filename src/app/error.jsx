"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("App Router Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl font-bold text-danger mb-4">Something went wrong!</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>
      <button onClick={() => reset()} className="ti-btn ti-btn-primary">
        Try Again
      </button>
    </div>
  );
}
