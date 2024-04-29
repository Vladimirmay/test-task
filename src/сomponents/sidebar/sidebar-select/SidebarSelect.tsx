import "./SideBarSelect.css";
import { useState } from "react";

export const DEFAULT_STATE = {
  IS_OPEN: false,
  ICON: "./shape-rotate.svg",
};

export default function SideBarSelect({
  img,
  desc,
}: {
  img: string;
  desc: string;
}) {
  const [isOpen, setIsOpen] = useState(DEFAULT_STATE.IS_OPEN);
  const [icon, setIcon] = useState(DEFAULT_STATE.ICON);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIcon(isOpen ? "./shape-rotate.svg" : "./shape.svg");
  };
  return (
    <>
      <div className="sidebar__item__wrapper" onClick={handleToggle}>
        <div className="sidebar__item">
          <img src={img} alt={desc} className="sidebar__item__icon" />
          <p>{desc}</p>
        </div>
        <img src={icon} alt="select-icon" />
      </div>
      {isOpen && (
        <div className="dropdown__list">
          <p className="dropdown__list__item">Аналитика</p>
          <p className="dropdown__list__item">Договоры</p>
          <p className="dropdown__list__item">Импорт</p>
        </div>
      )}
    </>
  );
}
