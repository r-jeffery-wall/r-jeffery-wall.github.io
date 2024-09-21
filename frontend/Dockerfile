FROM node:18-alpine

WORKDIR /frontend

COPY . .
COPY ./src/features/prod-settings.json ./src/features/settings.json

RUN npm install

CMD ["npm", "run", "build"]
