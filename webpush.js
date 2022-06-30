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
    "https://fcm.googleapis.com/fcm/send/eZijYmQLkHk:APA91bE4qo7HotunmTXPwhRLGj9-oT6mNoJ3skQMje0JdY90Q08SV-z9gyi8rpTHorcIhht0Vutm5xWkYRjObKcypWO28F_GkB6T1PwrFPnuxPsQGbnejLA9IJxyuYVxCd6ztYdXeGAy",
  expirationTime: null,
  keys: {
    p256dh:
      "BKU_jwCKQsN98yr86HOZntvMNZAw-Y4dZ4RCE4JGTzqzdqEXCRCNkUDYhtwxoWPBufjjzK-7bEzUrbVOuSeeXUE",
    auth: "QdkDckGP7cxssMM73Q-Evw",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
