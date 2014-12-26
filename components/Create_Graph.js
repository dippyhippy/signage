var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component(),
      g = new noflo.Graph();
  
  g.addNode('console', 'core/Output');
  
  g.addOutport('json', 'console', 'out');
  
  g.addInport('save', 'console', 'in');
  
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