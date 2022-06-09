import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Toast {
  showError(message: string, options: Record<string, any>) {
    toast.error(message, options);
  }
  showInfo(message: string, options: Record<string, any>) {
    toast.info(message, options);
  }
}
