import React, { useState } from "react";
import burgerIngridientsStyle from "./burgerIngredients.module.css";
import {
  Tab
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCategory from "../ingredientsCategory/IngredientCategory";
import PropTypes from 'prop-types';

interface BurgerIngredientsProps {
  data: Array<any>;
  openDetails: (id: string) => void;
}

function BurgerIngredients({ data, openDetails }: BurgerIngredientsProps) {
  const [currentTab, setCurrent] = useState("bun");
  const bun = React.useRef<HTMLInputElement>(null);
  const sauce = React.useRef<HTMLInputElement>(null);
  const main = React.useRef<HTMLInputElement>(null);

  const setCurrentT = (type: React.SetStateAction<string>) => {
    setCurrent(type);
    console.log(type)
    if (type === "bun") bun.current && bun.current.scrollIntoView({ behavior: "smooth" });

    if (type === "sauce") sauce.current && sauce.current.scrollIntoView({ behavior: "smooth" });

    if (type === "main") main.current && main.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={burgerIngridientsStyle.container}>
      <h1
        className={`${burgerIngridientsStyle.title} text text_type_main-large mt-10 mb-5`}
      >
        Соберите бургер
      </h1>

      <nav className={`${burgerIngridientsStyle.tabs}`}>
        <Tab value="bun" active={currentTab === "bun"} onClick={setCurrentT}>
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={currentTab === "sauce"}
          onClick={setCurrentT}
        >
          Соусы
        </Tab>
        <Tab value="main" active={currentTab === "main"} onClick={setCurrentT}>
          Начинки
        </Tab>
      </nav>
      <section className={`${burgerIngridientsStyle.ingredientsList} mt-10`}>
        <h2 ref={bun} className="text text_type_main-medium">
          Булки
        </h2>
        <IngredientCategory itemsList={data}
                        type={'bun'}
                        openDetails={openDetails}
                    />
        <h2 ref={sauce} className="text text_type_main-medium">
          Соусы
        </h2>
        <IngredientCategory itemsList={data} openDetails={openDetails} type={'sauce'} />
        <h2 ref={main} className="text text_type_main-medium">
          Начинки
        </h2>
        <IngredientCategory itemsList={data} openDetails={openDetails} type={'main'} />
      </section>
    </section>
  );
}
BurgerIngredients.propTypes = {
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
  openDetails: PropTypes.func.isRequired,
};

export default BurgerIngredients;
