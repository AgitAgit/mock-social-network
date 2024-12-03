const ProfileGallerySection = () => {
  return (
    <div className="UserGallery mb-[2em] mt-[2em] flex w-full flex-row gap-[1em] p-[0.5em] text-center">
      <div>
        <h2 className="mb-[1em]">
          <strong>Photos</strong>
        </h2>
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
        <h2 className="mb-[1em]">
          <strong>Video</strong>
        </h2>
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
        <h2 className="mb-[1em]">
          <strong>Tagged</strong>
        </h2>
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
