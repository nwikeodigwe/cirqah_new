import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const Image = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<{ image: File[] }>(); // Update the type to accept an array of File

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const names = files.map(file => file.name);
      const urls = files.map(file => URL.createObjectURL(file));
      setFileNames(names);
      setPreviewUrls(urls);
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
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const names = files.map(file => file.name);
      const urls = files.map(file => URL.createObjectURL(file));
      setValue("image", files as File[], { // Cast files to File[]
        shouldValidate: true,
        shouldDirty: true,
      });
      setPreviewUrls(urls);
      setFileNames(names);
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
          "relative flex flex-col items-center justify-center h-52 bg-chicago-100/40 border-dashed border-2 border-chicago-500 overflow-clip cursor-pointer bg-cover bg-center bg-opacity-50 ",
          { "border-blue-600": isDragging, "border-red-500": errors.image }
        )}
        style={{
          backgroundImage: previewUrls.length > 0
            ? `url('${previewUrls[0]}')`
            : fileNames.length > 0
              ? `url('${fileNames[0]}')`
              : ``,
        }}
      >
        <span
          className={clsx("text-7xl text-chicago-200", {
            hidden: fileNames.length > 0,
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
          multiple // Allow multiple files
        />
        <div
          className={clsx(
            "text-center absolute flex flex-col items-center justify-center bg-chicago-100/70 h-full w-full z-20",
            {
              hidden: fileNames.length > 0,
            }
          )}
        >
          <h3 className="text-sm font-medium">Upload photos for this event</h3>
          <p className="text-xs">Drag and drop or choose files to upload</p>
        </div>
      </label>
      {errors.image && (
        <p className="text-red-500 text-sm">{errors.image.message}</p>
      )}
      <button className="text-white-green w-full py-2 bg-green te">Upload images</button>
    </div>
  );
};

export default Image;