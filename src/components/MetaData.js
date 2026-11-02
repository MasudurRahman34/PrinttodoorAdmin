"use client";
import React, { useEffect } from "react";

const MetaData = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = `weareprintlab - ${title}`;
    } else {
      document.title = "weareprintlab";
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);

  return null;
};

export default MetaData;
