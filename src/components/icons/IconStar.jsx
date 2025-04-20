import iconStar from "../../assets/images/icon-star.svg";

export function IconStar() {
  return (
    <div className="flex items-center justify-center rounded-full bg-grey-900 w-7 h-7">
      <img src={iconStar} alt="icon-star" className="w-3 h-3" />
    </div>
  );
}
