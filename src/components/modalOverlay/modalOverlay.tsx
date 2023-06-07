import style from "./modalOverlay.module.css";
import PropTypes from 'prop-types';
interface ModalOverlayProps {
    onClose: () => void;
}

function ModalOverlay({ onClose }: ModalOverlayProps) {
    return (
        <div
            className={style.container}
            onClick={onClose}
        ></div>
    );
};

ModalOverlay.propTypes ={
    onClose: PropTypes.func.isRequired
}

export default ModalOverlay;