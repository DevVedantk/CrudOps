FROM node:22

WORKDIR /app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY . .

ENV DATABASE_URL=postgresql://scaling_owner:npg_VxDG3kYt0hSE@ep-tight-hill-a56gfcsz-pooler.us-east-2.aws.neon.tech/scaling?sslmode=require

EXPOSE 3000

CMD [ "npm","run","dev"]