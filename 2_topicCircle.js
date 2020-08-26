class topicCircle {
	constructor( options ) {
		this.id = 0
		this.d = width / 5
		this.parent = 0
		this.angle = 30

		this.ly = 0

		//circle style
		this.r = 50
		this.stkWeight = 4
		this.stkColor = 'black'
		this.bg = ( 'white' )

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
		this.osc = this.d / 20
		this.trail = 5
		this.sqs = []
		this.angle =

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