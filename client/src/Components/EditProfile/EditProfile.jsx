import FakeProfileImage from "/images/static-profile-image.svg";

const inputStyle = "ml-[0.5em] bg-transparent placeholder:text-white";

const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userInputs = Object.fromEntries(formData);
    console.log(userInputs);
  };

  return (
    <div className="flex w-full flex-col p-[2em] text-white">
      <h2 className="text-center">EditProfile</h2>
      <hr />
      <div className="mb-[1em] mt-[0.5em] flex w-full flex-row items-center justify-center gap-[1em]">
        <img
          src={FakeProfileImage}
          alt=""
          className="w-[20vw] rounded-[100em]"
        />
        <img
          src={FakeProfileImage}
          alt=""
          className="w-[20vw] rounded-[100em]"
        />
      </div>
      <button>Edit picture or avatar</button>
      <hr />
      <form className="mt-[0.5em] flex flex-col" onSubmit={handleSubmit}>
        <div className="flex w-full flex-row flex-wrap">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="name" className={inputStyle} />

          <div>
            <label htmlFor="Username">Username</label>
            <input type="text" placeholder="Username" className={inputStyle} />
          </div>

          <div>
            <label htmlFor="Pronouns">Pronouns</label>
            <input type="text" placeholder="Pronouns" className={inputStyle} />
          </div>

          <div>
            <label htmlFor="Bio">Links</label>
            <input type="text" placeholder="." className={inputStyle} />
          </div>

          <div>
            <label htmlFor="Links">Links</label>
            <input type="text" placeholder="Add links" className={inputStyle} />
          </div>

          <div>
            <label htmlFor="Banners">Banners</label>
            <input
              type="text"
              placeholder="Add banners"
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="Music">Music</label>
            <input
              type="text"
              placeholder="Add music to your profile"
              className={inputStyle}
            />
          </div>

          <div>
            <label for="genderOption">Gender</label>
            <select
              id="genderOptions"
              name="genderOptions"
              defaultValue="Male"
              className={inputStyle}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Custom">Custom</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
