const tmi = require('tmi.js');

const options = {

options: {

debug: true,

},

connection: {

cluster: 'aws', 
reconnect: true,
},
identity: {

username: 'priyankaprasad',

password: 'oauth:rz0g8vna91ht2jvyx6zt2xoej4kh4o',

},

channels: ['priyankaprasad'],

};

const client = new tmi.client (options);

client.connect();
client.on('connected',(address,port) =>{
    client.action('priyankaprasad','hello bot connnected');
})