p5.disableFriendlyErrors = true

function preload() {
	// loadMyFonts()
	// loadSkylineImages( 29 )
}

function setup() {
	cv = createCanvas( windowWidth, windowHeight )
	// pixelDensity( 1 )
	angleMode( DEGREES )
	gr = createGraphics( width, height )
	ly[ 'env' ] = createGraphics( width, height )
	env = new environment()

	qwe[ 'name' ] = {}
	qwe[ 'name' ][ '0' ] = new mainCircle( {
		id: 'name',
		centerX: width / 2 - 200,
		centerY: height / 2,
		velY: 2,
		ly: gr,
		label: 'Julian\nMadoz'

	} )
	qwe[ 'name' ][ 'prueba1' ] = new topicCircle( {
		id: 'prueba1',
		parent: qwe[ 'name' ][ 0 ],
		ly: gr,
		angle: 360,
		label: 'subtopic1'
	} )
	qwe[ 'name' ][ 'prueba2' ] = new topicCircle( {
		id: 'prueba2',
		parent: qwe[ 'name' ][ 0 ],
		ly: gr,
		angle: 120,
		label: 'subtopic2'
	} )
	qwe[ 'name' ][ 'prueba3' ] = new topicCircle( {
		id: 'prueba3',
		parent: qwe[ 'name' ][ 0 ],
		ly: gr,
		angle: 240,
		label: 'subtopic3'
	} )



}

function draw() {
	// clear()
	// gr.clear()
	// env.draw()

	// qwe[ 'name' ][ 'prueba1' ].draw()
	// qwe[ 'name' ][ 'prueba2' ].draw()
	// qwe[ 'name' ][ 'prueba3' ].draw()
	// qwe[ 'name' ][ 0 ].draw()
	// //
	// image( gr, 0, 0 )
	env.draw()
	image( ly[ 'env' ], 0, 0 )

	// skyline = createGraphics( width, height )
	// for ( i = 0; i < 4; i++ ) {
	//
	// 	image( skImg[ i ], 100, 100 )
	// }

	// image( skyline )



}