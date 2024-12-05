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
