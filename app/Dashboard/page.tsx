import { cookies } from 'next/headers';

export default function Page() {
  const cookie = cookies().get('pb_auth');

  if (!cookie) throw new Error('Not logged in');

  const { model } = JSON.parse(cookie.value);

  return (
    <main>
      <p>This is the dashboard. Only logged-in users can view this route</p>
      <p>Logged-in user: </p>
      <pre>{JSON.stringify(model, null, 2)}</pre>
    </main>
  );
}