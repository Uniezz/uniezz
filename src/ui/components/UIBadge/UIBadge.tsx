import { type VariantProps } from 'class-variance-authority';
import { type LucideIcon } from 'lucide-react';
import { type ComponentProps } from 'react';
import { cn } from '../../cn';
import { badgeStyles, badgeTextStyles } from './variants';

type UIBadgeProps = VariantProps<typeof badgeStyles> &
  ComponentProps<'div'> & {
    text: string;
    leftIcon?: LucideIcon;
  };

export const UIBadge = ({ text, leftIcon: LeftIcon, type, className, ...props }: UIBadgeProps) => {
  return (
    <div className={cn(badgeStyles({ type }), className)} {...props}>
      {LeftIcon ? <LeftIcon className={badgeTextStyles({ color: type })} size={16} /> : null}
      <span className={badgeTextStyles({ color: type })}>{text}</span>
    </div>
  );
};
