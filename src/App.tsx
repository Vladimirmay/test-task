import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import FileList from "./components/file-list/FileList";
import Search from "./components/search/Search";
import FilterSelect from "./components/filter-select/FilterSelect";
import ModalDownloadFile from "./components/modal/ModalDownloadFile";
import CheckBoxInput from "./components/checkbox-input/CheckBoxInput";

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
