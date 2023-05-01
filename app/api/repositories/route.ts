import { NextResponse } from 'next/server'

export async function GET() {
    // const apikey = "Bearer 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"
    const res = await fetch(
        'https://api.github.com/users/marcolongitude/repos?page1&per_page=100',
    )

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

    // console.log(data)

    return NextResponse.json({ repositories: data })
}