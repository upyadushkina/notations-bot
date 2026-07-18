# Notations Bot — Cloudflare deploy

## D1 (database)

D1 is where the bot **remembers** things: people, schedule, who said “I’ll be there”, circles, etc.
Without D1 the bot would forget everything after each message.

Binding name must be exactly **`DB`**.

---

## setWebhook (connect Telegram → your Worker)

1. Deploy the Worker and copy its URL, e.g.  
   `https://hosq-notations-bot.xxxx.workers.dev`
2. Open this link in the browser (paste your bot token and URL):

```text
https://api.telegram.org/botВАШ_ТОКЕН/setWebhook?url=https://hosq-notations-bot.xxxx.workers.dev/
```

3. Telegram should answer `"ok": true`. Done — messages now go to your Worker.

Check status:

```text
https://api.telegram.org/botВАШ_ТОКЕН/getWebhookInfo
```

---

## Files for GitHub

- `worker.js` — bot code  
- `d1-paste.sql` — database + seed data  
- `ui-messages.json` — texts  
- `wrangler.toml` — Cloudflare config  
- `INSTRUCTIONS.md` — this file  

---

## Deploy steps

1. Create Worker + D1 database  
2. D1 Console → paste all of `d1-paste.sql` → Run  
   (If DB already existed without `is_admin`, also run `d1-migrate-admin-password.sql`)  
3. Bind D1 as **`DB`**  
4. Secret: `TELEGRAM_BOT_TOKEN`  
   Optional secret: `ADMIN_PASSWORD` (default in code is `bigbrother`)  
5. Deploy `worker.js`  
6. setWebhook (see above)  
7. In Telegram: `/admin` → password `bigbrother`

---

## Admin

- Command: `/admin`  
- Password: `bigbrother` (or secret `ADMIN_PASSWORD`)  
- After success, admin menu opens; use **Lock admin access** to revoke on that account  
- Anyone with the password can unlock admin on their Telegram account  
