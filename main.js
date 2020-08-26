p5.disableFriendlyErrors = false

function preload() {
	loadMyFonts()
	loadSkylineImages( 33 )
}

function setup() {
	cv = createCanvas( windowWidth, windowHeight )
	// pixelDensity( 1 )
	cv.position( 0, 0 )
	frameRate( 30 )
	angleMode( DEGREES )
	gr = createGraphics( width, height )
	ly[ 'env' ] = createGraphics( width, height )
	env = new environment()
	scr = new circleScreen()
	scr.setMainCircle( {
		id: 'name',
		centerX: width / 2,
		centerY: ( height - 200 ) / 2,
		label: 'Julian\nMadoz'
	} )
	scr.setTopicCircle( {
		id: 0,
		label: 'subtopic1'
	} )
	scr.setTopicCircle( {
		id: 2,
		label: 'subads'
	} )
	scr.setTopicCircle( {
		id: 45,
		label: 'suasdsfbads'
	} )
	scr.setTopicCircle( {
		id: 4,
		label: 'suasdsfbads'
	} )


}

function draw() {
	clear()
	env.draw()
	scr.draw()
}