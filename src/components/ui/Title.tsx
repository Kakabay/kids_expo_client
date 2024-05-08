import clsx from "clsx";

export const Title = ({ title, mb24 }: { title: string; mb24?: boolean }) => {
  return (
    <h1
      className={clsx("text-[34px] font-semibold leading-[100%] text-black1", {
        "mb-6": mb24,
      })}
    >
      {title}
    </h1>
  );
};
