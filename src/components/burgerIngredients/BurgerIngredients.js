import React, { useState } from "react";
import burgerIngridientsStyle from "./burgerIngredients.module.css";
import {
  Tab
} from "@ya.praktikum/react-developer-burger-ui-components";
import { items } from "../../utils/data";
import IngredientCategory from "../../ingredientsCategory/ingredientsCategory";

function BurgerIngredients() {
  const [currentTab, setCurrent] = useState("bun");
  const bun = React.useRef();
  const sauce = React.useRef();
  const main = React.useRef();

  const setCurrentT = (type) => {
    setCurrent(type);
    if (type === "bun") bun.current.scrollIntoView({ behavior: "smooth" });

    if (type === "sauce") sauce.current.scrollIntoView({ behavior: "smooth" });

    if (type === "main") main.current.scrollIntoView({ behavior: "smooth" });
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
        <IngredientCategory itemsList={items} type={"bun"} />
        <h2 ref={sauce} className="text text_type_main-medium">
          Соусы
        </h2>
        <IngredientCategory itemsList={items} type={"sauce"} />
        <h2 ref={main} className="text text_type_main-medium">
          Начинки
        </h2>
        <IngredientCategory itemsList={items} type={"main"} />
      </section>
    </section>
  );
}

export default BurgerIngredients;
