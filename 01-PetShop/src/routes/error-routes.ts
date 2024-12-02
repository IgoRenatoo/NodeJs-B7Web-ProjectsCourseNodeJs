import { ErrorRequestHandler, RequestHandler } from 'express'

export const notFoundRequest: RequestHandler = (req, res) => {
  res.status(404).json({ Error: 'Página não encontrada!' })
}
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err)
  res.status(500).json({ Error: 'Não foi possível carregar a página, tente novamente!' })
}
