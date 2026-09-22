import { UIButton, UICheckbox, UIInput, UIText } from '@/ui/components';
import { createFileRoute } from '@tanstack/react-router';
import { Info, Map } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const [text, setText] = useState<string>('');
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(true);

  return (
    <main className="page">
      <UIText>Uniezz</UIText>
      <UIText>A platform for students of Lublin universities.</UIText>
      <UIButton leftIconButtonColor={'black'} leftIcon={Map} navigateTo="/login">
        Sign in
      </UIButton>
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
        onTextChange={setText}
      />
      <UICheckbox checked={checkBoxValue} onCheckedChange={setCheckBoxValue} />
    </main>
  );
}
