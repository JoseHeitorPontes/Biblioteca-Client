import * as Yup from "yup";
import dayjs from "dayjs";

const REQUIRED_MESSAGE = "Campo obrigatório";

function isValidDate(date: Date) {
    if (dayjs(date).isValid()) {
        return true;
    }

    return false;
}

export const studentSchema = Yup.object().shape({
    name: Yup.string().required(REQUIRED_MESSAGE),
    birthdate: Yup.date().required(REQUIRED_MESSAGE).max(new Date(), "A data de nascimento não deve ser maior que a data atual"),
    city: Yup.string().required(REQUIRED_MESSAGE),
    neighborhood: Yup.string().required(REQUIRED_MESSAGE),
    street: Yup.string().required(REQUIRED_MESSAGE),
    number: Yup.string().required(REQUIRED_MESSAGE),
    email: Yup.string().email("Email inválido").required(REQUIRED_MESSAGE),
    phone: Yup.string().required(REQUIRED_MESSAGE),
    classroom: Yup.string().required(REQUIRED_MESSAGE),
});