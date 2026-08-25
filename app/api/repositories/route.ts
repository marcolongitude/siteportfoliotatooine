import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    'https://api.github.com/users/marcolongitude/repos?per_page=100',
    {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {})
      },
      next: { revalidate: 3600 }
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Falha ao buscar repositórios' },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json({ repositories: data });
}
