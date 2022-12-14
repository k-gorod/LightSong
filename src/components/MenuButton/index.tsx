import { useDispatch } from "react-redux";
import { useRedux } from "../../hooks";
import { MenuIcon } from "../../icons";
import { setSidebarIsOpen } from "../../redux/actions/appState.actions";
import styles from './menuButton.module.scss';

const MenuButton = () => {
    const dispatch = useDispatch();

    const menuIsOpen = useRedux((state)=>state.appState.sideBarIsVisible)
        
    const handleClick = () => {
        dispatch(setSidebarIsOpen(true))
    }

    return !menuIsOpen ? (
        <div className={styles['menuButton']} onClick={handleClick}>
            <MenuIcon />
        </div>
    ) : null
}

export default MenuButton;