function loadMyFonts() {
	all_fonts = {
		'oldGame': 'fonts/retroGaming.ttf'
	}
	for ( name in all_fonts ) {
		fonts[ name ] = loadFont( all_fonts[ name ] )
	}


}

function loadSkylineImages( n ) {
	for ( i = 0; i < n; i++ ) {
		skImg[ i ] = loadImage( 'images/skyline/img' + i + '.png' )

	}
}