import ImageBlockDisplay from "../../ImageBlockDisplay/ImageBlockDisplay";

const dammyPosts = [
  { postImageUrl: "../../../public/images/static-profile-image-one.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-two.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-three.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-four.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-five.svg" },
  { postImageUrl: "../../../public/images/static-profile-image-six.svg" },
];

const ProfileGallerySection = ({ posts }) => {
  return (
    <div>
      <div
        // onClick={handleClick}
        className="mb-12 mt-2 flex w-full flex-row flex-wrap justify-center"
      >
        {posts &&
          posts.map((post, index) => (
            <button key={post._id} className={post._id}>
              <ImageBlockDisplay post={post} />
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProfileGallerySection;
