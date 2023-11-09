import { FC } from "react";
import "./image.css"
import ImageGrallery from "./ImageGrallery";

export const ImageSearch: FC = () => {

  return (
    <div>
      <div className="container">
        <h2>image search</h2>
        <form>
          <input type="text" placeholder="画像を探す" />
        </form>
        <ImageGrallery />
      </div>
    </div>
  )
}