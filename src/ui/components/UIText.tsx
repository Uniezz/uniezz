import { VariantProps } from 'class-variance-authority';
import { uitext } from '../styles';

type UITextProps = VariantProps<typeof uitext> & {
  children: React.ReactNode;
};

export const UIText = ({ children, size, weight, color }: UITextProps) => {
  return <p className={uitext({ size, weight, color })}>{children}</p>;
};
