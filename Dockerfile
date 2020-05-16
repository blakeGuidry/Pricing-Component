# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12.14-alpine

#A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR '/pricing-component'

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install


# Copies everything over to Docker environment
COPY . .

RUN npm run dev

# Uses port which is used by the actual application
EXPOSE 9003

# Finally runs the application may need to change to "npm", "run", "start:server"
CMD [ "node", "server/server.js" ]

