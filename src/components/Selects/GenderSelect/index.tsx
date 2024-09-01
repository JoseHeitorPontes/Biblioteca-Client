import { Props } from "react-select";

import { genderOptions } from "@/utils/options/genderOptions";

import { Select } from "../Select";

export function GenderSelect({ ...rest }: Props) {
  return <Select options={genderOptions} {...rest} />;
}
