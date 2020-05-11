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

		this.server.observe([deviceQuery], (dev) => {

			if (this.device.state) {

				const powerCommand = (this.device.state == "on") ? 'turn-on' : 'turn-off';

				// Set the powerup state 
	  		dev.call(powerCommand, (err) => {
					if (!err) {
						this.server.info(`${this.device.name} initial power state set to ${this.device.state}`);
					}
					else {
						this.server.error(`${this.device.name} ${err}`);
					}
			  });
	  	}
		});
	}

}