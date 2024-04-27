import "./ListItem.css";

interface ListItemProps {
  id: number | string;
  name: string;
  status: string;
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
  actions,
}: ListItemProps) {
  return (
    <div className="list__item__wrapper">
      <div className="list__items">
        <div className="list__item__id">
          <span>{id}</span>
        </div>
        <div className="list__item__name">
          <span>{name}</span>
        </div>
        <div className="list__item__status">
          <span>{status}</span>
        </div>
        <div className="list__item__date">
          <span>{created_at}</span>
        </div>
        <div className="list__item">
          <span>{credits_count}</span>
        </div>
        <div className="list__item">
          <span>{uploaded_count}</span>
        </div>
        <div className="list__item">
          <span>{actions}</span>
        </div>
      </div>
    </div>
  );
}
