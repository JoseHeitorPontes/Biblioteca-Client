import ReactSelect, { Props } from "react-select";

type ReactSelectProps = Props;

export function Select({ ...rest }: ReactSelectProps) {
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
