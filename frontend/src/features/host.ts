import json from './settings.json'

export const host = json.prod ? 'https://www.rowanjefferywall.com' : 'http://localhost:8000'
