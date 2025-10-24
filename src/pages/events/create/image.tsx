import { useRef, useState } from "react";
import type { Schema } from "./schema";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

const Image = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<Schema>();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setValue("image", file, {
        shouldValidate: true,
        shouldDirty: true,
      });
      setPreviewUrl(url);
      setFileName(file.name);
    }
  };

  return (
    <div className="space-y-3">
      <label
        htmlFor="image"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={clsx(
          "relative flex flex-col items-center justify-center h-52 bg-chicago-100/40 border-dashed border-2 border-chicago-500 overflow-clip cursor-pointer bg-cover bg-center bg-opacity-50",
          { "border-blue-600": isDragging, "border-red-500": errors.image }
        )}
        style={{
          backgroundImage: previewUrl
            ? `url('${previewUrl}')`
            : fileName
            ? `url('${fileName}')`
            : ``,
        }}
      >
        <span
          className={clsx("text-7xl text-chicago-200", {
            hidden: fileName,
          })}
        ></span>
        <input
          {...register("image", {
            onChange: (e) => {
              handleFileSelect(e);
            },
          })}
          ref={fileInputRef}
          type="file"
          hidden
        />
        <div
          className={clsx(
            "text-center absolute flex flex-col items-center justify-center bg-chicago-100/70 h-full w-full z-20",
            {
              hidden: fileName,
            }
          )}
        >
          <h3 className="text-sm font-medium">Upload photo for this event</h3>
          <p className="text-xs">Drag and drop or choose a file to upload</p>
        </div>
      </label>
      {errors.image && (
        <p className="text-red-500 text-sm">{errors.image.message}</p>
      )}
    </div>
  );
};

export default Image;
