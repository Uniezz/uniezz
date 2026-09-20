import { cva } from 'class-variance-authority';

export const uitext = cva('font-jakarta', {
  variants: {
    size: {
      xs: 'text-[11px]',
      sm: 'text-[13px]',
      regular: 'text-[14px]',
      md: 'text-[18px]',
      xl: 'text-[24px]',
      xxl: 'text-[32px]',
    },
    weight: {
      regular: 'font-normal',
      bold: 'font-bold',
      semibold: 'font-semibold',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white-primary',
    },
  },
  defaultVariants: {
    size: 'regular',
    weight: 'regular',
    color: 'primary',
  },
});
