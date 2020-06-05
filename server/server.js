const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/contacto', (req, res) => {
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          type: 'OAuth2',
          user: 'eliasalveal18@gmail.com',
          clientId: '86787237529-l97upko51c3ps1co2defmf09rd4pfh6k.apps.googleusercontent.com',
          clientSecret: 'c_D_5MqTPjVdcwxDmiRZhEQD',
          refreshToken: '1/l9SxamBJxza0YkuEHFYsWH7D6Q6LhSf4jwKLQFZtbTc',
          accessToken: 'ya29.GltQBtbX-gW7ZEVRATb1G1_tnkGYKWWx9krZ4yWBLkKeo-cuNUdsJCTQ60-dCJFKPvnGAe6NyyYsqY05HNTHCqiw2upHnNqVJ_0RSgx-jeVjjT7-xlYxjh7mhlCq'
      }
  });


  const nombre = req.body.nombre;
  const correo = req.body.correo;
  const asunto = req.body.asunto;
  const mensaje = req.body.mensaje;
  

  
  const message = {
    from: correo,
    to: 'eliasalveal18@gmail.com',
    subject: asunto,
    text:"Nombre: "+nombre + "\n"+
     "Correo: "+ correo +" \nMensaje: "+ mensaje,
    replyTo: correo
  };
  transporter.sendMail(message, function(error, info){
    if(error){
      console.log(`Failed to send the message "${mensaje}" from <${nombre}> ${correo} with the error ${error && error.message}`);
      res.send('error');
    }else{
      console.log(`Sent the message "${mensaje}" from <${nombre}> ${correo}.`);
      res.send('success');
    }

  });
})
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '..', 'public\\index.html'));
});
app.listen(port, () => {
  console.log('Server is up!');
});
