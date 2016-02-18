function FpsCtrl(opts){
 	var self = {};
	var opts = opts || {};
	
	var fps = opts.fps || 60;
	var callback = opts.callback || function(){};
	
	var interval = 1000/fps;
	var then = Date.now();
	var now;
	var delta;

	/**
	 * Private
	 */
	function update(){
	    now = Date.now();
	    delta = now - then;

	    if (delta >= interval) {
	        then = now - (delta % interval);
	        callback();
	    }
	}

	function setFps(_fps){
		fps = _fps;
		interval = 1000/fps;
	}

	/**
	 * Public
	 */
	self.update = update;
	self.setFps = setFps;

	return self;
}

module.exports = FpsCtrl;