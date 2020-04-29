const web3 = require("./ethereum/test");
const Mail = require("./ethereum/build/Mail.json");
const Ship = require("./ethereum/build/Shipping.json");
const factory = require("./ethereum/factory");

const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM USER", (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/getmail", upload.single("image"), async (req, res) => {
  const mail = new web3.eth.Contract(
    JSON.parse(Mail.interface),
    req.body.address
  );
  const senderLength = await mail.methods.senderLength().call();
  console.log(senderLength);

  if (senderLength == 0) {
    console.log("현재 데이터 0");
    res.send({
      senderLength: senderLength
    });
  } else {
    console.log("현재 데이터" + senderLength + "개");
    let datas = [];
    for (var i = 0; i < senderLength; i++) {
      await Promise.all([
        mail.methods.senderInfos(i).call(),
        mail.methods.mailInfos(i).call()
      ]).then(value => {
        var newObj = Object.assign({}, value[0], value[1]);
        datas.push(newObj);
      });
    }

    console.log(datas);

    res.send({
      datas: datas,
      length: senderLength
    });
  }
});

app.post("/api/complete", upload.single("image"), async (req, res) => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const mail = new web3.eth.Contract(
      JSON.parse(Mail.interface),
      req.body.address
    );
    await mail.methods.mailComplete(req.body.index, req.body.password).send({
      from: accounts[0],
      gas: 2000000
    });
    res.send(true);
  } catch (err) {
    res.send(false);
    console.log(err.message);
  }
});

app.use("/image", express.static("./upload"));

app.post("/api/address", async (req, res) => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const test = await factory.methods.createMail();
    const address = await test.call();
    console.log(address);
    await test.send({
      from: accounts[0],
      gas: 3000000
    });
    res.send(address);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/api/addmail", upload.single("image"), async (req, res) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const mail = new web3.eth.Contract(
      JSON.parse(Mail.interface),
      req.body.address
    );
    await Promise.all([
      mail.methods
        .addSenderInfo(
          req.body.sender_name,
          req.body.sender_p1 +
            "-" +
            req.body.sender_p2 +
            "-" +
            req.body.sender_p3,
          req.body.sender_email,
          req.body.Spost + " " + req.body.Saddr1 + " " + req.body.Saddr2,
          req.body.receiver_name,
          req.body.receiver_p1 +
            "-" +
            req.body.receiver_p2 +
            "-" +
            req.body.receiver_p3,
          req.body.Rpost + " " + req.body.Raddr1 + " " + req.body.Raddr2
        )
        .send({
          from: accounts[0],
          gas: 1500000
        }),
      mail.methods
        .addMailInfo(
          req.body.product_name,
          req.body.product_price,
          req.body.quantity,
          req.body.volume,
          req.body.others,
          req.body.password
        )
        .send({
          from: accounts[0],
          gas: 1500000
        })
    ]);
    res.send();
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/api/getonemail", upload.single("image"), async (req, res) => {
  const mail = new web3.eth.Contract(
    JSON.parse(Mail.interface),
    req.body.address
  );
  const senderInfo = await mail.methods.senderInfos(req.body.index).call();
  const mailInfo = await mail.methods.mailInfos(req.body.index).call();

  var newObj = Object.assign({}, senderInfo, mailInfo);

  res.send(newObj);
});

app.post("/api/getship", upload.single("image"), async (req, res) => {
  const mail = new web3.eth.Contract(
    JSON.parse(Mail.interface),
    req.body.address
  );
  const shipAddr = await mail.methods.ship(req.body.index).call();
  const ship = new web3.eth.Contract(JSON.parse(Ship.interface), shipAddr);
  const hubLength = await ship.methods.hubLength().call();
  console.log(hubLength);
  if (hubLength == 0) {
    let today = new Date();
    const time = today.toLocaleString();
    console.log(time);

    try {
      const accounts = await web3.eth.getAccounts();
      await ship.methods.addHub("서울 HUB", time).send({
        from: accounts[0],
        gas: 1500000
      });
    } catch (err) {
      console.log(err.message);
    }
    const senderInfo = await mail.methods.senderInfos(req.body.index).call();
    const hubData = await ship.methods.hubInfos(0).call();
    var newObj = Object.assign({
      receiverAddress: senderInfo.receiverAddress,
      hub: hubData.hub,
      hub_time: hubData.hub_time
    });
    res.send(newObj);
  } else {
    const senderInfo = await mail.methods.senderInfos(req.body.index).call();
    const hubData = await ship.methods.hubInfos(hubLength - 1).call();
    var newObj = Object.assign({
      receiverAddress: senderInfo.receiverAddress,
      hub: hubData.hub,
      hub_time: hubData.hub_time
    });
    res.send(newObj);
  }
});

app.post("/api/getallhub", upload.single("image"), async (req, res) => {
  const mail = new web3.eth.Contract(
    JSON.parse(Mail.interface),
    req.body.address
  );
  const shipAddr = await mail.methods.ship(req.body.index).call();
  const ship = new web3.eth.Contract(JSON.parse(Ship.interface), shipAddr);
  const hubLength = await ship.methods.hubLength().call();
  if (hubLength == 0) {
    console.log("현재 데이터 0");
    res.send({
      length: hubLength
    });
  } else {
    console.log("현재 데이터" + hubLength + "개");
    let datas = [];
    for (var i = 0; i < hubLength; i++) {
      ship.methods
        .hubInfos(i)
        .call()
        .then(value => {
          datas.push(value);
        });
    }
    const comp = await ship.methods.getComp().call();
    console.log(comp);
      res.send({
        datas: datas,
        comp: comp,
        length: hubLength
      });
  }
});

app.post("/api/addhub", upload.single("image"), async (req, res) => {
  const mail = new web3.eth.Contract(
    JSON.parse(Mail.interface),
    req.body.address
  );
  const shipAddr = await mail.methods.ship(req.body.index).call();
  const ship = new web3.eth.Contract(JSON.parse(Ship.interface), shipAddr);
  let today = new Date();
  const time = today.toLocaleString();
  console.log(time);

  try {
    const accounts = await web3.eth.getAccounts();
    await ship.methods.addHub(req.body.hub, time).send({
      from: accounts[0],
      gas: 1500000
    });
  } catch (err) {
    console.log(err.message);
  }
  res.send();
});

app.post("/api/getusermail", upload.single("image"), async (req, res) => {
  const mail = new web3.eth.Contract(
    JSON.parse(Mail.interface),
    req.body.address
  );
  const senderInfo = await mail.methods.senderInfos(req.body.index).call();
  console.log(senderInfo);
  const mailInfo = await mail.methods.mailInfos(req.body.index).call();
  console.log(mailInfo);

  var newObj = {
    senderName: senderInfo.senderName,
    receiverName: senderInfo.receiverName,
    productName: mailInfo.productName,
    quantity: mailInfo.quantity
  };
  console.log(newObj);

  res.send(newObj);
});

app.post("/api/users", upload.single("image"), (req, res) => {
  let sql = "INSERT INTO USER VALUES (?,?,?,?,?,?)";
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
  console.log(p1 + p2 + p3);
  console.log(email);
  console.log(address);
  let parms = [id, pw, name, p1 + p2 + p3, email, address];
  connection.query(sql, parms, (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
