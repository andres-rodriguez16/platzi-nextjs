import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'
const db = new DB()
const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  const avocados = await db.getAll()
  res.end(JSON.stringify({ length: avocados.length, data: avocados }))
}

export default allAvos
