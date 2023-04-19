import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './fetchException.module.css';
import PropTypes from 'prop-types';
interface FetchError {
    handleRetry: () => Object | void;
}

function FetchException({handleRetry}: FetchError) {
    return (
        <div className={`${style.error}`}>
            <div className="text text_type_main-large">
                Ошибка при загрузке данных =(
            </div>
            <Button htmlType='button' type="primary" size="medium" onClick={handleRetry}>
                Попробовать еще раз
            </Button>
        </div>
    );
};

FetchException.propTypes = {
    handleRetry: PropTypes.func.isRequired
}

export default FetchException;