import "./App.css";
import Header from "./сomponents/header/Header";
import Sidebar from "./сomponents/sidebar/Sidebar";
import FileList from "./сomponents/file-list/FileList";
import Search from "./сomponents/search/Search";
import SidebarSelect from "./сomponents/sidebar/sidebar-select/SidebarSelect";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function App() {
  return (
    <>
      <Header />
      <main className="main__wrapper">
        <Sidebar />
        <div className="content">
          <div className="import__file__wrapper">
            <h1>Импорт файлов</h1>
            <button className="import__file__btn">
              <img src="./Vector.svg" alt="add" />
              <p>Импорт</p>
            </button>
          </div>
          <div className="filter__bar">
            <Search />
            <SidebarSelect />
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Обработан"
              />
            </div>
          </div>
          <FileList />
        </div>
      </main>
    </>
  );
}

export default App;
