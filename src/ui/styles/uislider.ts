import { cva } from 'class-variance-authority';

export const uislider = cva(
  `
    h-1
    w-full
    appearance-none
    rounded-full
    outline-none

    [&::-webkit-slider-runnable-track]:h-1
    [&::-webkit-slider-runnable-track]:rounded-full
    [&::-webkit-slider-runnable-track]:bg-transparent

    [&::-webkit-slider-thumb]:-mt-1.5
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:border-3
    [&::-webkit-slider-thumb]:border-blue-light
    [&::-webkit-slider-thumb]:bg-white-primary

    [&::-moz-range-track]:h-2
    [&::-moz-range-track]:rounded-full
    [&::-moz-range-track]:bg-transparent

    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:border-4
    [&::-moz-range-thumb]:border-blue-light
    [&::-moz-range-thumb]:bg-white-primary
  `,
  {
    variants: {
      disabled: {
        true: `
          cursor-not-allowed
          opacity-60

          [&::-webkit-slider-thumb]:cursor-not-allowed
          [&::-moz-range-thumb]:cursor-not-allowed
        `,
        false: 'cursor-pointer',
      },
    },

    defaultVariants: {
      disabled: false,
    },
  },
);
