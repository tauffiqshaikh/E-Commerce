const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_KEY,
  process.env.MAILJET_SECRET_KEY,
);

const sendMail = (data, recipient, subject) => {
  const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "tauffiqshaikh2560@gmail.com",
                Name: "Generic Shopping Website"
              },
              To: [
                {
                  Email:`${recipient}`,
                  Name: `${recipient}`
                }
              ],
              Subject: `${subject}`,
              TextPart: "Dear user, welcome to Generic Ecommerce site! May the force be with you!",
              HTMLPart: `<h3>Dear user, follow this link to <a href=\"${data}\">${subject}</a>!</h3><br />May the force be with you!`
            }
          ]
        })

request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
}

module.exports = sendMail;