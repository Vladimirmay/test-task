import "./ListItem.css";
import axios from "axios";

interface ListItemProps {
  id: number | string;
  name: string;
  status: string;
  color: string;
  created_at: string;
  credits_count: number | string;
  uploaded_count: number | string;
  actions?: string;
}

export default function ListItem({
  id,
  name,
  status,
  created_at,
  credits_count,
  uploaded_count,
  color,
}: ListItemProps) {
  const handleDownloadClick = async () => {
    try {
      axios.get(`/api/cessions/registries/${id}/export`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteClick = async () => {
    try {
      axios.delete(`/api/cessions/registries/${id}/`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="list__item__wrapper">
      <div className="list__item__id list__item">
        <p>{id}</p>
      </div>
      <div className="list__item__name list__item">
        <p>{name}</p>
      </div>
      <div className="list__item__status list__item">
        <p style={{ color }}>{status}</p>
      </div>
      <div className="list__item__date list__item">
        <p>{created_at}</p>
      </div>
      <div className="list__item">
        <p>{credits_count}</p>
      </div>
      <div className="list__item">
        <p>{uploaded_count}</p>
      </div>
      <div className="list__item__actions list__item">
        <button onClick={handleDownloadClick}>
          <img
            width="20px"
            height="20px"
            src="./download.svg"
            alt="download-file"
          />
        </button>
        <button onClick={handleDeleteClick}>
          <img
            width="20px"
            height="20px"
            src="./delete.svg"
            alt="delete-file"
          />
        </button>
      </div>
    </div>
  );
}
