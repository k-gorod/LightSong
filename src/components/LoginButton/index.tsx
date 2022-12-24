import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useRedux } from "../../hooks";
import { UserIcon } from "../../icons";
import { setModalVisible } from "../../redux/actions/modal.actions";
import styles from './loginButton.module.scss';

const LoginButton = () => {
    const dispatch = useDispatch();

    const [active, setActive] = useState(false)

    // const userData = useRedux<{ username: string }>(state => state.user)

    const onClick = () => {
        setActive(!active)
        // dispatch(setModalVisible({
        //     isVisible: true,
        //     content: "login"
        // }))
    }

    const onBlur = () => {
        setActive(active)
    } 

    return (
        <div className={`${styles['loginButton']} ${active ? styles['loginButton-active'] : ""}`} onClick={onClick} onBlur={onBlur}>
            <div className={styles["loginButton_iconWrapper"]}>
                <UserIcon />
            </div>
        </div>
    )
}

export default LoginButton;