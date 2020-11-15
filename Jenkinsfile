pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				checkout scm
				sh "npm install"
			}
		}
		stage('Test') {
			steps {
				script {
                    sh 'npm test'
					//other configurations 
					}
				}
				publishHTML(
				[allowMissing: false,
				alwaysLinkToLastBuild: true,
				keepAll: true,
				reportDir: 'html-results/report',
				reportFiles: 'index.html',
				reportName: 'Test Report',
				reportTitles: ''])
			}
		}
	}
}