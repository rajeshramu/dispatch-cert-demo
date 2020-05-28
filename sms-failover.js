require("dotenv").config();
const Nexmo = require("nexmo");


const nexmo = new Nexmo({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    applicationId: process.env.APPLICATION_ID,
    privateKey: process.env.PRIVATE_KEY_PATH
  })
  
  
 
 nexmo.dispatch.create(
  "failover",
  [
    {
      from: { type: "sms", number: process.env.VIRTUAL_NUMBER },
      to: { type: "sms", number: process.env.TO_NUMBER },
      message: {
        content: {
          type: "text",
          text: "Dear Customer, You have a package waiting for you."
        }
      },
      failover: {
        expiry_time: 180,
        condition_status: "read"
      }
    },
    {
      from: { type: "sms", number: process.env.VIRTUAL_NUMBER },
      to: { type: "sms", number: process.env.TO_NUMBER },
      message: {
        content: {
          type: "text",
          text: "Dear Customer, remainder you still have a parcel waiting for you."
        }
      }
    }
  ],
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.dispatch_uuid);
    }
  }
);