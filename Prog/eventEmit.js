const event  = require('events');
const eventEmitter =new  event.EventEmitter()


function listener(code, msg){
    console.log(`Listener ${code}  ${msg}`);
}

eventEmitter.on('status',listener); // register

eventEmitter.emit('status','200','ok')