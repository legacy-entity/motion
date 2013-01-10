
var v = require('vector')

// motion

var motion = module.exports = {}

motion.vel = [v, 0,0]

motion.update = function (e) {
  e.pos.add(e.vel)
  e.vel.mul(0.25)
}
