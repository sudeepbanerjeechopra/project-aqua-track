import * as Yup from "yup";
import { formatRegex } from "../../helpers/constants";

export const forgotSchema = Yup.object().shape({
    email: Yup.string()
        .matches(
            formatRegex,
            "Invalid email format"
        )
        .required("Required"),

});