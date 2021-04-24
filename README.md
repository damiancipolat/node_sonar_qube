# Node Sonar Qube

This repository was created to present a basic scaffolding of a node.js project that includes docker and sonar qube, using sonar-scanner, I'm following this article to create this project.

### Requirements:
- Node.js
- Docker
- Docker-compose

### Docker:
The project use the next docker-compose file **docker-compose.sonar.yml**.

```yml
version:  '3'
services:
    sonarqube:
        container_name:  sonarqube
        image:  sonarqube:latest
        ports:
            -  "9000:9000"
            -  "9092:9092"

```

Run this command, to install de sonar-quber server into a container.

```sh
docker-compose -f docker-compose.sonar.yml up -d
```

Open a browser and navigate to http://localhost:9000/ and complete the login with: **user**:admin **password**:admin.

### Code analysis:
Make a git clone of this repository, and run the next commands.

```yml
npm install
npm run sonar 
```
