import "./Sidebar.css";
import SidebarSelect from "./sidebar-select/SideBarSelect";

export default function Sidebar() {
  return (
    <div className="sidebar__wrapper">
      <SidebarSelect img="./select-icon/organizations.svg" desc="Организации" />
      <SidebarSelect img="./select-icon/staff.svg" desc="Персонал" />
      <SidebarSelect img="./select-icon/credit.svg" desc="Кредиты" />
      <SidebarSelect
        img="./select-icon/сorrespondence.svg"
        desc="Корреспонденция"
      />
      <SidebarSelect img="./select-icon/job.svg" desc="Работа" />
      <SidebarSelect img="./select-icon/settings.svg" desc="Настройки" />
    </div>
  );
}
