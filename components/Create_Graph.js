var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component(),
      g = new noflo.Graph();
  
  g.outPorts.add('json');
  g.outPorts.add('log');
  
  g.inPorts.add('save', function (event, payload) {
    
    if (event !== 'data') {
      return;
    }
    
    g.outPorts.log.send('event: ' + event + ', payload: ' + JSON.stringify(payload));
    g.outPorts.log.send('typeof payload: ' + typeof(payload));
    
    // Do something with the packet, then
    if (typeof(payload)==='string') {
      g.outPorts.json.send(g.toJSON);
    }
  });
  
  

  c.inPorts.add('name', function (event, payload) {
    
    if (event !== 'data') {
      return;
    }
    
    c.outPorts.log.send('event: ' + event + ', payload: ' + JSON.stringify(payload));
    c.outPorts.log.send('typeof payload: ' + typeof(payload));
    
    // Do something with the packet, then
    if (typeof(payload)==='string') {
      g.name = payload;
      c.outPorts.graph.send(g);
    }
  });
  
  
  
  c.outPorts.add('graph');
  c.outPorts.add('log');
  
  return c;
};