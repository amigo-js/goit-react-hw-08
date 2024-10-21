import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function PrivateRoute({ component: Component }) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}
