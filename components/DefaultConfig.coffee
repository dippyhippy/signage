noflo = require 'noflo'

exports.getComponent = ->
  c = new noflo.Component
  c.inPorts.add 'in', {datatype:'bang'},(event, payload) ->
    return unless event is 'connect'
    # Do something with the packet, then
    c.outPorts.out.send {"server":"http://192.168.1.100","port":"8000"}
  c.outPorts.add 'out'
  c