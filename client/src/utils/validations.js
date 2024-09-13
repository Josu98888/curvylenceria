export const validateEmail = (email) => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
          return 'Escriba un correo valido';
        }
        return null;
   };
   
   export const validatePassword = (password) => {
     if (password.length < 8) {
       return 'La contraseña debe tener al menos 8 caracteres';
     }
     return null;
   };
   
   export const validateUsername = (username) => {
     const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
     const regUserNameEmpty = username.trim() === '' ;
     if (!regUserName.test(username) || regUserNameEmpty) {
       return 'formato no valido en el campo nombre, solo letras.';
     }
     return null;
   };
   export const validateMessage = (message) => {
     const regMsgEmpty = message.trim() === '' ;
     if (regMsgEmpty) {
       return 'Escriba un mensaje.';
     }
     return null;
   };
