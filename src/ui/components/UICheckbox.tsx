import { Check } from 'lucide-react';

type UICheckboxProps = {
  isDisabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  checked: boolean;
};

export const UICheckbox = ({ isDisabled, onCheckedChange, checked }: UICheckboxProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        disabled={isDisabled}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className="peer sr-only"
      />

      <span className="border-white-ternary bg-white-primary peer-checked:border-blue-light peer-checked:bg-blue-light flex h-5 w-5 items-center justify-center rounded border text-white peer-disabled:opacity-60">
        <Check size={14} />
      </span>
    </label>
  );
};
