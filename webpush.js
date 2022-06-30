const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BGun4yhfcjV1OqD8NfweW4Sv-_Y2Yw59gdhrwjWWzDG8RBiiSWUQuiTI6tgsUT8A0iaShIH9cfau8vSfxjfKf64",
  privateKey: "awP2Vn0_4BR_SWRXCt87DMIA_bg2ciICXtTL9ICnpFQ",
};

webpush.setVapidDetails(
  "mailto: regisgrare@hotmail.fr",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eLPPV9H4Xqs:APA91bHHVcq1nbZK7EjF-BWbmctBxowB6ct5K1VJyOqliGQgambXTWw7p_cdCYoN_AX0jBnnQ9XwIC8-f7b6QbyfePHC8NZ16qc29vO4mkoFUAevoU_clWXy0cU8BWt4pd5V6a7FgLLH",
  expirationTime: null,
  keys: {
    p256dh:
      "BNiYSNWGcTdxek37qzP1ZMQVRnJaDImz-DirIGe4cbty-KBc0TX2iyoDky34KXvCfxZbIsfKBmP3Cylp2jBQYaU",
    auth: "QyreTnARIE8JK4YbfxsJ7Q",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
