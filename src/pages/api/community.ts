import { NextApiRequest, NextApiResponse } from 'next';
const { SiteClient } = require('datocms-client'); // eslint-disable-line

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Only POST request' });
  }

  const fullAccessToken = process.env.FULL_ACCESS_TOKEN;
  const client = new SiteClient(fullAccessToken);

  const { title, imgUrl, creatorSlug } = req.body;

  const community = await client.items.create({
    itemType: '972859',
    title,
    imgUrl,
    creatorSlug,
  });

  return res.status(200).json({ data: community });
}
