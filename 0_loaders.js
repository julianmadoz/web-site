function loadMyFonts() {
	all_fonts = {
		'oldGame': 'fonts/retroGaming.ttf'
	}
	for ( name in all_fonts ) {
		fonts[ name ] = loadFont( all_fonts[ name ] )
	}


}