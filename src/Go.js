/** Go.js | The interface **/

var Go = function() {
  var args = arguments;
  var dex = new Dex(args);
  if (dex.data && !dex.data.err) {
    // oh, we found something,
    // is it a pokemon maybe?
    if (dex.data.is == "pokemon") {
      // woo, return a pokemon!
      return new Pokemon(dex.data);
    }
  }
  // well, return what we got!
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
