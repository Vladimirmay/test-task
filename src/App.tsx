import "./App.css";
import Header from "./сomponents/header/Header";
import Sidebar from "./сomponents/sidebar/Sidebar";

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
              Импорт
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
