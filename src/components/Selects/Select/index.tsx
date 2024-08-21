import ReactProps, { Props } from "react-select";

type ReactSelectProps = Props;

export function Select({ ...rest }: ReactSelectProps) {
  return (
    <Select
      placeholder="Selecione..."
      noOptionsMessage={() => "Sem opções"}
      components={{
        IndicatorSeparator: null,
      }}
      {...rest}
    />
  );
}
