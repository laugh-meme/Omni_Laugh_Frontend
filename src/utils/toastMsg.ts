import { toast, Slide ,type ToastOptions } from "react-toastify"

export const showError = (msg : object | string, options: ToastOptions = {}) => {
    toast.error(`Error : ${msg}`, {
        position: options.position || "top-right",
        autoClose: options.autoClose || 3000,
        hideProgressBar: options.hideProgressBar || false,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        draggable: options.draggable || true,
        progress: options.progress || undefined,
        theme: "dark",
        transition: options.transition || Slide,
        ...options
    });
}

export const showWarning = (msg : object | string, options: ToastOptions = {}) => {
    toast.warn(`${msg}`, {
        position: options.position || "top-right",
        autoClose: options.autoClose || 3000,
        hideProgressBar: options.hideProgressBar || false,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        draggable: options.draggable || true,
        progress: options.progress || undefined,
        theme: "dark",
        transition: options.transition || Slide,
        ...options
    });
}

export const showSuccess = (msg : object | string, options: ToastOptions = {}) => {
    toast.success(`${msg}`, {
        position: options.position || "top-right",
        autoClose: options.autoClose || 3000,
        hideProgressBar: options.hideProgressBar || false,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        draggable: options.draggable || true,
        progress: options.progress || undefined,
        theme: "dark",
        transition: options.transition || Slide,
        ...options
    });
}

export const showInfo = (msg : object | string, options: ToastOptions = {}) => {
    toast.info(`${msg}`, {
        position: options.position || "top-right",
        autoClose: options.autoClose || 3000,
        hideProgressBar: options.hideProgressBar || false,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        draggable: options.draggable || true,
        progress: options.progress || undefined,
        theme: "dark",
        transition: options.transition || Slide,
        ...options
    });
}

export const showDefault = (msg : object | string, options: ToastOptions = {}) => {
    toast(`${msg}`, {
        position: options.position || "top-right",
        autoClose: options.autoClose || 3000,
        hideProgressBar: options.hideProgressBar || false,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        draggable: options.draggable || true,
        progress: options.progress || undefined,
        theme: "dark",
        transition: options.transition || Slide,
        ...options
    });
}