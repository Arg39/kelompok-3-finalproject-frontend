import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/slices/authSlice";

const LoadDataUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserData());
    }
  }, [dispatch]);

  return null;
};

export default LoadDataUser;
