# instructs Docker to use a lightweight Linux distribution with Node.js version 18 installed. 
FROM node:18-alpine  

# sets the working directory inside the container to /app.
WORKDIR /app

# copies the package.json file into the working directory.
COPY package*.json ./

# installs all the dependencies for your project.
RUN npm install

# copies all the files from the current directory into the working directory of the container. 
COPY . .

# exposes port 3000 from the container to the local network.
EXPOSE 3000

CMD npm run dev

# docker build -t datadigger_docker:dev .
# docker run --publish 3000:3000 datadigger_docker:dev
