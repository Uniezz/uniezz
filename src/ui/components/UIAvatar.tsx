import { VariantProps } from 'class-variance-authority';
import { uiavatar, uiavatarstatus, uiavatartext } from '../styles';

type UIAvatarProps = Omit<VariantProps<typeof uiavatar>, 'withImage'> & {
  imgSrc?: string;
  avatarSymbols?: string;
  isOnline?: boolean;
};

export const UIAvatar = ({ imgSrc, size, avatarSymbols, isOnline = true }: UIAvatarProps) => {
  const withImage = Boolean(imgSrc);

  return (
    <div className="relative inline-block">
      <div className={uiavatar({ size, withImage })}>
        {withImage ? (
          <img src={imgSrc} alt="" className="h-full w-full object-cover" />
        ) : avatarSymbols ? (
          <p className={uiavatartext({ size })}>{avatarSymbols}</p>
        ) : null}
      </div>
      {isOnline && <div className={uiavatarstatus({ size })} />}
    </div>
  );
};
