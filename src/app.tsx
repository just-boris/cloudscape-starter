import Select from "@cloudscape-design/components/select";

interface EnumSelectProps<OptionType> {
  selectedOption: OptionType | null;
  options: Array<OptionType>;
  onChange: (newOption: OptionType) => void;
  getLabel: (option: OptionType) => string;
}

function EnumSelect<OptionType extends string>({
  selectedOption,
  options,
  onChange,
  getLabel,
}: EnumSelectProps<OptionType>) {
  return (
    <Select
      selectedOption={selectedOption && { value: selectedOption }}
      options={options.map((value) => ({ value, label: getLabel(value) }))}
      onChange={(event) => onChange(event.detail.selectedOption.value as OptionType)}
    />
  );
}
