import { cva } from 'class-variance-authority';

export const cardStyles = cva(
  'flex h-26 max-w-67.5 flex-col rounded-2xl border border-white-tertiary p-4',
  {
    variants: {
      type: {
        violet:
          'bg-[radial-gradient(ellipse_62.5%_85%_at_100%_0%,color-mix(in_srgb,var(--color-blue-light)_15%,transparent)_0%,transparent_100%)]',
        green:
          'bg-[radial-gradient(ellipse_62.5%_85%_at_100%_0%,color-mix(in_srgb,var(--color-teal)_15%,transparent)_0%,transparent_100%)]',
        orange:
          'bg-[radial-gradient(ellipse_62.5%_85%_at_100%_0%,color-mix(in_srgb,var(--color-ember)_15%,transparent)_0%,transparent_100%)]',
      },
    },
    defaultVariants: {
      type: 'violet',
    },
  },
);
