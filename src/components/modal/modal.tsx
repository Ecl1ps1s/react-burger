import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/close-icon";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modalOverlay/modalOverlay";
import style from "./modal.module.css";
import PropTypes from 'prop-types';

interface ModalProps {
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
}

function Modal({ title, children,  onClose }: ModalProps) {
    const handleEscPress: (e: KeyboardEvent) => void = function (e) {
        if (e.key === "Escape") onClose();
    };
    useEffect(() => {
        document.addEventListener("keydown", handleEscPress);
        return () => document.removeEventListener("keydown", handleEscPress);
    });

    const modal = document.getElementById("modal");
    return createPortal(
        <>
            <ModalOverlay onClose={onClose} />
            <div
                className={`${
                    style.container
                } pl-10 pt-10 pr-10 pb-15`}
            >
                <div className={`${style.header}`}>
                    <div className="title text text_type_main-large">
                        {title}
                    </div>
                    <div className={style.closeIcon}>
                        <CloseIcon type="primary" onClick={onClose} />
                    </div>
                </div>
                {children}
            </div>
        </>,
        modal!
    );
};

Modal.propTypes = {
    title: PropTypes.string, 
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;
