import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyle from "../burgerCounstructor/burgerConstructor.module.css";
import PropTypes from "prop-types";
import Order from "../order/Order";
import Modal from "../modal/modal";
import { useState } from "react";

type IngredientType = {
  id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  v: number;
};
interface BurgerConstructorProps {
  data: Array<IngredientType>;
}

function BurgerConstructor({ data }: BurgerConstructorProps) {
  const bun = data.find((item) => item.type === "bun");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const handleClickOrder = () => {
    setIsSuccessOpen(true);
  };
  const onClose = () => {
    setIsSuccessOpen(false);
  };
  return (
    <>
      {isSuccessOpen ? (
        <Modal title="Оформление заказа" onClose={onClose}>
          <Order />
        </Modal>
      ) : null}
      <div className={`${ConstructorStyle.container}`}>
        <div className={`${ConstructorStyle.ingredientList} mt-25 mb-10`}>
          <div className={`${ConstructorStyle.ingredientFirstItem}`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun ? `${bun.name} (верх)` : ""}
              price={bun ? bun.price : 0}
              thumbnail={bun ? bun.image : ""}
            />
          </div>
          <div className={`${ConstructorStyle.ingredientSubList}`}>
              {data.map(
                (item, index) =>
                  item.type !== "bun" && (
                    <div
                      className={`${ConstructorStyle.ingredientItem} mt-4 mb-4`}
                      key={index}
                    >
                      <DragIcon type="primary" />
                      <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                      />
                    </div>
                  )
              )}
          </div>
          <div className={`${ConstructorStyle.ingredientLastItem}`}>
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
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={handleClickOrder}
          >
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
};
export default BurgerConstructor;