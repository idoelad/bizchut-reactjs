const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send(request.method + ' | ' + request.body.test);
});

exports.sendEmailTest = functions.https.onRequest((request, response) => {
 const gmailEmail = functions.config().gmail.email;
 const gmailPassword = functions.config().gmail.password;
 const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: gmailEmail,
   pass: gmailPassword,
  },
 });

 const mailOptions = {
  from: '"Bizchut App" <idoelad+bizchut@gmail.com>',
  to: 'idoelad@gmail.com',
  subject: 'Test from Firebase',
  text: 'This is a test from Firebase.',
  html: '<b>This is HTML</b>'
 };

 try {
  mailTransport.sendMail(mailOptions);
  console.log('email sent');
 } catch(error) {
  console.error('There was an error while sending the email:', error);
 }
 response.send();
 return null;
});







