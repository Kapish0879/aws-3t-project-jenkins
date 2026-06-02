pipeline 
{

    agent {
        label 'kapish'
    }

    tools {
        maven 'my-maven'
        //dockerTool 'my-docker'
    }
    environment {
        calcwebappmvn = 'calcwebappmvn'
        IMAGE_NAME_FRONTEND = '964742912902.dkr.ecr.us-east-1.amazonaws.com/dev/project:frontend+$BUILD_NUMBER'
        IMAGE_NAME_BACKEND = '964742912902.dkr.ecr.us-east-1.amazonaws.com/dev/project:backend+$BUILD_NUMBER'

        
    }

    stages {

        stage('Git Checkout') {
            steps {

                git url: 'https://github.com/Kapish0879/aws-3t-project-jenkins.git'

                echo "Code Checked-out Successfully!!"

                sh 'ls -la'
            }
        }
    //     // stage('sonarQube Analysis') {
    //     //     steps {

    //     //         withSonarQubeEnv('sonar') {
    //     //             sh 'mvn clean verify sonar:sonar'
    //     //         }

    //     //         echo "SonarQube Analysis Completed Successfully!!"
    //     //     }
    //     // }
    //     // stage('Quality Gate') {
    //     //     steps {
    //     //         timeout(time: 5, unit: 'MINUTES') {
    //     //             script {
    //     //                 try {
    //     //                     def qg = waitForQualityGate()
    //     //                     echo "Quality Gate Status: ${qg.status}"
    //     //                     if (qg.status != 'OK') {
    //     //                         error "Quality Gate failed: ${qg.status}"
    //     //                     }
    //     //                 } catch (Exception e) {
    //     //                     echo "Quality Gate check failed: ${e.message}"
    //     //                     error "Quality Gate stage failed"
    //     //                 }
    //     //             }
    //     //         }
    //     //     }
    //     // }


    //     stage('Docker Build') {
    //         steps {

    //             sh 'docker --version'

    //             sh 'docker images'

    //             sh 'docker build -t $calcwebappmvn:$BUILD_NUMBER .'

    //             echo "Docker Image Built Successfully!!"

    //             sh 'docker images'
    //         }
    //     }
    //     //pushing image to aws ecr
    //     stage('Docker Push') {
    //         steps {

    //             sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 964742912902.dkr.ecr.us-east-1.amazonaws.com'

    //             sh 'docker tag $calcwebappmvn:$BUILD_NUMBER 964742912902.dkr.ecr.us-east-1.amazonaws.com/dev/project:$BUILD_NUMBER'

    //             sh 'docker push 964742912902.dkr.ecr.us-east-1.amazonaws.com/dev/project:$BUILD_NUMBER'

    //             echo "Docker Image Pushed to AWS ECR Successfully!!"
    //         }
    //     }
    //     // replace image name 
    //      stage('Replace Image') {
    //         steps {
    //             sh """
    //             sed -i "s|PLACEHOLDER_IMAGE_FRONTEND|${IMAGE_NAME_FRONTEND}|g" frontend.yaml
    //             sed -i "s|PLACEHOLDER_IMAGE_BACKEND|${IMAGE_NAME_BACKEND}|g" backend.yaml
    //             """
    //         }
    //     }
    //     //deploying image to aws eks
    //    /* stage('Deploy to EKS') {
    //         steps {
    //             sh 'kubectl version --client'

    //             sh 'kubectl config set-context --current --namespace=jenkins'

    //             sh 'kubectl get nodes'

    //             sh 'aws eks update-kubeconfig --region us-east-1 --name my-cluster'

    //             sh 'kubectl apply -f  frontend.yaml'

    //             sh 'kubectl get pods'

    //             echo "Application Deployed to AWS EKS Successfully!!"
    //         }
    //     }*/
        
     }

    post {

        success {
            echo 'Pipeline executed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
