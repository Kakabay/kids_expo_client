import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-[300px] mx-auto flex justify-center items-center">
      <TailSpin
        height="80"
        width="80"
        color="#61378A"
        ariaLabel="loading"
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
