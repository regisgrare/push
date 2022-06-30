const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U",
  privateKey: "CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8",
};

webpush.setVapidDetails(
  "https://musical-palmier-103be5.netlify.app/",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dbrMHcdeh78:APA91bHIYzSm2wmIiSS5BsJZ5eivhU-ldwiUvA4HNNbmJbtnhaE_a-x2TBXIJrXQfbv5_1Htu0nr8YCY0COdxNG8RluJ86lX8Db_NBHEQf8zs5AW6ncpsEQ2lS7ka8BBMyRm-FGKEwjM",
  expirationTime: null,
  keys: {
    p256dh:
      "BNRyLfI2LZYM2z117wGoR8-5t6HH7Q7iYvhPIR8oT92UzQVrw19IvRIgTgVU1JUNotw1hcgN3nqsZM3TE11AJkA",
    auth: "-N4OUfdHUIdE4N8aToKzFw",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
