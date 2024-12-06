import BackPageArrow from "../BackPageArrow/BackPageArrow";

const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userInputs = Object.fromEntries(formData);
    console.log(userInputs);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center text-white">
      <div>
        <h2>EditProfile</h2>
      </div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" />
        <label htmlFor="Username">Username</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="Pronouns">Pronouns</label>
        <input type="text" placeholder="Pronouns" />
        <label htmlFor="Bio">Links</label>
        <input type="text" placeholder="." />
        <label htmlFor="Links">Links</label>
        <input type="text" placeholder="Add links" />
        <label htmlFor="Banners">Banners</label>
        <input type="text" placeholder="Add banners" />
        <label htmlFor="Music">Music</label>
        <input type="text" placeholder="Add music to your profile" />

        <label for="genderOption">Gender</label>
        <select id="genderOptions" name="genderOptions">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Custom">Custom</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
      </form>
    </div>
  );
};

export default EditProfile;
