# Node.js Emoji API

### Requirements
- Npm >= v6.12.0
- Node >= v10.16.3
- Redis database

### Steps to install and run

```bash
git clone https://github.com/bahdcoder/node-emoji-api

cd node-emoji-api

npm install

# development
npm run dev

# production
npm start
```

### Endpoints
This application exposes two endpoints:

- `/`: Fetches a list of all emojis. Can accept a `search` query parameter to filter emojis.
- `/stats`: Returns the number of times this API has been called.
