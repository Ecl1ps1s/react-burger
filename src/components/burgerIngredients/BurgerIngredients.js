import React, { useState } from 'react';
import burgerIngridientsStyle from './burgerIngredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { items } from '../../utils/data';
import PropTypes from 'prop-types';

function BurgerIngredients() {
    const [currentTab, setCurrent] = useState('bun');
    const bun = React.useRef();
    const sauce = React.useRef();
    const main = React.useRef();

    //https://www.carlrippon.com/scrolling-a-react-element-into-view/
    const setCurrentT = (type) => {
        setCurrent(type)
        if(type === 'bun'){
            bun.current.scrollIntoView({behavior: "smooth"});
        }else if(type === 'sauce'){
            sauce.current.scrollIntoView({behavior: "smooth"});
        }else if(type === 'main'){
             main.current.scrollIntoView({behavior: "smooth"});
        }
    }
    const DataList = ({type}) =>{
        return (
            <div className={`${burgerIngridientsStyle.itemList} mt-6 mb-10 pl-4 pr-4`}>
               {items.filter(item => item.type === type)
                  .map((data, index) => (
                     <li className={`${burgerIngridientsStyle.card} mb-8`} key={index}>
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
    }
    DataList.propTypes = {
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
        })).isRequired
     };
    return (
        <>
            <section className={burgerIngridientsStyle.container}>
                <h1 className={`${burgerIngridientsStyle.title} text text_type_main-large mt-10 mb-5`}>
                    Соберите бургер
                </h1>
                <div style={{ display: 'flex' }}>
                    <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentT}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentT}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={currentTab === 'main'} onClick={setCurrentT}>
                        Начинки
                    </Tab>
                   
                </div>
                <section className={`${burgerIngridientsStyle.ingredientsList} mt-10`}>
                <h2 ref={bun} className='text text_type_main-medium'>Булки</h2>
                    <DataList  itemsList={items} type={'bun'} />
                    <h2 ref={sauce} className='text text_type_main-medium'>Соусы</h2>
                    <DataList  itemsList={items} type={'sauce'} />
                    <h2 ref={main} rclassName='text text_type_main-medium'>Начинки</h2>
                    <DataList  itemsList={items} type={'main'} />
                </section>
            </section>
        </>

    )
}

export default BurgerIngredients;
