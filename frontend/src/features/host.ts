import { env } from 'process'

export const host = env.prod ? 'https://api.rowanjefferywall.com' : 'localhost:8000'
