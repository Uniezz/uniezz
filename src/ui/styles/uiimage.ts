import { cva } from 'class-variance-authority';

export const uiimage = cva('rounded-xl h-42.25', {
  variants: {
    aspect: {
      landscape: 'w-75 aspect-video',
      standard: 'w-56.25 aspect-4/3',
      square: 'w-42.25 aspect-square',
      portrait: 'w-31.75 aspect-3/4',
    },
  },
  defaultVariants: { aspect: 'landscape' },
});
