noflo = require 'noflo'

exports.getComponent = ->
  g = new noflo.Graph 'Test'

  # Finally return the component instance
  g
