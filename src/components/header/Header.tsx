import { Avatar } from "@mui/material";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="./logo.svg" alt="logo" className="header__logo" />
      <div className="header__info">
        <p>Фамилия Имя</p>
        <Avatar src="/broken-image.jpg" className="header__avatar" />
      </div>
    </header>
  );
}
