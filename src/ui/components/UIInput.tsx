import { ChangeEvent } from 'react';
import { UIText } from './UIText';
import { type LucideIcon } from 'lucide-react';
import { uiInput } from '../styles';

type UIInputProps = {
  isDisabled?: boolean;
  iconLeft?: LucideIcon;
  text: string;
  iconRight?: LucideIcon;
  errorText?: string;
  onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const UIInput = ({
  errorText,
  text,
  onTextChange,
  iconLeft: IconLeft,
  iconRight: IconRight,
  isDisabled,
  placeholder,
}: UIInputProps) => {
  const isErrorPresent = Boolean(errorText);

  return (
    <div className="flex flex-col gap-2">
      <div
        className={uiInput({
          error: isErrorPresent,
          disabled: isDisabled,
        })}
      >
        {IconLeft ? <IconLeft color="#8E99B8" size={18} /> : null}

        <input
          className={`min-w-0 flex-1 outline-none`}
          type="text"
          value={text}
          onChange={onTextChange}
          disabled={isDisabled}
          placeholder={placeholder}
        />

        {IconRight ? <IconRight color="#8E99B8" size={18} /> : null}
      </div>

      {isErrorPresent && (
        <div className="pl-2">
          <UIText color="error">{errorText}</UIText>
        </div>
      )}
    </div>
  );
};
