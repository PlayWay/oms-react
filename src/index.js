import useDebounce from "./hooks/useDebounce";
import useHover from "./hooks/useHover";
import useInput from "./hooks/useInput";
import { useRequest } from "./hooks/useRequest";
import useScroll from "./hooks/useScroll";
import { appReducer } from "./store/app/appReducer";
import CustomModal from "./components/ui/CustomModal/CustomModal";
import ErrorAlert from "./components/ui/ErrorAlert/ErrorAlert.jsx";
import MessageAlert from "./components/ui/MessageAlert/MessageAlert";

export {
  ErrorAlert,
  CustomModal,
  MessageAlert,
  appReducer,
  //hooks
  useDebounce, useRequest, useScroll, useInput, useHover
};
