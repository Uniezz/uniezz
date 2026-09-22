import { uislider } from '../styles';

type UISliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  isDisabled?: boolean;
  onValueChange?: (value: number) => void;
};

export const UISlider = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  isDisabled = false,
  onValueChange,
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
      className={uislider({
        disabled: isDisabled,
      })}
      style={{
        background: `linear-gradient(
                to right,
                #2d4195 0%,
                #2d4195 ${percentage}%,
                #e5e7eb ${percentage}%,
                #e5e7eb 100%
              )`,
      }}
    />
  );
};
