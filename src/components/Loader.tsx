import clsx from 'clsx';
import { TailSpin } from 'react-loader-spinner';

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('w-full h-[300px] mx-auto flex justify-center items-center', className)}>
      <TailSpin height="80" width="80" color="#61378A" ariaLabel="loading" wrapperClass="" />
    </div>
  );
};

export default Loader;
