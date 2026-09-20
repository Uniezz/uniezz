import { UIText } from '@/ui/components';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="page">
      <UIText>Uniezz</UIText>
      <UIText>A platform for students of Lublin universities.</UIText>
      <Link className="button" to="/login">
        Sign in
      </Link>
      <UIText size={'xxl'} color={'secondary'}>
        Hello
      </UIText>
    </main>
  );
}
