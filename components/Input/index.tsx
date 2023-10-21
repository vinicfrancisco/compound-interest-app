import {
  Input as TamaguiInput,
  InputProps as TamaguiInputProps,
} from "tamagui";

interface InputProps extends TamaguiInputProps {
  format?: (value: string) => string;
}

export default function Input({ format, onChangeText, ...props }: InputProps) {
  const handleChange = (text: string) => {
    if (format) {
      return onChangeText?.(format(text));
    }

    return onChangeText?.(text);
  };

  return <TamaguiInput size="$5" onChangeText={handleChange} {...props} />;
}
