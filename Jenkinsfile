node {
    stage('Clone') {
        // Clone and checkout the main branch
        git 'https://github.com/is48-alt/quickmed.git'
    }

    stage('Install Backend Dependencies') {
        dir('backend') {
            sh 'npm install'
        }
    }

    stage('Run Tests') {
        echo 'No tests yet'
    }

    stage('Start Server') {
        dir('backend') {
            sh 'nohup npm start &'
        }
    }
}


