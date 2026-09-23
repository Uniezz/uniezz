import { cva } from 'class-variance-authority';

export const uibadge = cva('inline-flex border items-center px-2.5 py-0.75 rounded-full gap-1.5', {
  variants: {
    type: {
      warning: 'bg-warning-soft border-warning-soft',
      info: 'bg-blue-soft border-blue-soft',
      success: 'bg-success-soft border-success-soft',
      danger: 'bg-danger-soft border-danger-soft',
      counter: 'bg-blue-light border-blue-light',
      counterNegative: 'bg-danger border-danger',
      note: 'bg-ice border-white-ternary',
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

export const uibadgetext = cva('font-jakarta text-[13px] font-semibold', {
  variants: {
    color: {
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-blue',
      danger: 'text-danger',
      counter: 'text-white',
      counterNegative: 'text-white',
      note: 'text-secondary',
    },
  },
  defaultVariants: {
    color: 'info',
  },
});
