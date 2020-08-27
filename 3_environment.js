class environment {
	constructor() {
		// this.buildingSize = 50
		// this.amount = round( width / this.buildingSize ) + 1
		// if ( this.amount > skImg.length ) { this.amount = skImg.length }
		this.footerSize = 50
		this.skyColor = [ 64, 191, 255 ]
		this.skySteps = round( height * 0.015 )
		this.sunX = width / 7
		this.sunY = height / 10
		this.sunSize = 100
		this.sunColor = color( 'yellow' )
		this.cloudsVel = 4
		this.cloudsHeight = [ height / 6, 4 * height / 6 ]

		this.cloudsHeight0 = random( this.cloudsHeight[ 0 ], this.cloudsHeight[ 1 ] )
		this.cloudsHeight1 = random( this.cloudsHeight[ 0 ], this.cloudsHeight[ 1 ] )
		this.cloudsHeight2 = random( this.cloudsHeight[ 0 ], this.cloudsHeight[ 1 ] )
		this.cloudsHeight3 = random( this.cloudsHeight[ 0 ], this.cloudsHeight[ 1 ] )
		this.cloudsHeightMove = 10


	}
	// Function to Override defaults
	setter( options ) {
		for ( key in options ) {
			this[ key ] = options[ key ];
		}
	}
	// create ditter backgroud
	draw() {
		//sky
		push()
		this.skyStepsN = 255 / this.skySteps
		this.skyStepsH = round( height / this.skySteps )
		for ( let i = 0; i < this.skySteps; i++ ) {
			this.skyColorAplha = color( this.skyColor[ 0 ], this.skyColor[ 1 ], this.skyColor[ 2 ], this.skyStepsN * i )
			fill( 'black' )
			noStroke()
			fill( this.skyColorAplha )
			this.skyStepCorner = height - this.skyStepsH * ( i + 1 )
			rect( 0, this.skyStepCorner, width, this.skyStepsH )
		}
		pop()
		//sun
		push()
		fill( this.sunColor )
		noStroke()
		circle( this.sunX, this.sunY, this.sunSize )
		//clouds
		imageMode( CENTER )
		image( skClouds[ 0 ], width / 2 + 0.6 * width * sin( millis() / 1000 * this.cloudsVel + 0 ), this.cloudsHeight0 + this.cloudsHeightMove * sin( millis() / 200 * this.cloudsVel + 100 ) )
		image( skClouds[ 1 ], width / 2 + -0.6 * width * sin( millis() / 1000 * this.cloudsVel + 120 ), this.cloudsHeight1 + this.cloudsHeightMove * sin( millis() / 200 * this.cloudsVel + 100 ) )
		image( skClouds[ 2 ], width / 2 + 0.6 * width * sin( millis() / 1000 * this.cloudsVel + 180 ), this.cloudsHeight2 + this.cloudsHeightMove * sin( millis() / 200 * this.cloudsVel + 100 ) )
		image( skClouds[ 3 ], width / 2 + -0.6 * width * sin( millis() / 1000 * this.cloudsVel + 90 ), this.cloudsHeight3 + this.cloudsHeightMove * sin( millis() / 200 * this.cloudsVel + 100 ) )
		//skyline
		image( skImg, width / 2, height - 140 / 2 - this.footerSize )
		pop()
		//footer
		push()
		fill( 'black' )
		rect( 0, height - this.footerSize, width, height )
		pop()
	}
}