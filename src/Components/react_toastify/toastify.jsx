import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const successToastify = (message) => {
  return toast.success(message, {
    position: "top-center",
    delay: 7000,
    hideProgressBar: true,
  });
};

export const errorToastify = (message) => {
  return toast.error(message, {
    position: "top-center",
    delay: 7000,
    hideProgressBar: true,
  });
};