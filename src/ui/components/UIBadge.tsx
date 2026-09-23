import { type LucideIcon } from 'lucide-react';
import { uibadge, uibadgetext } from '../styles';
import { VariantProps } from 'class-variance-authority';

type UIBadgeProps = VariantProps<typeof uibadge> & {
  text: string;
  leftIcon?: LucideIcon;
};

export const UIBadge = ({ text, leftIcon: LeftIcon, type }: UIBadgeProps) => {
  return (
    <div className={uibadge({ type })}>
      {LeftIcon ? <LeftIcon className={uibadgetext({ color: type })} size={16} /> : null}
      <p className={uibadgetext({ color: type })}>{text}</p>
    </div>
  );
};
