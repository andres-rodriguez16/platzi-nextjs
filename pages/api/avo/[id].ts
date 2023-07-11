import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
const db = new DB()
const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id
  const avocado = await db.getById(id as string)
  res.status(200).json(avocado)
}

export default allAvos
