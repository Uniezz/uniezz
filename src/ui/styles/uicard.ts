import { cva } from 'class-variance-authority';

export const uicard = cva(
  'border-white-ternary flex h-26 max-w-67.5 flex-col rounded-2xl border p-4 ',
  {
    variants: {
      type: {
        violet: 'bg-radial-[ellipse_62.5%_85%_at_100%_0%,#2D419526_0%,#2D419500_100%]',
        green: 'bg-radial-[ellipse_62.5%_85%_at_100%_0%,#12A59426_0%,#12A59400_100%]',
        orange: 'bg-[radial-gradient(ellipse_62.5%_85%_at_100%_0%,#F0703A26_0%,#F0703A00_100%)]',
      },
    },
    defaultVariants: {
      type: 'violet',
    },
  },
);
