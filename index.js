require('dotenv').config()
const server = require('./api/server.js')

const PORT = process.env.PORT || 4242

server.listen(PORT, () => console.log(`turtle up on PORT ${PORT}`))
