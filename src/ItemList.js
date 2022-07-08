import Item from "./Item";

const ItemList = ({ items, setItemView }) => {
  return (
    <div className="itemlist">
      {items.map((item) => (
        <Item key={item.id} item={item} setItemView={setItemView} />
      ))}
    </div>
  );
};

export default ItemList;
