import { Check } from 'lucide-react';
import { type ComponentProps } from 'react';
import { cn } from '../cn';

type UICheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'checked' | 'onChange'> & {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  isDisabled?: boolean;
};

export const UICheckbox = ({
  isDisabled,
  onCheckedChange,
  checked,
  className,
  id,
  ...props
}: UICheckboxProps) => {
  return (
    <label className={cn('inline-flex cursor-pointer items-center', className)}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={isDisabled}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className="peer sr-only"
        {...props}
      />

      <span className="flex h-5 w-5 items-center justify-center rounded border border-white-tertiary bg-white-primary text-white-primary peer-checked:border-blue-light peer-checked:bg-blue-light peer-focus-visible:ring-2 peer-focus-visible:ring-blue-light peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-60">
        <Check size={14} />
      </span>
    </label>
  );
};
