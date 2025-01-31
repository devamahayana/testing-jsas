import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("Form Data Received:", req.body);
    return res.status(200).json({ message: "Form submitted successfully!" });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
