import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import AppHeader from "../header/AppHeader.jsx";
import AppStyle from "../app/app.module.css";
import BurgerConstructor from "../burgerCounstructor/BurgerConstructor";
import { useCallback, useEffect, useState } from "react";
import { URL } from "../../utils/fetch";
import Modal from "../modal/modal";
import Order from "../order/Order";
import FetchException from "../fetchException/FetchException";
import Loader from "../loader/Loader";
import IngredientDetails from "../ingredientDetails/IngredientDetails";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [selectedID, setSelectedID] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);

    const fetchData = useCallback(() => {
        setIsLoading(true);
        fetch(URL)
            .then((data) => {
                if (data.ok) {
                    return data.json();
                }
                return Promise.reject(data.status);
            })
            .then((json) => {
                setIsLoading(false);
                setData(json.data);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(true);
                console.log(`${e.name}: ${e.message}`);
            });
    }, [URL]);
    const openDetails: (id: string) => void = (id) => {
        setIsDetailsOpen(true);
        setSelectedID(id);
    };
    const openOrderSuccess = () => {
        setIsSuccessOpen(true);
    };
    const onClose = () => {
        setIsDetailsOpen(false);
        setIsSuccessOpen(false);
    };

  const itemsList= data.filter((item) => item["_id"] === selectedID)[0];
  return (
    <>
      <AppHeader />
      <Modal
                isModalOpen={isDetailsOpen}
                onClose={onClose}
                title="Детали ингредиента"
                children={<IngredientDetails itemsList={itemsList} />}
            />
            <Modal 
                isModalOpen={isSuccessOpen} 
                onClose={onClose} 
                title="Оформление заказа"
                children={<Order />}  
            />
      <main className={`${AppStyle.container}`}>
                {isLoading ? (
                    <Loader />
                ) : isError ? (
                    <FetchException handleRetry={fetchData} />
                ) : (
                    <>
                        <BurgerIngredients data={data} openDetails={openDetails} />
                        <BurgerConstructor data={data} openOrderSuccess={openOrderSuccess} />
                    </>
                )}
            </main>
    </>
  );
}

export default App;
