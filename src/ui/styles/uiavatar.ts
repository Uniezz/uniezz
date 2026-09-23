import { cva } from 'class-variance-authority';

export const uiavatar = cva(' rounded-full overflow-hidden flex justify-center items-center', {
  variants: {
    size: {
      sm: 'w-7 h-7',
      md: 'w-9 h-9',
      regular: 'w-11 h-11',
      lg: 'w-14 h-14',
    },
    withImage: {
      false: 'bg-blue',
      true: '',
    },
  },
  defaultVariants: {
    size: 'regular',
    withImage: false,
  },
});

export const uiavatartext = cva('font-jakarta font-bold text-ice', {
  variants: {
    size: {
      sm: 'text-[11px]',
      md: 'text-[13px]',
      regular: 'text-[16px]',
      lg: 'text-[20px]',
    },
  },
  defaultVariants: { size: 'regular' },
});

export const uiavatarstatus = cva('absolute rounded-full bg-green-500', {
  variants: {
    size: {
      sm: 'right-0.5 bottom-0.5 w-1.5 h-1.5',
      md: 'right-1 bottom-1 w-2 h-2',
      regular: 'right-1 bottom-1 w-2.5 h-2.5',
      lg: 'right-1 bottom-1 w-3 h-3',
    },
  },
  defaultVariants: {
    size: 'regular',
  },
});
