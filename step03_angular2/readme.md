We are starting to learn Angular 2, the assumption is that you have a basic understanding of TypeScript.
If you do not know TypeScript please go to:

https://github.com/panacloud/learn-typescript

Install VS Code Editor:
https://code.visualstudio.com/

Read: 

https://angular.io/docs/ts/latest/tutorial/toh-pt6.html

We will connect with service which we created in step 2.

But we will first have to Enable CORS in the service we created in step 2 and then redeploy the service. 

CORS will be added in Beta 2 but for now we are adding CORS manually:

https://github.com/serverless/serverless/pull/1703#issuecomment-236159935

To get the rest api id:

aws apigateway get-rest-apis --region us-east-1

To redeploy:

aws apigateway create-deployment --region us-east-1 --rest-api-id 8okx9hulu1 --stage-name dev