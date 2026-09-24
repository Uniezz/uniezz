import { type LucideIcon } from 'lucide-react';
import { UIText } from './UIText';
import { uicard } from '../styles';
import { VariantProps } from 'class-variance-authority';

type UICardProps = VariantProps<typeof uicard> & {
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
}: UICardProps) => {
  return (
    <div className={uicard({ type })}>
      <div className="flex items-center gap-2">
        <HeaderIcon size={15} className="text-secondary" />
        <UIText color={'secondary'} size={'sm'} weight={'semibold'}>
          {headerText}
        </UIText>
      </div>
      <UIText weight={'bold'} size={'xl'}>
        {centerText}
      </UIText>
      <UIText color={'secondary'} size={'xs'}>
        {bottomText}
      </UIText>
    </div>
  );
};
