class circleScreen {
	constructor( options ) {
		this.id = ''
		this.ly = 0
		this.mC = 0
		this.tC = {}
		this.tCAmount = 0
		this.angularDistance = 0

		this.setter( options )
		this.createLayer()
	}
	// Function to Override defaults
	setter( options ) {
		for ( key in options ) {
			this[ key ] = options[ key ];
		}
	}

	createLayer() {
		ly[ this.id ] = createGraphics( width, height )
		this.ly = ly[ this.id ]
	}
	setMainCircle( options ) {
		this.mC = new mainCircle( options )
		this.mC.ly = this.ly
	}

	setTopicCircle( options ) {
		options.parent = this.mC
		options.ly = this.ly
		this.tC[ options.id ] = new topicCircle( options )
		this.setAngle()
	}
	// count how many topics are there
	countTopics() {
		this.tCAmount = Object.values( this.tC ).length
		return this.tCAmount

	}

	// calculate the angle between topics
	setAngle() {
		this.countTopics()
		if ( this.tCAmount == 0 ) {
			this.angularDistance = 360
		} else {
			this.angularDistance = 360 / this.tCAmount
		}
		this.uuu = 0
		for ( let key in this.tC ) {
			this.uuu = this.uuu + 1
			this.tC[ key ].angle = this.angularDistance * ( this.uuu + 1 )
		}
	}
	//set prop to objects
	setProp( towho, prop, value ) {
		if ( towho == 'mC' ) { // aplica solo al mC
			this.mC[ prop ] = value
		} else if ( towho == 'tC' ) { // aplica a todos los tC
			for ( let key in this.tC ) {
				this.tC[ key ][ prop ] = value
			}
		} else { // aplica a un tC en particular
			this.tC[ towho ][ prop ] = value
		}
	}
	//Draw the whole object in canvas - inside function
	drawAll() {
		this.ly.clear()
		for ( let topic in this.tC ) {
			this.tC[ topic ].draw()
		}
		this.mC.draw()
		image( this.ly, 0, 0 )
	}

	//Draw the whole object in canvas - outside function
	draw() {

		this.drawAll()

	}
}