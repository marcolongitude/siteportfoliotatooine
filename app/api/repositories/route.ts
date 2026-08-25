import { NextResponse } from 'next/server';
import { fetchGithubRepos } from '@/shared/api/github';

export async function GET() {
  const result = await fetchGithubRepos();

  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: 502 });
  }

  return NextResponse.json({ repositories: result.data });
}
