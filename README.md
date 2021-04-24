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

### Configuration:
Later the container has been created, go to http://localhost:9000/account/security/ and create the new token, copy the value
and put in the next file **sonar-project.js**.

```js
const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.login':'xxxxxxxxxxxx', //<----- Paste the security token, replace the x.
            'sonar.sources':  'src',
            'sonar.tests':  'src',
            'sonar.projectName': 'Servicio de prueba',
            'sonar.projectDescription': 'Microservicio de prueba',            
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
        }
    }, () => {});
```

### Code analysis:
Make a git clone of this repository, and run the next commands.

```yml
npm install
npm run sonar 
```

### CODE SMELL:
Sonar qube follow a list of 140 rules of javascript programming, to find code lines to improve.
To see the rules, go to this link: http://localhost:9000/coding_rules?languages=js&types=CODE_SMELL

The sonar qube source analysis is **sonar source**:
https://docs.sonarqube.org/latest/analysis/external-issues/

- **JS code smells**: https://rules.sonarsource.com/javascript/type/Code%20Smell
- **JS BUG**: https://rules.sonarsource.com/javascript/type/Bug
