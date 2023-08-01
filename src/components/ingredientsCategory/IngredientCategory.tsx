import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngridientsStyle from "./ingredientCategory.module.css";
import PropTypes from "prop-types";
import React from "react";

type IngredientType = {
    _id: string;
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
    __v: number;
  };

interface IngredientProps {
    type: string;
    itemsList: Array<IngredientType>;
    openDetails: (id: string) => void;
}

function IngredientCategory({ type, itemsList, openDetails }: IngredientProps) {
    const clickHandler = (id: string) => (e: React.MouseEvent) => {
        openDetails(id);
    };
    return (
        <div className={`${burgerIngridientsStyle.itemList} mt-6 mb-10 pl-4 pr-4`}>
            {itemsList.filter(item => item.type === type)
                .map((data) => (
                         <li
                        className={`${burgerIngridientsStyle.card} mb-8`}
                        key={data._id}
                        value={data.name}
                        onClick={clickHandler(data._id)}>
                        <Counter count={1} size="default" />
                        <img className={`${burgerIngridientsStyle.img}`} src={data.image} alt={data.name} />
                        <div className={`${burgerIngridientsStyle.price} m-1`}>
                            <p className='text text_type_digits-default pr-2'>
                                {data.price}
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <div className={`${burgerIngridientsStyle.name} text text_type_main-default`}>
                            {data.name}
                        </div>
                    </li>
                ))}
        </div>
    )
};

IngredientCategory.propTypes = {
    itemsList: PropTypes.arrayOf(PropTypes.shape({
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
        __v: PropTypes.number.isRequired
    }).isRequired).isRequired
};

export default IngredientCategory;