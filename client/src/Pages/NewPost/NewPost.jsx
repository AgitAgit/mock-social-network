import { useState } from "react";
import PlaceholderImage from "/images/post-placeholder.svg";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdZoomInMap } from "react-icons/md";
import NewPostHeader from "./NewPostHeader/NewPostHeader";
import NewPostRecentsFooter from "./NewPostRecentsFooter/NewPostRecentsFooter";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";

const NewPost = () => {
  const [icon, setIcon] = useState(<MdOutlineZoomOutMap />);

  const handleClick = (e) => {
    const btnClass = e.target.closest("button").className;
    if (btnClass === "icon") {
      setIcon((prev) =>
        prev.type === MdOutlineZoomOutMap ? (
          <MdZoomInMap />
        ) : (
          <MdOutlineZoomOutMap />
        ),
      );
    } else {
      return;
    }
  };

  return (
    <div
      className="flex w-[100vw] flex-col justify-center p-[0.5em] text-white"
      onClick={handleClick}
    >
      <NewPostHeader />
      <div className="mt-[0.5em] flex flex-col items-center justify-center">
        <img src={PlaceholderImage} alt="" className="w-[70vw]" />
      </div>
      <div>
        <button className="icon">{icon}</button>
      </div>
      <NewPostRecentsFooter />
      <FooterMenu pageValue={"Add Post"} />
    </div>
  );
};

export default NewPost;
