import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/login')({
  component: LoginPage,
});

function LoginPage() {
  return (
    <main className="page">
      <h1>Sign in</h1>
      <p className="lead">University authentication will be available here.</p>
    </main>
  );
}
