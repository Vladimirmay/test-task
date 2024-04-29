import "./App.css";
import Header from "./сomponents/header/Header";
import Sidebar from "./сomponents/sidebar/Sidebar";
import FileList from "./сomponents/file-list/FileList";
import Search from "./сomponents/search/Search";
import FilterSelect from "./сomponents/filter-select/FilterSelect";
import ModalDownloadFile from "./сomponents/modal/ModalDownloadFile";
import CheckBoxInput from "./сomponents/checkbox-input/CheckBoxInput";

function App() {
  return (
    <>
      <Header />
      <main className="main__wrapper">
        <Sidebar />
        <div className="content">
          <div className="import__file__wrapper">
            <h1>Импорт файлов</h1>
            <ModalDownloadFile />
          </div>
          <div className="filter__bar">
            <Search />
            <FilterSelect />

            <CheckBoxInput desc="Обработан" />
          </div>

          <FileList />
        </div>
      </main>
    </>
  );
}

export default App;
