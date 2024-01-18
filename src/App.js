import React from "react";
/* Image file saver */
import { saveAs } from "file-saver";
/* Image compression package */
import imageCompression from "browser-image-compression";
import "./styles.css";

export default function App() {
  /* Handling image compression */
  async function handleImageUpload(event) {
    /* Getting targeted file */
    const imageFile = event.target.files[0];
    const options = {
      // maxSizeMB: 1,
      // maxWidthOrHeight: 1920,
      /* optional, use multi-thread web worker, fallback to run in main-thread (default: true) */
      useWebWorker: true,
      /* optional, max number of iteration to compress the image (default: 10) */
      maxIteration: 10,
      /* Store meta-information about original image */
      exifOrientation: 1,
      /* Control quality of compressed image, now it is set to 50% */

      initialQuality: 0.5,
    };

    try {
      console.log("Requested image", imageFile.size, imageFile.type);
      const compressedFile = await imageCompression(imageFile, options);
      console.log("Compressed image", compressedFile.size, compressedFile.type);

      // Use FileSaver to download the file directly
      let fileType = compressedFile.type.split("/")[1]; // get the file extension
      saveAs(compressedFile, `compressed-image.${fileType}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main_container">
      <label for="images" class="drop-container" id="dropcontainer">
        <span class="drop-title">Drop files here</span>
           or
        <input type="file" id="images" accept="image/*" onChange={handleImageUpload} required/>
      </label>
    </div>
  );
}
