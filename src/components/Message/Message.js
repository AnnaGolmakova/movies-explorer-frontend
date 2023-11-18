import { useRef, useState, useEffect } from 'react';

import iconError from '../../images/icon-error.svg';
import iconDone from '../../images/icon-done.svg';

import './Message.css';

function Message(props) {
    const [isOpen, setIsOpen] = useState(props.isOpened);
    const dialog = useRef(null);

    useEffect(() => {
        if (isOpen) {
            dialog.current.showModal();
        }
    }, [isOpen, dialog]);

    function close() {
        dialog.current.close();
        props.onClose();
    }

    return (
        <dialog
            ref={dialog}
            className="popup popup__container_message"
            onClose={() => setIsOpen(false)}
        >
            {props.icon === "error" &&
                <img
                    className="popup__status-icon"
                    src={iconError}
                    alt="Иконка ошибки"
                />
            }
            {props.icon === "done" &&
                <img
                    className="popup__status-icon"
                    src={iconDone}
                    alt="Иконка успех"
                />
            }
            <h2 className="popup__title popup__title_message">{props.title}</h2>
            <button
                type="button"
                className="popup__close"
                onClick={() => close()}
            />
        </dialog>
    )
}

export default Message;