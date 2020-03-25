pipeline{
    agent any
    stages {
        stage('ssh and build'){
            steps{
               sshPublisher(publishers: [sshPublisherDesc(configName: 'docker_host', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''docker stop react_docker;
docker rm -f react_docker;
docker image rm -f react_docker;
cd opt/react-docker;
docker build -t react_docker .
docker run -d -p 8080:80 --name react_docker react_docker''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/opt/react-docker', remoteDirectorySDF: false, removePrefix: '', sourceFiles: ' **/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
        // stage('test'){
        //     steps{
        //         sh ''
        //     }
        // }
    }
}
