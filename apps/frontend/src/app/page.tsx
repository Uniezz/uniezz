import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="page">
      <h1>Uniezz</h1>
      <p className="lead">A platform for students of Lublin universities.</p>
      <Link className="button" href="/login">
        Sign in
      </Link>
    </main>
  );
}
