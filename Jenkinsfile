pipeline {

  agent any

  tools {nodejs "node22"}
  stages {

    stage('Install Dependencies'){
      steps{
          withCredentials([file(credentialsId: 'titans-env', variable: 'ENV_FILE')]) {
            sh "cp $ENV_FILE .env"}
            sh "npm install"
              
      }
    }
    stage('Run Lint'){
      steps{
        script {
          sh "npm run lint"
        }
      }
    }
    stage('Check Prettier'){
      steps{
        script {
          sh "npm run format:check"
        }
      }
    }


   stage("Run Tests"){
      steps{
        script {
          sh "npm run test:coverage"
        }
      }
    } 
    
    stage('Sonar Analysis'){
      steps{
        withSonarQubeEnv('SonarQube'){
          script {
            def scannerHome = tool 'SonarScanner';
            sh "${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }

  }
  post {
    always {
      cleanWs()
    }
    success {
      script{
         echo "Successful"
      }
    }
    
    failure {
      script{
         echo "Build failed"
      }
    }
  }
}