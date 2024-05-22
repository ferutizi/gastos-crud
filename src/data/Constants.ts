import dotenv from 'dotenv'
dotenv.config()

export const USER = {
  USER: process.env.USER
}
export const PASSWORD = {
  PASSWORD: process.env.PASSWORD
}
export const PORT = {
  PORT: Number(process.env.PORT)
}