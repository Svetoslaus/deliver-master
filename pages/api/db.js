// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoDB from "@/utils/mongoDB"

export default function handler(req, res) {
  mongoDB.dbConnect();
  mongoDB.dbDisconnect();
  res.status(200).json({ name: 'Vasco da Gama' })
}
