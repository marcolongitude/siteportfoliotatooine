import { NextResponse } from 'next/server'

export async function GET() {
    const apikey = "Bearer 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"
    const res = await fetch(
        'https://api.github.com/user/repos?page=100&per_page=100',
        { headers: { Authorization: apikey } }
    )
    const data = await res.json();

    // console.log(data)

    return NextResponse.json({ repositories: data })
}