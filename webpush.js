const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BGun4yhfcjV1OqD8NfweW4Sv-_Y2Yw59gdhrwjWWzDG8RBiiSWUQuiTI6tgsUT8A0iaShIH9cfau8vSfxjfKf64",
  privateKey: "awP2Vn0_4BR_SWRXCt87DMIA_bg2ciICXtTL9ICnpFQ",
};

webpush.setVapidDetails(
  "mailto:regisgrare56@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dzL_1X_QNMY:APA91bGselEFx7YLhvPGAjJIrY1X1gpPk69fMdYJj-sqK-OIddAMbnPuirzt_PQOnjY2l3XKE8cc8vx11QOLvSIeXTF8rF_Gg9ribMZrzWUxuBiQwPuU-o9o_O8zLbfN_BY7RTxh06Sq",
  expirationTime: null,
  keys: {
    p256dh:
      "BF6kLjiIgA3gx_gtholA2RSlTIRJA3EJ_x3Qi_o1hoYakzCsFWPYjjn0mFpwWVGJoF0dPicvoywUHu7UDyS97dw",
    auth: "a9Ux2m3jPe9I3REz5DGQuQ",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
