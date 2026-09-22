import { cva } from 'class-variance-authority';

export const uiInput = cva(
  'flex items-center gap-2 rounded-md border-[1.5px] px-2 py-1.5 focus-within:border-blue-light',
  {
    variants: {
      error: {
        true: 'border-danger',
        false: 'border-white-ternary',
      },
      disabled: {
        true: 'bg-ice',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
      disabled: false,
    },
  },
);
