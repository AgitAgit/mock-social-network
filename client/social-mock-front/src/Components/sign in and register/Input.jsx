const input = ({ type, placeholder }) => {
  return (
    <div>
      <input
        className="p-3 w-10/12 rounded-lg text-xs"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default input;
