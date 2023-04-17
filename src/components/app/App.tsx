import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import AppHeader from "../header/AppHeader";
import AppStyle from "./App.module.css";
import BurgerConstructor from "../burgerCounstructor/BurgerConstructor";

function App() {
  return (
    <>
      <AppHeader />
      <main className={`${AppStyle.container}`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </>
  );
}

export default App;
