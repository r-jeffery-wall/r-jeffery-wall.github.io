import json from './settings.json'

export const host = json.prod ? 'https://rowanjefferywall.com' : 'http://localhost:8000'
