import "./FileListHeader.css";

export default function FileListHeader() {
  return (
    <div className="list__item__header__wrapper">
      <div className="list__item__header__id">
        <p>ID</p>
      </div>
      <div className="list__item__header__name">
        <p>Название файла</p>
      </div>
      <div className="list__item__header__status">
        <p>Статус</p>
      </div>
      <div className="list__item__header__date">
        <p>Дата загрузки</p>
      </div>
      <div className="list__header__item">
        <p>Кол-во кредитных договоров</p>
      </div>
      <div className="list__header__item">
        <p>Загружено пользователем</p>
      </div>
      <div className="list__header__item">
        <p>Действия</p>
      </div>
    </div>
  );
}
