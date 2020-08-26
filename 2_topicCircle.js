class topicCircle {
	constructor( options ) {
		//basic props
		this.id = 0
		this.parent = 0
		this.ly = 0

		this.setter( options ); // reset basic props
		//circle style
		this.r = 50
		this.d = this.parent.r + width / 10
		this.stkWeight = 4
		this.stkColor = 'black'
		this.bg = ( 'white' )
		this.hoverColor = color( 255, 200, 200 )
		this.hoverAct = this.r * 2

		// //waves
		// this.qWaves = 1
		// this.wavesDistanceMed = this.r * 0.3
		// this.wavesDistanceMax = this.r * 0.4
		// this.wavesColor = color( 200, 200, 0 )
		// this.wavesWeight = 1
		// this.wavesVelMed = 1
		// this.wavesVelMax = 3

		//text style
		this.label = "Title"
		this.font = fonts[ 'oldGame' ]
		this.tColor = 'white'
		this.tStrokeColor = 'black'
		this.tStrokeWeight = 2
		this.tSize = 12
		this.tAlignV = CENTER
		this.tAlignH = CENTER

		//movement
		this.vel = 4
		this.vel2 = 0.4
		this.osc = this.d / 30
		this.trail = 5
		this.sqs = []
		this.angle = 360

		//line
		this.lineStroke = 8
		this.lineColor = 'black'



		this.setter( options );
	}
	// Function to Override defaults
	setter( options ) {
		for ( key in options ) {
			this[ key ] = options[ key ];
		}

	}

	//apply circle style
	applyCircleStyle() {
		this.ly.color( this.bg )
		this.ly.stroke( this.stkColor )
		this.ly.strokeWeight( this.stkWeight )
	}

	//apple text style
	applyTextStyle() {
		this.ly.textFont( this.font )
		this.ly.fill( this.tColor )
		this.ly.stroke( this.tStrokeColor )
		this.ly.strokeWeight( this.tStrokeWeight )
		this.ly.textSize( this.tSize )
		this.ly.textAlign( this.tAlignV, this.tAlignH )

	}
	//calculate new position
	newPosition() {
		this.x = this.parent.x + ( this.d - this.osc / 2 + this.osc * sin( frameCount / this.vel2 ) ) * sin( frameCount / this.vel + this.angle )
		this.y = this.parent.y + ( this.d - this.osc / 2 + this.osc * sin( frameCount / this.vel2 ) ) * cos( frameCount / this.vel + this.angle )
	}
	//line
	drawLine() {
		this.ly.stroke( this.lineColor )
		this.ly.strokeWeight( this.lineStroke )
		this.ly.line( this.x, this.y, this.parent.x, this.parent.y )
	}
	//
	// drawWaves() {
	// 	this.ly.push()
	// 	this.ly.strokeWeight( this.wavesWeight )
	// 	this.wavesVel = map( this.hoverValue(), 0, 1, this.wavesVelMax, this.wavesVelMed )
	// 	this.wavesDistance = map( this.hoverValue(), 0, 1, this.wavesDistanceMax, this.wavesDistanceMed )
	// 	this.waves = []
	// 	for ( i = 0; i < this.qWaves; i++ ) {
	// 		this.ly.noFill()
	// 		this.dir = cos( ( 0.5 * i * 360 / this.qWaves ) + frameCount * this.wavesVel )
	// 		this.aplha = map( this.dir, 0, 1, 0, 100 )
	// 		if ( this.dir > 0 ) {
	// 			this.ly.stroke( this.wavesColor, this.aplha * map( this.hoverValue(), 0, 1, 1, 0 ) )
	// 			this.rTemp = this.r + this.wavesDistance * sin( ( 0.5 * i * 360 / this.qWaves + frameCount * this.wavesVel ) )
	// 			this.ly.circle( this.x, this.y, 2 * this.rTemp )
	// 		}
	// 	}
	// 	this.ly.pop()
	// }

	//mouse over
	hoverValue() {
		return map( dist( this.x, this.y, mouseX, mouseY ), this.r, this.hoverAct, 0, 1, true )
	}



	//draw on selected graphic
	draw() {
		this.newPosition()
		this.drawLine()


		this.applyCircleStyle()
		this.ly.circle( this.x, this.y, 2 * this.r )

		this.applyTextStyle()
		this.ly.text( this.label, this.x, this.y )

	}
}