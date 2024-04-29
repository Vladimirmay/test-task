import "./Sidebar.css";
import SideBarSelect from "./sidebar-select/SideBarSelect";

export default function Sidebar() {
  return (
    <div className="sidebar__wrapper">
      <SideBarSelect img="./select-icon/organizations.svg" desc="Организации" />
      <SideBarSelect img="./select-icon/staff.svg" desc="Персонал" />
      <SideBarSelect img="./select-icon/credit.svg" desc="Кредиты" />
      <SideBarSelect
        img="./select-icon/сorrespondence.svg"
        desc="Корреспонденция"
      />
      <SideBarSelect img="./select-icon/job.svg" desc="Работа" />
      <SideBarSelect img="./select-icon/settings.svg" desc="Настройки" />
    </div>
  );
}
