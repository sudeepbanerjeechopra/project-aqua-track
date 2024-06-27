import * as Yup from "yup";
import { passwordRegex } from "../../helpers/constants";

export const resetSchema = Yup.object().shape({
    password: Yup.string()
        .matches(
            passwordRegex,
            "Password must be at least 6 characters long, include one uppercase letter, one number, and one special character"
        )
        .required("Required"),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Required")
});