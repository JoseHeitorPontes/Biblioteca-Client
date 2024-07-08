import Select, { Props } from "react-select";

type ReactSelectProps = Props;

export function ReactSelect({
    ...rest
}: ReactSelectProps) {
    return (
        <Select
            placeholder="Selecione..."
            noOptionsMessage={() => "Sem opções"}
            components={{
                IndicatorSeparator: null
            }}
            {...rest}
        />
    );
}