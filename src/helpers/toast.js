import { toast } from "react-toastify";

const defaultOptions = {
  delay: 100,
};

export const toastSuccess = (content, options = {}) => {
  return toast(content, {
    ...defaultOptions,
    autoClose: 10000,
    ...options,
    type: "success",
  });
};

export const toastInfo = (content, options = {}) => {
  return toast(content, { ...defaultOptions, ...options, type: "info" });
};

export const toastWarning = (content, options = {}) => {
  return toast(content, { ...defaultOptions, ...options, type: "warning" });
};

export const toastError = (content, options = {}) => {
  return toast(content, { ...defaultOptions, ...options, type: "error" });
};
