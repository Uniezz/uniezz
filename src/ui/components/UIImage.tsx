import { VariantProps } from 'class-variance-authority';
import { uiimage } from '../styles';
import { Image, Loader } from 'lucide-react';
import { UIText } from './UIText';

type UIImageProps = VariantProps<typeof uiimage> & {
  imageSrc?: string;
  isLoading?: boolean;
};

export const UIImage = ({ imageSrc, aspect, isLoading }: UIImageProps) => {
  return (
    <div
      className={uiimage({
        aspect,
        className: 'border-white-ternary bg-ice flex items-center justify-center border',
      })}
    >
      {isLoading ? (
        <Loader className="text-gray-400" />
      ) : imageSrc ? (
        <img src={imageSrc} className={uiimage({ aspect })} />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image size={24} className="text-secondary" />
          <UIText color={'secondary'} size={'xs'}>
            No image
          </UIText>
        </div>
      )}
    </div>
  );
};
