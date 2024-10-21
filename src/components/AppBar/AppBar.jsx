import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/contacts" className={styles.link}>
              Contacts
            </NavLink>

            <div className={styles.greeting}>
              <span>
                Welcome, {user?.name || "User"}!
              </span>
              <button onClick={handleLogout} className={styles.button}>
                Logout
              </button>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <>
            <NavLink to="/login" className={styles.link}>
              Login
            </NavLink>
            <NavLink to="/register" className={styles.link}>
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}