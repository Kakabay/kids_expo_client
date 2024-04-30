interface IProps {
  text: string;
  icon: string;
}

export const Card = ({ text, icon }: IProps) => {
  return (
    <div className="px-5 pt-5 pb-[50px] bg-white rounded-[10px] drop-shadow-cardShadow">
      <img src={icon} alt="" />
      <h3>{text}</h3>
    </div>
  );
};
