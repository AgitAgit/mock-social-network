import { BsPersonVideo2 } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { BsPersonBoundingBox } from "react-icons/bs";

const iconContainerStyle = "mb-[1em] flex flex-col items-center text-[1.5em]";

const ProfileGallerySection = () => {
  return (
    <div className="UserGallery mb-[2em] mt-[2em] flex w-full flex-row gap-[0.5em] p-[0.5em] text-center">
      <div>
        <div className={iconContainerStyle}>
          <CgMenuGridR />
        </div>
        <div className="PhotosImgsContainer flex w-full flex-col gap-[0.5em]">
          <img
            src="../../../public/images/static-profile-image-one.svg"
            alt=""
          />
          <img
            src="../../../public/images/static-profile-image-two.svg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className={iconContainerStyle}>
          <BsPersonVideo2 />
        </div>
        <div className="VideosImgContainer flex w-full flex-col gap-[0.5em]">
          <img
            src="../../../public/images/static-profile-image-three.svg"
            alt=""
          />
          <img
            src="../../../public/images/static-profile-image-four.svg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className={iconContainerStyle}>
          <BsPersonBoundingBox />
        </div>
        <div className="TaggedImgContainer flex w-full flex-col gap-[0.5em]">
          <img
            src="../../../public/images/static-profile-image-five.svg"
            alt=""
          />
          <img
            src="../../../public/images/static-profile-image-six.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileGallerySection;
