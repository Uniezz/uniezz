import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.75',
  {
    variants: {
      type: {
        warning: 'border-warning-soft bg-warning-soft',
        info: 'border-blue-soft bg-blue-soft',
        success: 'border-success-soft bg-success-soft',
        danger: 'border-danger-soft bg-danger-soft',
        counter: 'border-blue-light bg-blue-light',
        counterNegative: 'border-danger bg-danger',
        note: 'border-white-tertiary bg-ice',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

export const badgeTextStyles = cva('text-sm font-semibold', {
  variants: {
    color: {
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-blue',
      danger: 'text-danger',
      counter: 'text-white-primary',
      counterNegative: 'text-white-primary',
      note: 'text-secondary',
    },
  },
  defaultVariants: {
    color: 'info',
  },
});
