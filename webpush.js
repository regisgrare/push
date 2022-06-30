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
    "https://fcm.googleapis.com/fcm/send/d4d6WvAkDZU:APA91bFvMA8K-wWq6VwkA5n8G9HeNvNU_1RBD04d8AXogUlQQmE8iqga19vJt34EhpLfsSYwN0DA5F-QGKvQS3nPqB0Y5Ayt3MnShgTplXNplLpG_rMDzHloQfM_d2y54UINmsMsWXgV",
  expirationTime: null,
  keys: {
    p256dh:
      "BKV5ad1pLvQp6KzWlu8VJEJGN_n7REm2iTh10QCqxgiD2IdMe6FLyv3uVHe4Zze0cZ0SpyeK1XFmQwAtP7FGBio",
    auth: "UqTTk17HPW4sDPi1JDkoPA",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
