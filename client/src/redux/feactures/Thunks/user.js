import Global from "../../../utils/Global_URL";
import axios from "axios";

import { Notification } from "../../../helpers/Notification/Notification";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { Firebase, DB } from "../../../utils/credentials";

//==========FIRESTORE====================
//==========FIRESTORE====================
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth(Firebase);
import { setCurrentUser, setLogged, setRegister } from "../Slices/user";

//====================================================================
//====================================================================
//====================================================================
//====================================================================
//====================================================================

/* 

TODO:============ CHECK STTATE  OF FIREBASE

Este es un thunk para verificar el 
estado de autenticación al inicio de la aplicación

*/

export const checkAuthState = () => (dispatch) => {
  // const auth = getAuth(Firebase);
  const stated = onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log("estado del user loguedd:\n", user);
      dispatch(setCurrentUser(JSON.stringify(user)));
      dispatch(setLogged(true));
      /*  dispatch(setRegister(null)); */
    } else {
      dispatch(setCurrentUser(null));
      dispatch(setLogged(null));
      /* 
      NOTE: ACA SETEO EL VALOR DEL REGISTER EN NULL
      */
      dispatch(setRegister(null));
    }
  });
  return stated;
};

/* 

======setRegister=================


*/

export const setRegisterThunk = () => async (dispatch) => {
  try {
    await dispatch(setRegister(null));
    console.log("ejcuto el setRegister");
  } catch (error) {
    console.log({ message: error.message });
  }
};

/* 

TODO:====================LOGIN=============================

*/
export const LoginUser = ({ email, password }) => async (dispatch) => {
  try {
    // Verificar si el usuario existe antes de intentar iniciar sesión
    /*    const signInMethods = await fetchSignInMethodsForEmail(
      auth,
      email,
      password
    );

    if (signInMethods.length === 0) {
      // No hay métodos de inicio de sesión asociados con este correo electrónico
      console.log(signInMethods);
      alert("El usuario no existe");
      return;
    } */

    // Intentar iniciar sesión con el correo electrónico y la contraseña
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    //console.log("user", user);

    if (user) {
      dispatch(setLogged(true));
      dispatch(setCurrentUser(JSON.stringify(user)));
      Notification(
        "success",
        "Ha iniciado session con exito",
        "bottom-end",
        2000
      );
    }

    /*     setTimeout(() => {
      dispatch(setLogged(true));
    }, 3000); */
  } catch (error) {
    // Manejar errores al iniciar sesión
    switch (error.code) {
      case "auth/invalid-credential":
        Notification(
          "error",
          "credenciales invalidas verifique correo /contraseña",
          "bottom-end",
          5000
        );
        break;
      default:
        Notification(
          "error",
          `Error al iniciar Session ${error}`,
          "bottom-end",
          5000
        ); //envio una notificacion con sweetAlert2
        break;
    }
  }
};

/* 

TODO:====================REGISTER=============================

*/
export const RegisterUser = ({
  email,
  password,
  name,
  lastName,
  cuil,
  shippingAddress,
}) => async (dispatch) => {
  try {
    /*     console.log(
      "thunk\n",
      email,
      name,
      lastName,
      password,
      cuil,
      shippingAddress
    ); */
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    const userID = user.uid; // Obtenemos el UID del usuario recién creado

    // Guarda los datos adicionales del usuario en Firestore
    const userRef = doc(DB, "Users", userID); // Referencia al documento del usuario
    await setDoc(userRef, {
      uid: userID, // Guardamos el UID del usuario en Firestore
      name,
      lastName,
      cuil,
      email,
      address: shippingAddress,
    });

    await dispatch(setRegister(true));

    Notification(
      "success",
      "Usuario registrado exitosamente",
      "bottom-end",
      2000
    );
  } catch (error) {
    const errorCode = error.code;
    if (errorCode === "auth/email-already-in-use") {
      // El correo electrónico ya está en uso
      // Mostrar un mensaje al usuario o realizar alguna acción necesaria

      Notification(
        "warning",
        `El correo electrónico ya está en uso.`,
        "bottom-end",
        3000
      ); //envio una notificacion con sweetAlert2
    } else {
      // Otro tipo de error, manejar según corresponda
      Notification(
        "error",
        `Error al registrar el usuario ${error}`,
        "bottom-end",
        3000
      ); //envio una notificacion con sweetAlert2
      console.error(error.message);
    }
  }
};

/* 

TODO:====================LOGOUT=============================

*/

// Thunk para cerrar sesión con Firebase
export const logoutUser = () => async (dispatch) => {
  //const auth = getAuth(); // Obtener la instancia de autenticación

  try {
    setTimeout(() => {
      signOut(auth); // Cerrar sesión con Firebase

      dispatch(setCurrentUser(null)); // Establecer el usuario actual como null
      dispatch(setLogged(false)); // Marcar al usuario como no autenticado
    }, 2000);
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    Notification("error", `Error al cerrar sesión`, "bottom-end", 3000);
  }
};

/*
  
TODO:================inicio de Session con google=============

*/
export const signInWithGoogle = () => async (dispatch) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    const objectUserByGoogle = {
      accessToken: user.accessToken,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      //metadata: JSON.stringify(user.metadata),
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
    };

    console.log(objectUserByGoogle);
    dispatch(setCurrentUser(objectUserByGoogle)); // No es necesario convertir el usuario a JSON
    dispatch(setLogged(true));
    Notification(
      "success",
      `¡Inicio de sesión exitoso para ${user.displayName}!`,
      "bottom-end",
      3000
    );
  } catch (error) {
    console.error("Error al iniciar sesión:", error.code, error.message);
    Notification(
      "error",
      `Error al iniciar sesión: ${error.message}`,
      "bottom-end",
      3000
    );
  }
};

/* 
TODO:============sign In con Face==========================
FIXME: AUN SE DEBE VER PORQUE TIRA EEEROR CON LA CONFIGURACION DE FACEBOOK DEVELOPER

*/
export const signInWithFacebook = () => async (dispatch) => {
  const provider = new FacebookAuthProvider();

  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    console.log(user);
    // dispatch(setCurrentUser(JSON.stringify(user))); // No es necesario convertir el usuario a JSON
    // dispatch(setLogged(true));
    /*   Notification(
      "success",
      `¡Inicio de sesión exitoso para ${"ariel"}!`,
      "bottom-end",
      3000
    ); */
  } catch (error) {
    console.error("Error al iniciar sesión:", error.code, error.message);
    Notification(
      "error",
      `Error al iniciar sesión: ${(error.code, error.message)}`,
      "bottom-end",
      3000
    );
  }

  /*
  
  TODO: FOR PROMISE
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful login
      const user = result.user;
      console.log(user);
      dispatch(setCurrentUser(JSON.stringify(user))); // No es necesario convertir el usuario a JSON
      dispatch(setLogged(true));
      Notification(
        "success",
        `¡Inicio de sesión exitoso para ${"ariel"}!`,
        "bottom-end",
        3000
      );
    })
    .catch((error) => {
      // Handle errors

      console.error("Error al iniciar sesión:", error.code, error.message);
      Notification(
        "error",
        `Error al iniciar sesión: ${error.message}`,
        "bottom-end",
        3000
      );
    }); */
};
