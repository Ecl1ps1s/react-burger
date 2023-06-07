import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyle from "../burgerCounstructor/burgerConstructor.module.css";
import PropTypes from 'prop-types';

interface BurgerConstructorProps {
  data: Array<any>;
  openOrderSuccess: () => void;
}

function BurgerConstructor({ data, openOrderSuccess }: BurgerConstructorProps) {
  const bun = data.find((item) => item.type === "bun");
  const handleClickOrder = () => {
    openOrderSuccess();
};
  return (
    <>
      <div className={`${ConstructorStyle.container}`}>
        <div className={`${ConstructorStyle.ingredientList} mt-25 mb-10`}>
          <div className={`${ConstructorStyle.IngredientFirstItem}`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun ? `${bun.name} (верх)` : ""}
              price={bun ? bun.price : 0}
              thumbnail={bun ? bun.image : ""}
            />
          </div>
          <div className={`${ConstructorStyle.ingredientSubList}`}>
            <ul>
              {data.map(
                (item, index) =>
                  item.type !== "bun" && (
                    <li
                      className={`${ConstructorStyle.IngredientItem} mt-4 mb-4`}
                      key={index}
                    >
                      <DragIcon type="primary" />
                      <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className={`${ConstructorStyle.IngredientLastItem}`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun ? `${bun.name} (низ)` : ""}
              price={bun ? bun.price : 0}
              thumbnail={bun ? bun.image : ""}
            />
          </div>
        </div>
        <div className={`${ConstructorStyle.order} mr-4`}>
          <div className={`${ConstructorStyle.totalPrice}`}>
            <div
              className={`${ConstructorStyle.sum} text text_type_digits-medium mr-2 pr-4`}
            >
              {data.reduce((sum, { price }) => sum + price, 0) +
                (bun ? bun.price : 0)}
            </div>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType='button' type="primary" size="medium" onClick={handleClickOrder}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          proteins: PropTypes.number.isRequired,
          fat: PropTypes.number.isRequired,
          carbohydrates: PropTypes.number.isRequired,
          calories: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired,
          image_mobile: PropTypes.string.isRequired,
          image_large: PropTypes.string.isRequired,
          __v: PropTypes.number.isRequired,
      })
  ).isRequired,
  openOrderSuccess: PropTypes.func.isRequired,
};
export default BurgerConstructor;


