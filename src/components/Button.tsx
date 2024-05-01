export const Button = ({ text }: { text: string }) => {
  return (
    <div className="cursor-pointer w-fit mx-auto py-[17px] px-[50px] text-[14px] text-purple border-[1px] border-purple rounded-sm hover:text-white hover:bg-purple transition-all">
      {text}
    </div>
  );
};
