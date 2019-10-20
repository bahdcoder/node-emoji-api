const Express = require('express')
const { emoji } = require('node-emoji')
const Redis = require('promise-redis')().createClient()

const app = new Express()

app.get('/stats', (_, res) => Redis.get('calls').then((count) => res.json({
    status: '✅',
    data: count
})).catch(() => res.status(400).json({
    status: '❌',
    message: 'Failed to fetch stats from Redis.'
})))

app.get('/', (req, res) => {
    let results = emoji

    if (req.query.search) {
        results = Object.keys(emoji)
            .filter(key => key.match(req.query.search))
            .map(key => emoji[key])
    }

    Redis.incr('calls')

    return res.json({
        status: '✅',
        data: Object.values(results)
    })
})

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`
🚀 We're up and running at http://localhost:${port}
`))
