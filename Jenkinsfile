// pipeline{

//     environment {
//         registry = "docker_hub_account/repository_name"
//         registryCredential = 'dockerhub'
//     }

//     agent any

//     stages {
//         stage('ssh and build'){
//             steps{
//                 sshPublisher(publishers: [sshPublisherDesc(configName: 'docker_host', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''docker stop react_docker;
//                 docker rm -f react_docker;
//                 docker image rm -f react_docker;
//                 cd opt/react-docker;
//                 docker build -t react_docker .
//                 docker run -d -p 8080:80 --name react_docker react_docker''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/opt/react-docker', remoteDirectorySDF: false, removePrefix: '', sourceFiles: ' **/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
//             }
//         }
//         // stage('test'){
//         //     steps{
//         //         sh ''
//         //     }
//         // }
//     }
// }

pipeline {
  environment {
    registry = "johnnyliang77/react-portfolio"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any

  tools {nodejs "node" }

  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/huashenliang/myportfo'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}