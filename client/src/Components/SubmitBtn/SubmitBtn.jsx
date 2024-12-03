const SubmitBtn = ({ btnPlaceholder }) => {
  return (
    <div>
      <button
        className="mt-[0.8em] w-full rounded-[100em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-[#eb903b]"
        type="submit"
      >
        {btnPlaceholder}
      </button>
    </div>
  );
};

export default SubmitBtn;
