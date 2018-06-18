// powerup is a very simple app which simply sets the initial on/off state
// of configured devices on the hub

module.exports = class Power {
	
	constructor(server, device) {

		this.device = device;
		this.server = server;

		this.startObserver();
	}

	startObserver() {
		const deviceQuery = this.server.where({name:this.device.name});
		const self = this;

		this.server.observe([deviceQuery], function(dev) {

			if (self.device.state) {

				const powerCommand = (self.device.state == "on") ? 'turn-on' : 'turn-off';

				// Set the powerup state 
	  		dev.call(powerCommand, function() {
			    self.server.info(self.device.name + " initial power state set to " + self.device.state);
			  });
	  	}
		});
	}

}