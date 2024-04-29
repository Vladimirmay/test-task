import "./CheckBoxInput.css";

export default function CheckBoxInput({ desc }: { desc: string }) {
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" name="checkbox" value="value"></input>
        <span className="checkbox__checkmark"></span>
        <span className="checkbox__label">{desc}</span>
      </label>
    </>
  );
}
