const Headerr = () => {
  return (
    <div className="flex justify-between text-orange-600 md:py-4">
      <div className="mx-4 justify-between flex">
        <button  className="mx-8">
          About
        </button>

        <button>
          Store
        </button>
      </div>

      <div className="mx-4 flex ">
        <button className="">
          Preferences
        </button>

        <button className="text-2xl mx-8">
          <i class="fa-regular fa-user"></i>
        </button>
      </div>
    </div>
  );
};

export default Headerr;
