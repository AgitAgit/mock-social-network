import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <div className="relative mt-[0.5em] w-full h-[2em]">
      <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        className="rounded-[0.2em] w-full h-full pl-10 bg-slate-700 placeholder-gray-500 text-white focus:outline-black"
      />
    </div>
  );
};

export default Searchbar;
