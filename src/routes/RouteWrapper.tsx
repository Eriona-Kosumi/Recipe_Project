import { Navigate } from "react-router-dom";
import { useAuthContext } from "../lib/context/AuthContext/AuthContext";
import { RouteType } from "./Routes";

interface Props {
  routeType: RouteType;
  allowedRoles?: string[];
  children: any;
}

export const RouteWrapper = ({ routeType, children }: Props) => {
  const { isAuthenticated } = useAuthContext();

  // const userHasRequiredRole =
  //   user &&
  //   allowedRoles?.some((element) => {
  //     return user?.permissions.includes(element);
  //   });

  if (isAuthenticated && routeType === RouteType.GUEST) return <Navigate to="/" replace />;

  if (!isAuthenticated && routeType === RouteType.GUEST) return children;

  if (!isAuthenticated && routeType === RouteType.PRIVATE) {
    return <Navigate to="/" replace />;
  }

  return children;
};
