const smpp = require('smpp');
const session = new smpp.Session({host: '0.0.0.0', port: 9500});

let isConnected = false;

session.on('connect', () => {
  isConnected = true;

  session.bind_transceiver({
      system_id: 'USER_NAME',
      password: 'USER_PASSWORD',
      interface_version: 1,
      system_type: '380666000600',
      address_range: '+380666000600',
      addr_ton: 1,
      addr_npi: 1,
  }, (pdu) => {
    console.log('pdu status', lookupPDUStatusKey(pdu.command_status));
    if (pdu.command_status == 0) {
        console.log('Successfully bound')
    }

  })
})

function lookupPDUStatusKey(pduCommandStatus) {
    for (var k in smpp.errors) {
      if (smpp.errors[k] == pduCommandStatus) {
        return k
      }
    }
}

session.on('close', () => {
  console.log('smpp is now disconnected') 
   
  if (isConnected) {        
    console.log('smpp reconnecting');
    session.connect();    //reconnect again
  }
})
session.on('error', error => { 
  console.log('smpp error', error)   
  isConnected = false;
});

function sendSMS(from, to, text) {
    from = '+' + from.toString(); 
 // this is very important so make sure you have included + sign before ISD code to send sms
    to = '+' + to.toString();
   
   session.submit_sm({
       source_addr:      from,
       destination_addr: to,
       short_message:    text
   }, function(pdu) {
    console.log('sms pdu status', lookupPDUStatusKey(pdu.command_status));
       if (pdu.command_status == 0) {
           // Message successfully sent
           console.log(pdu.message_id);
       }
   });
}

session.on('pdu', function (pdu) {

    if (pdu.command == 'deliver_sm') {

        const sms = {
            from: null,
            to: null,
            message: null
        }

        sms.from = pdu.source_addr.toString();
        sms.to = pdu.destination_addr.toString();

        if (pdu.message_payload) {
            sms.message = pdu.message_payload.message;
        }
       
        console.log(sms);

        session.deliver_sm_resp({
            sequence_number: pdu.sequence_number
        });

    }

});



