var express = require('express');
var router = express.Router();


let io = null;
let chat1 = {username: '', id: undefined};
let chat2 = {username: '', id: undefined};
var randomBroj = Math.floor(Math.random() * (+25 - +10) + +10);


router.get('/igraj',
    function(req, res, next) {
      if (!io){
        io = require('socket.io')(req.socket.server);
        io.sockets.on('connection', (socket) => {
          socket.on('join',  ({username, room}) => {
            room = this.room;
            if (chat1.id === undefined){
              chat1.username = username;
              chat1.id = socket.id;
              socket.join(room);
              socket.emit('pouruka_s_bekenda_trenutnom_useru', {poruka: 'Igra ce uskoro poceti, ceka se drugi igrac!'});
            }
            else if (chat2.id === undefined){
              chat2.username = username;
              chat2.id = socket.id;
              socket.join(room);
              io.emit('igraJePocela', (chat1));
            }
            else {
              socket.emit('pouruka_s_bekenda_trenutnom_useru', {poruka: 'Igra je popunjena, sacekajte!'});
            }
              console.log(chat1.username, '-VS-',  chat2 )
          })
            socket.on('front', (brojSaFronta) => {
              var user;
              console.log('broj sa fronta', brojSaFronta, 'random ->', randomBroj)

              if (randomBroj === 2  ){
                socket.id === chat1.id ? user = chat1 : user = chat2 ;
                randomBroj = Math.floor(Math.random() * (+25 - +10) + +10);
                io.emit('krajIgre', (user)); chat1.id = undefined; chat2.id = undefined;
              }
              else if ( brojSaFronta < 1 || brojSaFronta > randomBroj / 2){
                console.log('pogresan unos!!!!!!!!!!!!!!!!!!!!!')
              }

              else{
                randomBroj -= (brojSaFronta);
                socket.id === chat1.id ? user = chat2 : user = chat1 ;
                io.emit('podesiRandomBroj_i_potezIgraca', ({ randomBroj:randomBroj,  user: user.username }));

                socket.id === chat1.id ? user = chat1 : user = chat2 ;
                io.emit('bekend', ({user: user.username, broj: brojSaFronta, randomBroj: randomBroj}));
              }
          })
        })
      }
      return res.render('index', {randomBroj: randomBroj} )
    });


router.get('/', function(req, res, next) {
  res.render('pocniIgru', { title: 'Express' });
});



module.exports = router;
