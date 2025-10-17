class Document {
  payload: File | undefined;
  url: string;

  constructor() {
    this.payload = undefined;
    this.url = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/upload`;
  }

  private isAllowed(file: File) {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
      "image/avif",
    ];
    const maxSize = 20 * 1024 * 1024; // 20MB

    return allowedTypes.includes(file.type) && file.size <= maxSize;
  }

  async upload(): Promise<string | null> {
    if (!this.payload) throw Error("Payload is required");

    if (!this.isAllowed(this.payload)) throw Error("Invalid file type");

    const timestamp = Date.now();
    const baseName = this.payload.name.replace(/\.[^/.]+$/, "");
    const public_id = `${baseName}_${timestamp}`;

    const fd = new FormData();
    fd.append("file", this.payload);
    fd.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    fd.append("public_id", public_id);
    fd.append("tags", "profile_picture");

    try {
      const response = await fetch(this.url, {
        method: "POST",
        body: fd,
      });

      const result = await response.json();
      return result.secure_url || undefined;
    } catch (error) {
      console.error("Upload failed:", error);
      return null;
    }
  }
}

export const file = new Document();
export default Document;
