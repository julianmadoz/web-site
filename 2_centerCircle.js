class mainCircle {
	constructor( options ) {
		this.id = 0
		this.centerX = 0
		this.centerY = 0

		this.ly = 0

		//circle style
		this.r = 100
		this.stkWeight = 5
		this.stkColor = 'black'
		this.bg = color( 255, 255, 255 )
		this.hoverColor = color( 255, 200, 200 )
		this.hoverAct = this.r * 2

		//waves
		this.qWaves = 1
		this.wavesDistanceMed = this.r * 0.2
		this.wavesDistanceMax = this.r * 0.5
		this.wavesColor = 200
		this.wavesWeight = 1
		this.wavesVelMed = 3
		this.wavesVelMax = 20

		//text style
		this.label = "Title"
		this.font = fonts[ 'oldGame' ]
		this.tColor = 'white'
		this.tStrokeColor = 'black'
		this.tStrokeWeight = 4
		this.tSize = 30
		this.tAlignV = CENTER
		this.tAlignH = CENTER
		//movement
		this.x = this.centerX
		this.y = this.centerY
		this.movementX = this.r / 1
		this.velX = 0.6
		this.movementY = this.r / 7
		this.velY = 0.6



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
		this.ly.fill( lerpColor( color( this.hoverColor ), color( this.bg ), this.hoverValue() ) )
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
		this.x = this.centerX + this.movementX * sin( frameCount * this.velX )
		this.y = this.centerY + this.movementY * sin( frameCount * this.velY )
	}
	//waves
	drawWaves() {
		this.ly.push()
		this.ly.strokeWeight( this.wavesWeight )
		this.wavesVel = map( this.hoverValue(), 0, 1, this.wavesVelMax, this.wavesVelMed )
		this.wavesDistance = map( this.hoverValue(), 0, 1, this.wavesDistanceMax, this.wavesDistanceMed )
		this.waves = []
		for ( i = 0; i < this.qWaves; i++ ) {
			this.ly.noFill()
			this.dir = cos( ( 0.5 * i * 360 / this.qWaves ) + frameCount * this.wavesVel )
			this.aplha = map( this.dir, 0, 1, 0, 100 )
			if ( this.dir > 0 ) {
				this.ly.stroke( this.wavesColor, this.aplha )
				this.rTemp = this.r + this.wavesDistance * sin( ( 0.5 * i * 360 / this.qWaves + frameCount * this.wavesVel ) )
				this.ly.circle( this.x, this.y, 2 * this.rTemp )
			}
		}
		this.ly.pop()
	}

	//mouse over
	hoverValue() {
		return map( dist( this.x, this.y, mouseX, mouseY ), this.r, this.hoverAct, 0, 1, true )
	}
	//draw on selected graphic
	draw() {
		this.newPosition()


		this.drawWaves()

		this.applyCircleStyle()


		this.ly.circle( this.x, this.y, 2 * this.r )

		this.applyTextStyle()
		this.ly.text( this.label, this.x, this.y )



	}
}