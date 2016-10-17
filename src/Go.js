/** Go.js | The interface **/

var Go = function() {
  var dex = new Dex(arguments);
  if (dex.data && !dex.data.err) {
    if (dex.data.is == "move") return new Move(dex.data.key);
    if (dex.data.is == "pokemon") return new Pokemon(dex.data);
  }
  return dex;
};

// Attach ourselves to wherever we go!
(function(Go){
  // Export to node or the browser, whichever is being used!
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Go;
  } else {
    window.Go = Go;
  }
})(Go);
