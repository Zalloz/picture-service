const app = require('./index.js');

const PORT = process.env.PORT || 8082;


app.listen(PORT, () => console.log(PORT));
