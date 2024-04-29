import "./FileList.css";
import ListItem from "./list-Item/ListItem";
import FileListHeader from "./file-list-header/FileListHeader";
import { format, parseISO } from "date-fns";
import { useState, useEffect } from "react";

export interface FileProps {
  id: number;
  file: {
    name: string;
  };
  status: {
    name: string;
    color: string;
  };
  credits_count: number;
  created_at: string;
  created_by: {
    username: string;
  };
}
const apiDomain = import.meta.env.VITE_API_DOMAIN;

export default function FileList() {
  const [data, setData] = useState<FileProps[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        let url;
        if (apiDomain) {
          url = `${apiDomain}`;
        } else {
          url = "response.json";
        }
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const formatDate = (date: string) => {
    return format(parseISO(date), "dd.MM.yyyy");
  };
  const VISIBLE_REGISTERS = 10;
  return (
    <>
      <FileListHeader />
      <div className="file__list">
        <div
          style={{
            maxHeight: data.length > VISIBLE_REGISTERS ? "400px" : "auto",
            overflowY: data.length > VISIBLE_REGISTERS ? "auto" : "hidden",
          }}
        >
          {data.map((file) => (
            <ListItem
              key={file.id}
              id={file.id}
              name={file.file.name}
              status={file.status.name}
              color={file.status.color}
              created_at={formatDate(file.created_at)}
              credits_count={file.credits_count}
              uploaded_count={file.created_by.username}
            />
          ))}
          {data.length === 0 && <p>Ничего не найдено</p>}
        </div>
        <p className="file__total">Всего строк: {data.length}</p>
      </div>
    </>
  );
}
