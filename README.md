# Node Sonar Qube

This repository was created to present a basic scaffolding of a node.js project that includes docker and sonar qube, using sonar-scanner.

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

Run this command:

```sh
docker-compose -f docker-compose.sonar.yml up -d
```

