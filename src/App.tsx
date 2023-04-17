import BurgerIngredients from './components/burgerIngredients/BurgerIngredients';
import AppHeader from './components/header/AppHeader';
import AppStyle from './App.module.css';
import BurgerConstructor from './components/burgerCounstructor/BurgerConstructor';


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
