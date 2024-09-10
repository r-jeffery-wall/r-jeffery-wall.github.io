FROM node:18-alpine

WORKDIR /frontend

COPY . .
COPY ./src/features/prod-settings.json ./src/features/settings.json

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
