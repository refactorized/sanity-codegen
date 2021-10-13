import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {hash, slug} = req.query as {hash: string; slug: string};
  res.setPreviewData({});
  res.redirect(`/${slug}`);
};
