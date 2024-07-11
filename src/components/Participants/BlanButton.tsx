export const BlankButton = (path: any) => {
  return (
    <a
      href={path}
      className="flex items-center justify-center gap-1 py-2 border-[#E7DBF0] border-[1px]">
      <img src="/assets/icons/participants-services/file-extension.svg" alt="file" />
      <div className="leading-[150%] -tracking-[2%]">Скачать бланк заказа</div>
    </a>
  );
};
