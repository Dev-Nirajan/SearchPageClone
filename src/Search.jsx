const SearchSection = () => {
  return (
    <div className="flex justify-center items-center flex-1 text-orange-500 flex-col">
      <button className="text-6xl"> Google </button>
      <div className="mt-4 bg-orange-200 py-2 w-[400px] rounded-full flex items-center">
        <i className="fa-solid fa-magnifying-glass px-4"></i>
        <input className="rounded-full bg-transparent flex-1 mx-4"></input>
      </div>

      <div className="mt-4">
        <button className="bg-blue-100 text-blue-500 mx-2 rounded-md p-2">Google Search</button>
        <button className="bg-blue-100 text-blue-500 mx-2 rounded-md p-2">Image Search</button>
      </div>
    </div>
  );
};

export default SearchSection;
