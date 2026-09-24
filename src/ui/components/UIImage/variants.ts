import { cva } from 'class-variance-authority';

export const imageStyles = cva('h-42.25 rounded-xl', {
  variants: {
    aspect: {
      landscape: 'aspect-video w-75',
      standard: 'aspect-4/3 w-56.25',
      square: 'aspect-square w-42.25',
      portrait: 'aspect-3/4 w-31.75',
    },
  },
  defaultVariants: { aspect: 'landscape' },
});
