import { UIText } from '@/ui/components';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/login')({
  component: LoginPage,
});

function LoginPage() {
  return (
    <main className="page">
      <UIText>Sign in</UIText>
      <UIText>University authentication will be available here.</UIText>
    </main>
  );
}
