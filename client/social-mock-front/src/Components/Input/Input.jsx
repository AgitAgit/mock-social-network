const input = ({ type, placeholder }) => {
  return (
    <div>
      <input
        className="p-2 w-10/12 rounded-lg"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default input;
