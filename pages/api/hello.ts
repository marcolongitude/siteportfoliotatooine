// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// export function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const getRepositoriesGithub = () => {
  const apikey = "Bearer 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"

  const response = fetch('https://api.github.com/user/repos', {
    headers: { Authorization: apikey }
  })
    .then(resp => resp.json())

  return response


}
