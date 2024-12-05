import { BsPersonVideo2 } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { BsPersonBoundingBox } from "react-icons/bs";
import ImageBlockDisplay from "../../ImageBlockDisplay/ImageBlockDisplay";

const iconContainerStyle = "mb-[1em] flex flex-col items-center text-[1.5em]";

const dammyPosts = [
  { postImageUrl: "../../../public/images/static-profile-image-one.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-two.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-three.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-four.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-five.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-six.svg" },
];

const ProfileGallerySection = () => {
  return (
    <div>
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
      <div
        // onClick={handleClick}
        className="mt-2 flex w-full flex-row flex-wrap justify-center"
      >
        {dammyPosts &&
          dammyPosts.map((post) => (
            <button key={post.postImageUrl} className={post.postImageUrl}>
              <ImageBlockDisplay post={post} />
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProfileGallerySection;
