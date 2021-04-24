const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.login':'b4fc53ae566321df2bcf3f3532dc2819409c73cb',
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
