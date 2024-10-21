import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { refreshUser } from "../redux/auth/operations";
import { fetchContacts } from "../redux/contacts/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import HomePage from "../pages/HomePage/HomePage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import Layout from "./Layout/Layout";
import Loader from "../components/Loader/Loader";

export default function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser()).then(() => {
      dispatch(fetchContacts());
    });
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={LoginPage} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute component={RegistrationPage} />}
        />
      </Route>
    </Routes>
  );
}
