pipeline{
    agent any
    stages {
        stage('ssh and build'){
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'docker_host', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/opt/docker', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            //   sshPublisher(publishers: [sshPublisherDesc(configName: 'docker_host', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''
                   
            //         cd opt/react-docker;
            //         docker build -t react_docker .
            //         docker run -d -p 80:80 --name react_docker react_docker
            //         ''', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/opt/react_docker', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/*', usePty: true)], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}
//  docker rm -f react_docker;
//                     docker image rm -f react_docker;
//                     docker rmi $(docker images -aq);