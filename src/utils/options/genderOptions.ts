import { Gender, GenderMessages } from "@/enums/Gender";

export const genderOptions: Option[] = [
  {
    value: Gender.Male,
    label: GenderMessages[Gender.Male],
  },
  {
    value: Gender.Female,
    label: GenderMessages[Gender.Female],
  },
];
