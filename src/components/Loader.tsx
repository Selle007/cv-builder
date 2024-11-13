import loader from "@/assets/Loader_01.gif";
const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <img src={loader} alt="loader" className="w-12" />
    </div>
  );
};

export default Loader;
