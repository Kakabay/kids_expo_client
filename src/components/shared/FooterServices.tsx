import clsx from "clsx";
import useGetfooterServices from "../../hooks/participants/services/useGetfooterServices";

export const FooterServices = ({ className }: { className?: string }) => {
  const { data } = useGetfooterServices();

  return (
    <div
      className={clsx(
        "select-inner py-6 px-4 rounded-sm bg-[#F5F5F5]",
        className
      )}
      dangerouslySetInnerHTML={{ __html: data ? data[0].content : "" }}
    />
  );
};
