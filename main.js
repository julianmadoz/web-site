p5.disableFriendlyErrors = false

function preload() {
	loadMyFonts()
	loadSkylineImages( 33 )
}

function setup() {
	cv = createCanvas( windowWidth, windowHeight )

	// pixelDensity( 0.8 )
	// noSmooth()

	cv.position( 0, 0 )
	frameRate( 30 )
	angleMode( DEGREES )
	ly[ 'env' ] = createGraphics( width, height )
	env = new environment()
	scr[ 0 ] = new circleScreen( { id: 0 } )
	scr[ 0 ].setMainCircle( {
		id: 'name',
		centerX: width / 2,
		centerY: ( height - 100 ) / 2,
		label: 'Julian\nMadoz'
	} )
	scr[ 0 ].setTopicCircle( {
		id: 0,
		label: 'subtopic1'
	} )
	scr[ 0 ].setTopicCircle( {
		id: 2,
		label: 'subads'
	} )
	scr[ 0 ].setTopicCircle( {
		id: 45,
		label: 'suasdsfbads'
	} )
	scr[ 0 ].setTopicCircle( {
		id: 4,
		label: 'suasdsfbads'
	} )


}

function draw() {
	clear()
	env.draw()
	scr[ 0 ].draw()
}