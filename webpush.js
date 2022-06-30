const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U",
  privateKey: "CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d59vAr98Kss:APA91bFu_O_P6UQ_n3FUuiEQhW64xcQfwwtBmtJtXaG7tl2MyE4UFJMNgL7dQRsqS0GW2sSpZYwD6L9GjTtFJpxxa68scOkAwg_bRA-skw9-TA9KU0BXFwhjNF432HIQ-XJ-Slz64bxH",
  expirationTime: null,
  keys: {
    p256dh:
      "BN3ZIFP5LoL1KmaNrC9-im0oqiybH_HnRVCTUy4959mgS1u7iBakkUh5hSOeKNsYNzWp7Sk65yZSRm-I3axM_xc",
    auth: "JDo7aiMyKzOmrgJ0jo735A",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
