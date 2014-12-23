var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('name', function (event, payload) {
    c.outPorts.log.send('event: ' + event);
    if (event !== 'data') {
      return;
    }
    // Do something with the packet, then
    if (typeof(data)==='string') {
      c.outPorts.out.send(new Graph(data));
    }
  });
  c.outPorts.add('graph');
  c.outPorts.add('log');
  return c;
};