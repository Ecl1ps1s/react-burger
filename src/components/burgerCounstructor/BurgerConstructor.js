import { ConstructorElement, Button, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyle from '../burgerCounstructor/burgerConstructor.module.css'
import { items } from '../../utils/data';

function BurgerConstructor() {
    const bun = items.find(item => item.type === 'bun');
    return (
        <>
            <div className={`${ConstructorStyle.container}`}>
                <div className={`${ConstructorStyle.ingredientList} mt-25 mb-10`}>
                    
                    <div className={`${ConstructorStyle.ingredientSubList}`}>
                    <div className={`${ConstructorStyle.IngredientFirstItem}`}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={bun ? `${bun.name} (верх)` : ''}
                            price={bun ? bun.price : 0}
                            thumbnail={bun ? bun.image : ''}
                        />
                    </div>
                        <ul>
                            {items.map((item, index) => (item.type !== 'bun' &&
                                <li className={`${ConstructorStyle.IngredientItem} mt-4 mb-4`} key={index}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className={`${ConstructorStyle.IngredientLastItem}`}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={bun ? `${bun.name} (низ)` : ''}
                            price={bun ? bun.price : 0}
                            thumbnail={bun ? bun.image : ''}
                        />
                    </div>
                    </div>

                    
                </div>
                <div className={`${ConstructorStyle.order} mr-4`}>
                    <div className={`${ConstructorStyle.totalPrice}`}>
                        <div className={`${ConstructorStyle.sum} text text_type_digits-medium mr-2 pr-4`}>
                            {items.reduce((sum, {price}) => sum + price, 0) + (bun ? bun.price : 0)}
                        </div>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </>
)
}
  
  export default BurgerConstructor;
  