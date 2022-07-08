import Item from "./Item"

// function ItemList ({items, setItemView})
const ItemList= ({items, setItemView})=>{ 
    // console.log('raunak')
    // console.log("itemlist", setItemView)
    return (
        <div className="itemlist">
            {items.map((item) =>(
                <Item key ={item.id} item={item} setItemView={setItemView} />
            ))}
        </div>
    )
}

export default ItemList