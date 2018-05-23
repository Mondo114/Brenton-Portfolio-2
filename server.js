// http://localhost:3000

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');

const app = express();

var PORT = process.env.PORT || 3000;

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({
  type: "application/*+json"
}));
app.use(bodyParser.raw({
  type: "application/vnd.custom-type"
}));
app.use(bodyParser.text({
  type: "text/html"
}));

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('portfolio');
});


app.post('/send', (req, res) => {
  const output = `
    <p>You have a new message from your portfolio website.</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>First Name: ${req.body.firstname}</li>
      <li>Last Name: ${req.body.lastname}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: 'mail.brentonjjenkins.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: 'my gmail', // generated ethereal user
      pass: '' // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
}
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Brenton Portfolio Website Contact" <my gmail>', // sender address
    to: 'my gmail', // list of receivers
    subject: 'Brenton Portfolio Website Contact Message', // Subject line
    text: 'Hello World', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('portfolio', {msg:'Your email has been sent'});
  });
});

app.listen(PORT, function () {
  console.log("Portfolio is listening on PORT: " + PORT);
});