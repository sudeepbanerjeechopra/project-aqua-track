export const formatRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;

export const BASE_URL = 'https://aqua-track-api.onrender.com';

export const formValuesSignUp = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
};
export const formValuesSignIn = {
    email: '',
    password: '',
};
export const formValuesForgot = {
    email: '',
};
export const formValuesRenew = {
    password: '',
};

export const isValidLatinInput = /^[a-zA-Z]+$/