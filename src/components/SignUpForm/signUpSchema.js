import * as Yup from "yup";
import { formatRegex, passwordRegex } from "../../helpers/constants";

export const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
        .matches(
            formatRegex,
            "Invalid email format"
        )
        .required("Required"),
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