const admin = require("firebase-admin");

const serviceAccount = require("C:\\Users\\AFNANYOUNUS\\Downloads\\myapp123-20769-firebase-adminsdk-tdctd-fc1b2ff9ff.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const sendPushNotification = async (registrationId, title, message) =>{
      try{
          const request = {
               notification:{
                    title: title,
                    body: message,
               },
               token: registrationId
            }

          const response = await admin.messaging().send(request);
          console.log("notification sent successfully", response);
          return response;
      }
      catch(e){
        console.log(e);
        throw e;
      }
}

const registrationId = "your id";
const title="notification through nodejs";
const message="this is notification send through the nodejs";

sendPushNotification(registrationId,title,message);
