class environment {
	constructor() {
		ly[ 'env' ] = createGraphics( width, height )
		this.ly = ly[ 'env' ]
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
		this.clouds = createGraphics( width, height )
		// this.imageSelector()
		// this.createSkyline()
		this.createFooter()
		this.createSky()






	}
	// Function to Override defaults
	setter( options ) {
		for ( key in options ) {
			this[ key ] = options[ key ];
		}
	}
	// imageSelector() {
	// 	this.buildings = []
	// 	while ( this.buildings.length != this.amount ) {
	// 		this.n = round( random( 29 ) )
	// 		if ( this.buildings.includes( this.n ) ) {
	// 			this.n = round( random( 29 ) )
	// 		} else { this.buildings.push( this.n ) }
	// 	}
	// }
	//
	// // draw skyline
	// createSkyline() {
	// 	this.skyline = createGraphics( 1500, height )
	//
	// 	for ( i = 0; i < this.buildings.length; i++ ) {
	// 		this.skyline.image( skImg[ this.buildings[ i ] ], ( this.buildingSize * i ), height - skImg[ this.buildings[ i ] ].height )
	// 	}
	// 	// this.skyline.filter( BLUR, 2 )
	// }

	// draw footer
	createFooter() {
		this.footer = createGraphics( width, this.footerSize )
		this.footer.background( 0 )
		// this.footer.background( 51, 51, 51 )
	}
	// create ditter backgroud
	createSky() {
		this.sky = createGraphics( width, height )
		this.skyStepsN = 255 / this.skySteps
		this.skyStepsH = round( height / this.skySteps )
		for ( i = 0; i < this.skySteps; i++ ) {
			this.skyColorAplha = color( this.skyColor[ 0 ], this.skyColor[ 1 ], this.skyColor[ 2 ], this.skyStepsN * i )
			this.sky.fill( 'black' )
			this.sky.noStroke()
			this.sky.fill( this.skyColorAplha )
			this.skyStepCorner = height - this.skyStepsH * ( i + 1 )
			this.sky.rect( 0, this.skyStepCorner, width, this.skyStepsH )
		}
		this.sky.fill( this.sunColor )
		this.sky.noStroke()
		this.sky.circle( this.sunX, this.sunY, this.sunSize )

	}

	createSun() {
		this.sun = createGraphics( width, height )


	}
	drawClouds() {
		this.clouds.clear()

		this.clouds.imageMode( CENTER )
		this.clouds.image( skClouds[ 0 ], width / 2 + 0.6 * width * sin( millis() / 1000 * this.cloudsVel + 0 ), this.cloudsHeight0 + this.cloudsHeightMove * sin( millis() / 200 * this.cloudsVel + 100 ) )
		this.clouds.image( skClouds[ 1 ], width / 2 + -0.6 * width * sin( millis() / 1000 * this.cloudsVel + 120 ), this.cloudsHeight1 + this.cloudsHeightMove * sin( millis() / 200 * this.cloudsVel + 100 ) )
		this.clouds.image( skClouds[ 2 ], width / 2 + 0.6 * width * sin( millis() / 1000 * this.cloudsVel + 180 ), this.cloudsHeight2 + this.cloudsHeightMove * sin( millis() / 200 * this.cloudsVel + 100 ) )
		this.clouds.image( skClouds[ 3 ], width / 2 + -0.6 * width * sin( millis() / 1000 * this.cloudsVel + 90 ), this.cloudsHeight3 + this.cloudsHeightMove * sin( millis() / 200 * this.cloudsVel + 100 ) )
		image( this.clouds, 0, 0 )
	}

	draw() {
		this.ly.clear()
		image( this.sky, 0, 0 )
		this.drawClouds()
		image( this.footer, 0, this.ly.height - this.footerSize )
		// this.ly.image( this.skyline, -20, -this.footerSize + 2 )
		imageMode( CENTER )
		image( skImg, width / 2, height - 140 / 2 - this.footerSize )
		imageMode( CORNER )
		// image( this.ly, 0, 0 )

	}
}