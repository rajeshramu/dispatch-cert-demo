# dispatch-cert-demo

Create an application on the Nexmo portal. 

Generate a private key and download it. 

Place the private key in the root directory. 

Take note of the application_id.

Update the .env file. 
Insert values for 

API_KEY, API_SECRET,

APPLICATION_ID, 

VIRTUAL_NUMBER,

TO_NUMBER. 


Install npm modules (from the root of the project)

npm install


To start the server (from the root of this project)

node sms-failover.js

After Run:

An SMS will be sent to TO_NUMBER from VIRTUAL_NUMBER. After 180 seconds, a second SMS will be sent if the first sms is not read.
