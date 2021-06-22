import "./ListItem.css";

const ListItem = ({ eachItem }) => {
  return (
    <div className="list-item">
      <p>{`${eachItem.name}, ${eachItem.age}`}</p>
    </div>
  );
};

export default ListItem;
