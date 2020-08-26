class mainCircle {
	constructor( options ) {
		this.id = 0
		this.centerX = 0
		this.centerY = 0

		this.ly = 0

		//circle style
		this.r = 80
		this.stkWeight = 8
		this.stkColor = 'black'
		this.bg = ( 'white' )

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
		this.movementX = width / 10
		this.velX = 1
		this.movementY = height / 10
		this.velY = 1



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
		this.x = this.centerX + this.movementX * sin( frameCount * this.velX )
		this.y = this.centerY + this.movementY * sin( frameCount * this.velY )
	}
	//draw on selected graphic
	draw() {
		this.newPosition()

		this.applyCircleStyle()
		this.ly.circle( this.x, this.y, 2 * this.r )

		this.applyTextStyle()
		this.ly.text( this.label, this.x, this.y )


	}
}