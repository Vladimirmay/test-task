import { useState, useEffect } from "react";
import ListItem from "./list-Item/ListItem";

export interface FileProps {
  id: number;
  file: {
    name: string;
  };
  status: {
    name: string;
  };
  credits_count: number;
  created_at: string;
  created_by: {
    full_name: string;
  };
}

export default function FileList() {
  const [data, setData] = useState<FileProps[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("response.json");
        const data = await response.json();
        setData(data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <ListItem
        id="ID"
        name="Название файла"
        status="Статус"
        created_at="Дата загрузки"
        credits_count="Кол-во кредитных договоров"
        uploaded_count="Загружено пользователем"
        actions="Действия"
      />

      {data.map((file) => (
        <ListItem
          key={file.id}
          id={file.id}
          name={file.file.name}
          status={file.status.name}
          created_at={file.created_at}
          credits_count={file.credits_count}
          uploaded_count={file.created_by.full_name}
        />
      ))}
    </>
  );
}
