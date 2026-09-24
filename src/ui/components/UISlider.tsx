import { type ComponentProps } from 'react';
import { cn } from '../cn';

type UISliderProps = Omit<
  ComponentProps<'input'>,
  'type' | 'value' | 'onChange' | 'min' | 'max' | 'step'
> & {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  isDisabled?: boolean;
};

export const UISlider = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  isDisabled = false,
  onValueChange,
  className,
  ...props
}: UISliderProps) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      disabled={isDisabled}
      onChange={(e) => onValueChange?.(Number(e.target.value))}
      className={cn(
        `h-1 appearance-none rounded-full outline-none enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-3 [&::-moz-range-thumb]:border-blue-light [&::-moz-range-thumb]:bg-white-primary disabled:[&::-moz-range-thumb]:cursor-not-allowed [&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-3 [&::-webkit-slider-thumb]:border-blue-light [&::-webkit-slider-thumb]:bg-white-primary disabled:[&::-webkit-slider-thumb]:cursor-not-allowed`,
        className,
      )}
      style={{
        background: `linear-gradient(
          to right,
          var(--color-blue-light) 0%,
          var(--color-blue-light) ${percentage}%,
          var(--color-white-tertiary) ${percentage}%,
          var(--color-white-tertiary) 100%
        )`,
      }}
      {...props}
    />
  );
};
