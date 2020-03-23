pipeline{
    agent any
    stages {
        stage('install'){
            steps{
                sshPublisher(
                    publishers: 
                        [sshPublisherDesc(configName: 'docker_host', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''docker stop react-docker;
                        docker rm -f react-docker;
                        docker image rm -f react-docker;
                        cd /opt/react-docker;
                        docker build -t react-docker .; .''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '//opt//react-docker', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '/var/lib/jenkins/workspace/react-docker')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}