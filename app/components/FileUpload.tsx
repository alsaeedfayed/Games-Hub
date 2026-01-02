"use client";
import { FileUpload } from "@/components/ui/file-upload";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

export function FileUploadDemo({ name }: { name: string }) {
  const [files, setFiles] = useState<File[]>([]);
  const form = useFormContext();
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    form.setValue(name, files);
    console.log(files, form.getValues(name));
  };

  return (
    <div className="w-full bg-black-100 opacity-70  max-w-4xl mx-auto min-h-64 border border-dashed  rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}
