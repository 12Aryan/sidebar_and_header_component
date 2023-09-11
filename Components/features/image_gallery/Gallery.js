import React, {useState, useEffect} from "react";
import axios from "axios";

const Gallery = () => {
  const [image, setImage] = useState([]);
  const getImages = async () => {
    const responseData = await axios.get("https://picsum.photos/v2/list");
    setImage(responseData.data);
  };
  return (
    <div>
      <button className= "bg-gray-950 px-3 py-2 text-xs align-middle m-2" onClick={getImages}>get Images</button>
      <div className="flex flex-wrap gap-5 p-2">
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

export default Gallery;
