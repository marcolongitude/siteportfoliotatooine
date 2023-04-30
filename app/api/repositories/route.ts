import { NextResponse } from 'next/server'

export async function GET() {
    const apikey = "Bearer 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"
    const res = await fetch(
        'https://api.github.com/user/repos?page=1&per_page=100',
        { headers: { Authorization: apikey } }
    )

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

    // console.log(data)

    return NextResponse.json({ repositories: data })
}