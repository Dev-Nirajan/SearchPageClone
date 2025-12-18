const Footer = () => {
  return (
    <div className="flex bg-slate-200 text-slate-500 justify-between p-4">
      <div>This Is Only Clone Site</div>
      <div>
        Made With
        <i className="fa-solid fa-heart text-red-400"></i>And 
        <a href="https://tailwindcss.com/"
           className="mx-2 underline hover:no-underline"
          >
          Tailwind CSS
        </a>
      </div>
      <div> Created By Neer</div>
    </div>
  );
};

export default Footer;
