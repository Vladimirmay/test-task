import "./SideBarSelect.css";
import { useState } from "react";

export default function SideBarSelect({
  img,
  desc,
}: {
  img: string;
  desc: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("./shape-rotate.svg");

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
        <img src={icon} alt="vector" />
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
