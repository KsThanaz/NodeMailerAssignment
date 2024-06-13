var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ksthanaz88@gmail.com',
    pass: 'omqxlylsgoazdvkh'
  }
});

var mailOptions = {
  from: 'ksthanaz88gmail.com',
  to: 'thanuthanaz88@gmail.com',
  subject: 'Sending Email using Node Mailer Package',
  text: 'Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});