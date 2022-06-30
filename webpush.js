const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BGun4yhfcjV1OqD8NfweW4Sv-_Y2Yw59gdhrwjWWzDG8RBiiSWUQuiTI6tgsUT8A0iaShIH9cfau8vSfxjfKf64",
  privateKey: "awP2Vn0_4BR_SWRXCt87DMIA_bg2ciICXtTL9ICnpFQ",
};

webpush.setVapidDetails(
  "https://musical-palmier-103be5.netlify.app/",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cKdJWNMj528:APA91bE7_SQw7DUE98PKOO4qWsryC2a-66TnaTMvK_srrHXN4ANdIKl_m4AlyuZ3jHP2136fyfO_TAqo-JfSD1cqTXmvuH_DjM0GpumduUfK6dNsTvP6J2cLDLqThXE-A-bmYIet9rt5",
  expirationTime: null,
  keys: {
    p256dh:
      "BGIxiQPIiJ81ei0mJ_a6oYktBJeZwp6HhUwwRp486K03E5nosWWtuCV6CGRLpXTLV1Qu3v6K3kko7GVNuR3DcJw",
    auth: "0ZroUiFlTj-YcTVtMxooZQ",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
