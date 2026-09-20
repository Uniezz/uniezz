import { cva } from 'class-variance-authority';

export const uibutton = cva('inline-flex gap-2 items-center justify-center rounded-lg', {
  variants: {
    size: {
      sm: 'py-1.75 px-3.5',
      md: 'py-2.5 px-4.5',
      lg: 'py-3.25 px-6',
    },
    bg: {
      primary:
        'bg-blue-light border border-blue-light enabled:hover:bg-blue enabled:hover:border-blue',

      secondary:
        'bg-white-primary border border-white-ternary enabled:hover:bg-white-secondary enabled:hover:border-white-ternary',

      ghost:
        'bg-white-primary border border-white enabled:hover:bg-accent-soft enabled:hover:border-accent-soft',

      danger:
        'bg-danger border border-danger enabled:hover:bg-[#A62B3F] enabled:hover:border-[#A62B3F]',
    },
    disabled: {
      true: 'opacity-60',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    bg: 'primary',
    disabled: false,
  },
});
