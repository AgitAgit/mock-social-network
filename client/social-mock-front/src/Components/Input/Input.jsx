const input = ({ type, placeholder }) => {
  return (
    <div>
      <input className="p-2 w-10/12" type={type} placeholder={placeholder} />
    </div>
  );
};

export default input;
