import { Notification } from "../helpers/Notification/Notification";

export function authMiddleware(requestConfig) {
    const token = localStorage.getItem('token');

    if (token) {
        requestConfig.headers.Authorization = `Bearer ${token}`;
    } else {
      //  Notification('error','Por favor inicie sesión para continuar','top-end',3000);
  alert('Error de sesison')
    }

    return requestConfig;
}
