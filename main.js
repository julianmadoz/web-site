p5.disableFriendlyErrors = false

function preload() {
	loadMyFonts()
	loadSkylineImages( 32 )
}

function setup() {
	cv = createCanvas( windowWidth, windowHeight )
	cv.position( 0, 0 )
	// pixelDensity( 1  )
	frameRate( 30 )
	angleMode( DEGREES )

	env = new environment()
	btn = new buttonMapper()
	scr[ 0 ] = new circleScreen( { id: 0 } )
	scr[ 0 ].setMainCircle( {
		id: 'name',
		centerX: width / 2,
		centerY: ( height - 100 ) / 2,
		label: 'Julián\nMadoz'
	} )
	scr[ 0 ].setTopicCircle( {
		id: 0,
		label: 'Experiencias'
	} )
	scr[ 0 ].setTopicCircle( {
		id: 2,
		label: 'Proyectos\nartísticos'
	} )
	scr[ 0 ].setTopicCircle( {
		id: 45,
		label: 'Estudios'
	} )
	scr[ 0 ].setTopicCircle( {
		id: 4,
		label: 'Educación\nformal'
	} )

}

function draw() {
	clear()
	env.draw()
	btn.draw()
	scr[ 0 ].draw()


}