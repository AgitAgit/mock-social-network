import { IoArrowBackOutline } from "react-icons/io5";

const ArrowBackIcon = ({ top, left, position }) => {
  return (
    <div>
      <IoArrowBackOutline
        style={{
          position,
          top,
          left,
          fontSize: "24px",
          color: "white",
          borderRadius: "100em",
        }}
        className="hover:rounded-[0.1em] hover:bg-profileSectionTheme hover:tracking-[0.05em] hover:text-[var(--bgTheme)]"
      />
    </div>
  );
};

export default ArrowBackIcon;
