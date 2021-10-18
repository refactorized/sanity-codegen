import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {slug} = req.query as {slug?: string[]};
  res.setPreviewData({});
  res.redirect(`/${(slug || []).join('/')}`);
};
