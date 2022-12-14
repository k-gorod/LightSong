import { useDispatch } from "react-redux";
// import { useRedux } from "../../hooks";
import { UserIcon } from "../../icons";
import { setModalVisible } from "../../redux/actions/modal.actions";
import styles from './loginButton.module.scss';

const LoginButton = () => {
    const dispatch = useDispatch();

    // const userData = useRedux<{ username: string }>(state => state.user)

    const handleClick = () => {
        dispatch(setModalVisible({
            isVisible: true,
            content: "login"
        }))
    }

    return (
        <div className={styles['loginButton']} onClick={handleClick}>
            <UserIcon />
        </div>
    )
}

export default LoginButton;