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