import "./List.css";
import ListItem from "./ListItem";

const List = ({ data }) => {
  return (
    <div className="list-container">
      {data.length === 0 && <p>no entries found!</p>}
      {data.length !== 0 &&
        data.map(eachItem => <ListItem eachItem={eachItem} />)}
    </div>
  );
};

export default List;
