import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { leftIconButton, uibutton } from '../styles/uibutton';
import { VariantProps } from 'class-variance-authority';
import { type LucideIcon } from 'lucide-react';

type UIButtonProps = VariantProps<typeof uibutton> &
  VariantProps<typeof leftIconButton> & {
    onClick?: () => void | Promise<void>;
    navigateTo?: string;
    children: ReactNode;
    disabled?: boolean;
    leftIcon?: LucideIcon;
  };

export const UIButton = ({
  children,
  onClick,
  navigateTo,
  size,
  bg,
  leftIcon: LeftIcon,
  disabled = false,
  leftIconButtonColor,
}: UIButtonProps) => {
  if (navigateTo) {
    return (
      <Link disabled={disabled} className={uibutton({ size, bg, disabled })} to={navigateTo}>
        {LeftIcon ? <LeftIcon color={leftIconButton({ leftIconButtonColor })} size={16} /> : null}
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={uibutton({ size, bg, disabled })} onClick={onClick}>
      {LeftIcon ? <LeftIcon color={leftIconButton({ leftIconButtonColor })} /> : null}
      {children}
    </button>
  );
};
