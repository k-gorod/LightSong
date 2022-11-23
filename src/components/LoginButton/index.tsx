import { useDispatch } from "react-redux";
import { UserIcon } from "../../icons"
import { setModalVisible } from "../../redux/actions/modalActions";
import Login from "../Login";
import styles from './loginButton.module.scss';

const LoginButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setModalVisible({
            isVisible: true,
            content: "login"
        }))
    }

    return (
        <div className={styles['login-button']} onClick={handleClick}>
            <UserIcon />
        </div>
    )
}

export default LoginButton;