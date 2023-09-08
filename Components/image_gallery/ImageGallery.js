import React, {useState, useEffect} from "react";
import axios from "axios";

const ImageGallery = () => {
  const [image, setImage] = useState([]);
  const getImages = async () => {
    const responseData = await axios.get("https://picsum.photos/v2/list");
    setImage(responseData.data);
  };
  return (
    <div>
      <button onClick={getImages}>get getImages</button>
      <div className="flex flex-wrap gap-5">
        {image.map((element, id) => {
          return (
            <>
              <img
                key={id}
                className="h-20"
                src={element.download_url}
                alt="random images"
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
