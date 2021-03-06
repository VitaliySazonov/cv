let express = require('express')
let app = express()
let path = require('path')
let PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log(`PORT => ${PORT} has started...`))