import { UIButton, UIText } from '@/ui/components';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
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
    </main>
  );
}
