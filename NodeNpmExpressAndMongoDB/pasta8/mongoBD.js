
require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect(process.env.URI).then(() => {
  console.log('pronto');
}).catch(e => console.log(e));
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const session = require('express-session');

const mongoStore = require('connect-mongo');

const flash = require('connect-flash');

const sessionOpt = session({
  secret: '123',
  store: new mongoStore({mongoUrl: 'mongodb+srv://viniciusxsantosx:<password>@estudomondobd.fwwi1ke.mongodb.net/?retryWrites=true&w=majority&appName=EstudoMondoBD'}),
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
}); // cookie

app.use(sessionOpt);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



const client = new MongoClient(process.env.uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// para não vazar senha e coisas pessoais precisamos instalar dotenv
// precisa instalar o mongoose para fazer a coneção com o Db

