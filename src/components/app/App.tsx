import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import AppHeader from "../header/AppHeader.jsx";
import AppStyle from "../app/app.module.css";
import BurgerConstructor from "../burgerCounstructor/BurgerConstructor";
import { useEffect, useState } from "react";
import { URL } from "../../utils/constants";
import FetchException from "../fetchException/FetchException";
import Loader from "../loader/Loader";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    fetch(URL)
      .then(checkResponse)
      .then((json) => {
        setIsLoading(false);
        setData(json.data);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(true);
        console.log(`${e.name}: ${e.message}`);
      });
  };
  const checkResponse = (res: { ok: any; json: () => Promise<any> }) => {
    return res.ok
      ? res.json()
      : res.json().then((err: any) => Promise.reject(err));
  };

  return (
    <>
      <AppHeader />

      <main className={`${AppStyle.container}`}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <FetchException handleRetry={fetchData} />
        ) : (
          <>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
