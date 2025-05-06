pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/quickmed.git'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'No tests yet, just simulating...'
            }
        }

        stage('Deploy') {
            steps {
                dir('backend') {
                    sh 'nohup npm start &'
                }
                echo 'App deployed. Open frontend/index.html in browser.'
            }
        }
    }
}

