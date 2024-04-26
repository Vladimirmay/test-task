import "./SidebarSelect.css";

export default function SidebarSelect() {
  return (
    <div className="select__wrapper">
      <select name="example">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <img src="./shape.svg" alt="arrow" className="select__arrow" />
    </div>
  );
}
