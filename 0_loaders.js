function loadMyFonts() {
	all_fonts = {
		'oldGame': 'fonts/retroGaming.ttf'
	}
	for ( name in all_fonts ) {
		fonts[ name ] = loadFont( all_fonts[ name ] )
	}


}

function loadSkylineImages( n ) {
	// for ( i = 0; i < n; i++ ) {
	// 	skImg[ i ] = loadImage( 'images/skyline/img' + i + '.png' )
	// }
	skImg = loadImage( 'images/bg.png' )
	for ( i = 0; i < 4; i++ ) {
		skClouds[ i ] = loadImage( 'images/cloud' + i + '.png' )
	}
}


class loader {
	constructor() {
		this.ly = createGraphics( width, height )

		this.ly.rectMode( CENTER )
		this.ly.noFill()
		this.ly.stroke( 'white' )
		this.ly.strokeWeight( 8 )
		this.dimming = 0
		setTimeout( function () {
			this.dimming = 1
			print( this.dimming )
		}, 1000 );

	}

	draw() {
		this.ly.clear()
		this.ly.background( 0 )
		if ( this.dimming == 1 ) {
			print( 'jkhj' )
		}

		this.ly.rect( width / 2, height / 2, width / 4, height / 15 )
		this.ly.rect( width / 2 + width / 10 * sin( millis() / 2 ), height / 2, 6, 6 )

		image( this.ly, 0, 0 )
	}
}