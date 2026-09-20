import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { uibutton } from '../styles/uibutton';
import { VariantProps } from 'class-variance-authority';

type UIButtonProps = VariantProps<typeof uibutton> & {
  onClick?: () => void | Promise<void>;
  navigateTo?: string;
  children: ReactNode;
  disabled?: boolean;
};

export const UIButton = ({
  children,
  onClick,
  navigateTo,
  size,
  bg,
  disabled = false,
}: UIButtonProps) => {
  if (navigateTo) {
    return (
      <Link disabled={disabled} className={uibutton({ size, bg, disabled })} to={navigateTo}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={uibutton({ size, bg, disabled })} onClick={onClick}>
      {children}
    </button>
  );
};
