import React, { useState } from "react";
import ReactDOM from "react-dom";

const Image = ({ data }) => (
  <img src={`data:image/jpeg;base64,${data}`} alt="uploaded" />
);

const Upload = () => {
  async function readImage(e, func) {
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(file);
    reader.onload = function(e) {
      let binaryData = e.target.result;
      let base64String = window.btoa(binaryData);
      func(base64String);
    };

    let image = reader.readAsBinaryString(file);
    console.log(reader);

    return image;
  }

  const [image, setImage] = useState("");

  return (
    <form>
      <input
        name="upload-image"
        type="file"
        accept="image/*"
        onChange={event => {
          readImage(event, setImage);
        }}
      />
      {image ? <Image data={image} /> : <p>Please Upload Image</p>}
    </form>
  );
};


export default Upload