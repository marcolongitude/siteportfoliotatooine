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