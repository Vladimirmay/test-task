import "./FilterSelect.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterSelect() {
  return (
    <div className="select__wrapper">
      <FormControl fullWidth>
        <InputLabel id="status-select-label">Статус</InputLabel>
        <Select
          labelId="status-select-label"
          id="status-select"
          label="Status"
          sx={{ height: 48, borderRadius: "8px" }}
        >
          <MenuItem value="Успешно обработан">Успешно обработан</MenuItem>
          <MenuItem value="Обработан с ошибкой">Обработан с ошибкой</MenuItem>
          <MenuItem value="Ожидание">Ожидание</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
