import { cva } from 'class-variance-authority';

export const textStyles = cva('', {
  variants: {
    size: {
      xs: 'text-caption',
      sm: 'text-sm',
      regular: 'text-regular',
      md: 'text-md',
      xl: 'text-xl',
      xxl: 'text-xxl',
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
      error: 'text-danger',
    },
  },
  defaultVariants: {
    size: 'regular',
    weight: 'regular',
    color: 'primary',
  },
});
