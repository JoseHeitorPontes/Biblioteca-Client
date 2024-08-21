import ReactSelect, { Props } from "react-select";

export function Select({ ...rest }: Props) {
  return (
    <ReactSelect
      placeholder="Selecione..."
      noOptionsMessage={() => "Sem opções"}
      components={{
        IndicatorSeparator: null,
      }}
      {...rest}
    />
  );
}
