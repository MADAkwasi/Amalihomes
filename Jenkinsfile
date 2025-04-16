pipeline {

  agent any

  tools {nodejs "node22"}
  stages {

    stage('Install Dependencies'){
      steps{
        script {
          sh "npm install"
        }
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
          sh "npm run build-env"
          sh "npm run test:ci"
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
