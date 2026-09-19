import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="page">
      <h1>Uniezz</h1>
      <p className="lead">A platform for students of Lublin universities.</p>
      <Link className="button" to="/login">
        Sign in
      </Link>
    </main>
  );
}
