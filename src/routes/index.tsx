import { UIButton, UIInput, UIText } from '@/ui/components';
import { createFileRoute } from '@tanstack/react-router';
import { Info } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const [text, setText] = useState<string>('');
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <main className="page">
      <UIText>Uniezz</UIText>
      <UIText>A platform for students of Lublin universities.</UIText>
      <UIButton navigateTo="/login">Sign in</UIButton>
      <UIText size={'xxl'} color={'secondary'}>
        Hello
      </UIText>
      <UIButton bg={'ghost'} onClick={() => {}}>
        <UIText color={'primary'}>Hi</UIText>
        <UIText color={'primary'}>Hi</UIText>
      </UIButton>
      <UIInput
        placeholder="hi"
        iconLeft={Info}
        iconRight={Info}
        text={text}
        onTextChange={onChangeText}
      />
    </main>
  );
}
