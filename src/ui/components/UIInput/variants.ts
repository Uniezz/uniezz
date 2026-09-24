import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  'flex items-center gap-2 rounded-md border-[1.5px] px-2 py-1.5 focus-within:border-blue-light has-disabled:bg-ice',
  {
    variants: {
      error: {
        true: 'border-danger',
        false: 'border-white-tertiary',
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);
