const web3 = require("./ethereum/test");
const factory = require("./ethereum/factory");

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({dest: './upload'});

app.get('/api/users', (req, res) => {
    connection.query(
        'SELECT * FROM USER',
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.use('/image', express.static('./upload'));

app.post('/api/address', async (req,res)=>{
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const test = await factory.methods.createMail();
    const address = await test.call();
    console.log(address);
    await test.send({
      from: accounts[0],
      gas:1500000
    });
    res.send(address);
  } catch (err) {
    console.log(err.message);
  }
});

app.post('/api/users', upload.single('image'),(req,res) => {
  let sql = 'INSERT INTO USER VALUES (?,?,?,?,?,?)';
  let id = req.body.id;
  let pw = req.body.pw;
  let name = req.body.name;
  let p1 = req.body.p1;
  let p2 = req.body.p2;
  let p3 = req.body.p3;
  let email = req.body.email;
  let address = req.body.address;
  console.log(id);
  console.log(pw);
  console.log(name);
  console.log(p1+p2+p3);
  console.log(email);
  console.log(address);
  let parms = [id,pw,name,p1+p2+p3,email,address];
  connection.query(sql,parms,
    (err, rows, fields) => {
      res.send(rows);
    });
});



app.listen(port, () => console.log(`Listening on port ${port}`));
