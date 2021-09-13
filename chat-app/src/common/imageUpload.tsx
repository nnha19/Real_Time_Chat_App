import React, { useRef, useState } from "react";
import Button from "./button";

interface IProps {
  changeVal: (e: any) => void;
}

const ImageUpload: React.FC<IProps> = ({ changeVal }) => {
  const [imgPreview, setImgPreview] = useState("");
  const imgRef: any = useRef();

  const setImgPreviewHandler = (e: any) => {
    setImgPreview(URL.createObjectURL(e.target.files[0]));
    changeVal(e);
  };

  const btnStyle = {
    padding: ".2rem .4rem",
    width: "max-content",
    position: "absolute",
    bottom: "1rem",
    right: "-3rem",
  };

  const chooseImgHandler = () => {
    imgRef.current.click();
  };

  return (
    <div className="mt-2 flex flex-col items-center my-2 ">
      <div className="relative">
        <img className="block h-32 w-32 rounded-full" src={imgPreview} />
        <Button type="button" clicked={chooseImgHandler} btnStyle={btnStyle}>
          Upload
        </Button>
      </div>
      <input
        className="hidden"
        ref={imgRef}
        onChange={setImgPreviewHandler}
        type="file"
      />
    </div>
  );
};

export default ImageUpload;
