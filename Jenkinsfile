pipeline
{
    options
    {
        buildDiscarder(logRotator(numToKeepStr: '3'))
    }
    agent any
    environment 
    {
        VERSION = 'latest'
        PROJECT = 'packers-movers-website'
        IMAGE = 'packers-movers-website:latest'
        ECRURL = 'http://587097088374.dkr.ecr.us-east-1.amazonaws.com/packers-movers-website'
        ECRCRED = 'ecr:us-east-1:tap_ecr'
    }
    stages
    {
        stage('Docker build')
        {
            steps
            {
                script
                {
                    // Build the docker image using a Dockerfile
                    docker.build("$IMAGE","examples/pipelines/TAP_docker_image_build_push_ecr")
                }
            }
        }
        stage('Docker push')
        {
            steps
            {
                script
                {
                    // login to ECR - for now it seems that that the ECR Jenkins plugin is not performing the login as expected. I hope it will in the future.
                    sh("eval \$(aws ecr get-login --no-include-email | sed 's|https://||')")
                    // Push the Docker image to ECR
                    docker.withRegistry(ECRURL, ECRCRED)
                    {
                        docker.image(IMAGE).push()
                    }
                }
            }
        }
    }
    
    post
    {
        always
        {
            // make sure that the Docker image is removed
            sh "docker rmi $IMAGE | true"
        }
    }
} 
