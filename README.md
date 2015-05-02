## About

This simple tutorial / demo shows how simple and incredible fast it is to deploy an application to Bluemix. Bluemix does not necessarily change the way you code an application but it tremendously reduces the time required for getting the app up and running. For this demo we use a simple web application written in Javascript as an example. Let’s assume coding is finished and the next step is to bring the application online. With traditional IT this would like the following:

-	request a server which can host the app (virtual or bare metal)
-	install OS, configure networking, firewall, etc
-	request/install middleware like database, messaging, etc
-	request/install runtime, i.e. java, web server, etc
-	deploy application

This can take days, weeks, or even months to finish. With Bluemix this time can be reduced to minutes.

### 1
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

![download cf](/docs/download-cf.png)

![download zip](/docs/download-zip.png)

![login](/docs/login.png)

![push](/docs/push.png)
