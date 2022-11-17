FROM node:12-alpine
WORKDIR /usr/code
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
RUN npm install express --no-save
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
