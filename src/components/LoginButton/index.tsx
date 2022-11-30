import { useDispatch } from "react-redux";
import { useRedux } from "../../hooks";
import { UserIcon } from "../../icons"
import { setModalVisible } from "../../redux/actions/modal.actions";
import Login from "../Login";
import styles from './loginButton.module.scss';

const LoginButton = () => {
    const dispatch = useDispatch();

    const userData = useRedux<{ username: string }>(state => state.user)

    const handleClick = () => {
        dispatch(setModalVisible({
            isVisible: true,
            content: "login"
        }))
    }

    return (
        <div className={styles['login-button']} onClick={handleClick}>
            <UserIcon />

            <div style={{position: 'absolute', top: '25px', right: '100px'}}>
            {userData?.username}
            </div>
        </div>
    )
}

export default LoginButton;