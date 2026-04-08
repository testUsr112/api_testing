pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'call npm ci'
            }
        }

        stage('Run ESLint') {
            steps {
                bat 'call npm run lint'
            }
        }

        stage('Run Prettier') {
            steps {
                bat 'call npm run format:check'
            }
        }

        stage('Run tests') {
            steps {
                bat 'call npm test'
            }
        }
    }

    post {
        success {
            echo 'Lint pipeline finished successfully.'
        }
        failure {
            echo 'Lint pipeline failed.'
        }
        always {
            always {
                archiveArtifacts artifacts: 'reports/**/*', allowEmptyArchive: true
                echo 'Pipeline finished.'
            }
        }
    }
}