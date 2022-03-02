import Main from "./components/Main"
import Basket from "./components/Basket"
const Plants = () =>
{
    return (
        <div className="Plants">
            <div className="row">
              <Main onAdd={onAdd} products={products}></Main>
              <Basket onAdd={onAdd} onRemove={onRemove}cartItems={cartItems}></Basket>
            </div>
        </div>
    );
}

export default Plants;