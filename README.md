## About

This simple tutorial / demo shows how simple and incredible fast it is to deploy an application to Bluemix. Bluemix does not necessarily change the way you code an application but it tremendously reduces the time required for getting the app up and running. For this demo we use a simple web application written in Javascript as an example. Let’s assume coding is finished and the next step is to bring the application online. With traditional IT this would like the following:

-	request a server which can host the app (virtual or bare metal)
-	install OS, configure networking, firewall, etc
-	request/install middleware like database, messaging, etc
-	request/install runtime, i.e. java, web server, etc
-	deploy application

This can take days, weeks, or even months to finish. With Bluemix this time can be reduced to minutes.

### 1 Create an App
Log on to Bluemix and make sure you have selected United Kingdom as region. 
https://console.eu-gb.bluemix.net/
Go to dashboard, select a space on the menu to the left, and click on “Create an App”

![CreateApp](/docs/create-app.png)

This step can be automated but we want to show how the console of Bluemix looks like and how to use it to get to a page with instructions how to deploy our code.

Click WEB

![WEB](/docs/kind.png)

Choose Javascript (js), SDK for Node.js, as the runtime, then click continue

![RUNTIME](/docs/runtime-continue.png)

Give your app a name. Together with the domain “eu-gb.bluemix.net” this will become the public URL of you app. For this reason this has to be unique. I always use my initials followed by the date: rjh-0105
Chances are good that this is not already taken. (Bluemix allows to change the domain to a custom one)

Click finish. The app gets created and you are set on the “Start Coding” page which shows instruction how to proceed.

![app name](/docs/name-app.png)

![start coding](/docs/start-coding.png)

### 2 Setup

In general the following steps have already been done. In this example we do it at this stage because the "Start Coding" page helps us with instructions.
First we need to download the cf (CloudFoundry) tool. With the cf tool we can log on to Bluemix, upload updated applications, and a lot more which is beyond the scope of this demo. For simplicity download a binary version of the cf tool for your platform. The binaries can be used without the need to installing it. Save the archive to folder on your machine.

![downloadcf](/docs/download-cf.png)

Download the sample code of our simple web application from https://github.com/cloud-dach/bluemix-demo click on "Download Zip"

![downloadzip](/docs/download-zip.png)

Extract the zip to some folder then copy and extract the cf tool to the same folder.

### 3 Upload App

This is step 3 to 6 as shown on the "Start Coding" page. Open a terminal (cmd) and change directory to the folder where you extracted the sample code. Execute step 4 by simple copying the command to the clipbord. DO this by click on the copy button at the right end of the command shown. Paste this command into the terminal and press enter. Do the same for step 5. You are promted for your password which is the one you logged on to Bluemix.

![login](/docs/login.png)

Now we can upload the application. Arrange your windows as shown in the screen shot below. THis way you can best observe what happens when uploading the app. Type or copy/paste the command shown in step 5. Because the downloaded sample code has a configuration file we did not change, we have to add the parameter -n to the command. This defines the host name and should be identical to the application name already there.

Example:

```
cf push rjh-0105 -n rjh-0105
```

Press enter and watch the windows. Once the process has finished after aproximately 30 seconds, click on the link next to "Route" in the upper area of the Bluemix console. This opens the sample application.

![push](/docs/push.png)
