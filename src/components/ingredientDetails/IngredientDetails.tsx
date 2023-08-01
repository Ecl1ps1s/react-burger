import style from "./ingredientDetails.module.css";
import PropTypes from "prop-types";
type IngredientDetailsType=  {
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
}
interface IngredientDetailsProps{
    itemsList: IngredientDetailsType;
}
function IngredientDetails({ itemsList }: IngredientDetailsProps) {
    return (
        <div className={`${style.container}`}>
            <div className={style.image}>
                <img src={itemsList?.image_large} alt={itemsList?.name} />
            </div>
            <span
                className={`${style.name} text text_type_main-medium mt-4 mb-8`}
            >
                {itemsList?.name}
            </span>
            <div className={`${style.nutrition}`}>
                <div className={`${style.nutritionItem} text_color_inactive`}>
                    <span
                        className={`${style.detailsName} text text_type_main-default`}
                    >
                        Калории,ккал
                    </span>
                    <span
                        className={`${style.detailsValue} text_type_digits-default`}
                    >
                        {itemsList?.calories}
                    </span>
                </div>
                <div className={`${style.nutritionItem} text_color_inactive`}>
                    <span
                        className={`${style.detailsName} text text_type_main-default`}
                    >
                        Белки, г
                    </span>
                    <span
                        className={`${style.detailsValue} text_type_digits-default`}
                    >
                        {itemsList?.proteins}
                    </span>
                </div>
                <div className={`${style.nutritionItem} text_color_inactive`}>
                    <span
                        className={`${style.detailsName} text text_type_main-default`}
                    >
                        Жиры, г
                    </span>
                    <span
                        className={`${style.detailsValue} text_type_digits-default`}
                    >
                        {itemsList?.fat}
                    </span>
                </div>
                <div className={`${style.nutritionItem} text_color_inactive`}>
                    <span
                        className={`${style.detailsName} text text_type_main-default`}
                    >
                        Углеводы, г
                    </span>
                    <span
                        className={`${style.detailsValue} text_type_digits-default`}
                    >
                        {itemsList?.carbohydrates}
                    </span>
                </div>
            </div>
        </div>
    );
};

IngredientDetails.propTypes = {
    itemsList: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string,
            proteins: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
            price: PropTypes.number,
            image: PropTypes.string,
            image_mobile: PropTypes.string,
            image_large: PropTypes.string.isRequired,
            __v: PropTypes.number.isRequired,
        })
};

export default IngredientDetails;