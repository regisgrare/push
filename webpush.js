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
    "https://fcm.googleapis.com/fcm/send/drItUS6X_SA:APA91bFOLIfO82wNFsS3SmDxixnekcD7OHl5pIMgDwNVdZ11YGeQfgxT5PkCHhHxUy3sokVDwRNN1In1v_0_Hvh3WTXIkB61eXpVwK-gHSpqU0JYpkLYt_2Rft9O_D8cMk_inUmCzliz",
  expirationTime: null,
  keys: {
    p256dh:
      "BPZyJgoIP9E9gTv-MZe6sQvcNiFmw_PpUhDeDc6fYTPv-F3vzA3A3MCmN8Cweg8B-oyP-yNAc0ifG69gLbmSxgg",
    auth: "3o06Fgp-ogGQsUAT7Pwu3g",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
