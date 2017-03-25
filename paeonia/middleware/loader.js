var loader = require('cello-loader')

module.exports = function *(next){
  this.loader = loader(this.config) 
  yield next
}
