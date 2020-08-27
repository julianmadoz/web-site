class mainCircle {
	constructor( options ) {
		this.id = 0
		this.centerX = 0
		this.centerY = 0
		this.scale = 1
		this.ly = 0

		//circle style
		this.r = 90
		this.stkWeight = 5
		this.stkWeightPlus = 7
		this.stkColor = 'black'
		this.stkColorHover = color( 200, 0, 0 )
		this.bg = color( 255, 255, 255 )
		this.hoverColor = color( 255, 0, 0 )
		this.hoverAct = this.r * 2

		//waves
		this.qWaves = 1
		this.wavesDistanceMed = this.r * 0.2
		this.wavesDistanceMax = this.r * 0.5
		this.wavesColor = 100
		this.wavesWeight = 1
		this.wavesVelMed = 3
		this.wavesVelMax = 20

		//text style
		this.label = "Title"
		this.font = fonts[ 'oldGame' ]
		this.tColor = 'white'
		this.tStrokeColor = 'black'
		this.tStrokeColorHover = 'black'
		this.tStrokeWeight = 7
		this.tStrokeWeightPlus = 2
		this.tSize = 30
		this.tAlignV = CENTER
		this.tAlignH = CENTER
		//movement
		this.x = this.centerX
		this.y = this.centerY
		this.movementX = this.r * 3
		this.velX = 0.4
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
		this.ly.fill( lerpColor( color( this.hoverColor ), color( this.bg ), this.hover ) )
		this.ly.stroke( lerpColor( color( this.stkColorHover ), color( this.stkColor ), this.hover ) )
		this.ly.strokeWeight( ( this.stkWeight + this.stkWeightPlus * map( this.hover, 0, 1, 1, 0 ) ) * this.scale )
	}

	//apple text style
	applyTextStyle() {
		this.ly.textFont( this.font )
		this.ly.fill( this.tColor )
		this.ly.stroke( lerpColor( color( this.tStrokeColorHover ), color( this.tStrokeColor ), this.hover ) )
		this.ly.strokeWeight( ( this.tStrokeWeight + this.tStrokeWeightPlus * map( this.hover, 0, 1, 1, 0 ) ) * this.scale )
		this.ly.textSize( this.tSize * this.scale )
		this.ly.textAlign( this.tAlignV, this.tAlignH )

	}
	//calculate new position
	newPosition() {
		this.x = this.centerX + this.movementX * this.scale * sin( frameCount * this.velX )
		this.y = this.centerY + this.movementY * this.scale * sin( frameCount * this.velY )
	}
	//waves
	drawWaves() {
		this.ly.push()
		this.ly.strokeWeight( this.wavesWeight * this.scale )
		this.wavesVel = map( this.hover, 0, 1, this.wavesVelMax, this.wavesVelMed )
		this.wavesDistance = map( this.hover, 0, 1, this.wavesDistanceMax, this.wavesDistanceMed ) * this.scale
		this.waves = []
		for ( i = 0; i < this.qWaves; i++ ) {
			this.ly.noFill()
			this.dir = cos( ( 0.5 * i * 360 / this.qWaves ) + frameCount * this.wavesVel )
			this.aplha = map( this.dir, 0, 1, 0, 100 )
			if ( this.dir > 0 ) {
				this.ly.stroke( this.wavesColor, this.aplha )
				this.rTemp = this.r * this.scale + this.wavesDistance * sin( ( 0.5 * i * 360 / this.qWaves + frameCount * this.wavesVel ) )
				this.ly.circle( this.x, this.y, 2 * this.rTemp )
			}
		}
		this.ly.pop()
	}

	//mouse over
	hoverCalc() {
		this.hover = map( dist( this.x, this.y, mouseX, mouseY ), this.r, this.hoverAct, 0, 1, true )
	}
	//draw on selected graphic
	draw() {
		this.newPosition()
		this.hoverCalc()


		// this.drawWaves()

		this.applyCircleStyle()


		this.ly.circle( this.x, this.y, 2 * this.r * this.scale )

		this.applyTextStyle()
		this.ly.text( this.label, this.x, this.y )



	}
}