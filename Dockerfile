FROM node:18-bullseye as dev

WORKDIR /app

EXPOSE 3000

CMD ["npm", "run", "dev"]
