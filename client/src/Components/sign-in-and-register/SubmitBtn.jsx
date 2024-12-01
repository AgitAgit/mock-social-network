const SubmitBtn = ({ btnPlaceholder }) => {
  return (
    <div>
      <button className="p-2 w-10/12 cursor-pointer bg-blue-500 rounded-lg" type="submit">
        {btnPlaceholder}
      </button>
    </div>
  );
};

export default SubmitBtn;
