import { type VariantProps } from 'class-variance-authority';
import { type LucideIcon } from 'lucide-react';
import { type ComponentProps } from 'react';
import { cn } from '../../cn';
import { UIText } from '../UIText';
import { cardStyles } from './variants';

type UICardProps = VariantProps<typeof cardStyles> &
  ComponentProps<'div'> & {
    headerLeftIcon: LucideIcon;
    headerText: string;
    centerText: string;
    bottomText: string;
  };

export const UICard = ({
  headerLeftIcon: HeaderIcon,
  headerText,
  centerText,
  bottomText,
  type,
  className,
  ...props
}: UICardProps) => {
  return (
    <div className={cn(cardStyles({ type }), className)} {...props}>
      <div className="flex items-center gap-2">
        <HeaderIcon size={15} className="text-secondary" />
        <UIText color="secondary" size="sm" weight="semibold">
          {headerText}
        </UIText>
      </div>
      <UIText weight="bold" size="xl">
        {centerText}
      </UIText>
      <UIText color="secondary" size="xs">
        {bottomText}
      </UIText>
    </div>
  );
};
