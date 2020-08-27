class button {
	constructor( options ) {
		this.x = 0
		this.y = 0


		//text Style
		this.font = fonts[ 'oldGame' ]
		this.tSize = 12
		this.label = ''
		this.tColor = color( 0, 255, 0 )
		this.tStkW = 0
		this.tStkCol = color( 0, 255, 0 )

		//rectangle style
		this.w = 0
		this.h = 0
		this.stkCol = color( 0, 255, 0 )
		this.stkW = 2
		this.stkWHover = 6
		this.rColor = color( 0, 255 )
		this.round = 5
		this.rstkW = this.stkW
		this.setter( options )
		this.draw()
	}

	// Function to Override defaults
	setter( options ) {
		for ( key in options ) {
			this[ key ] = options[ key ];
		}
	}

	draw() {
		push()
		this.hover()
		strokeJoin( BEVEL )
		rectMode( CENTER )
		fill( this.rColor )
		stroke( this.stkCol )
		strokeWeight( this.rstkW )
		rect( this.x, this.y, this.w, this.h, this.round )
		textAlign( CENTER, CENTER )
		fill( this.tColor )
		stroke( this.tStkCol )
		strokeWeight( this.tStkW )
		textFont( this.font )
		textSize( this.tSize )
		text( this.label, this.x, this.y - 2 )
		pop()
	}
	hover() {
		if (
			mouseX < this.x + this.w / 2 &&
			mouseX > this.x - this.w / 2 &&
			mouseY < this.y + this.h / 2 &&
			mouseY > this.y - this.h / 2
		) {
			this.rstkW = this.stkWHover
		} else { this.rstkW = this.stkW }
	}
}

class buttonMapper {
	constructor( options ) {
		this.buttons = {}
		this.setButtons()
	}
	setter( options ) {
		for ( key in options ) {
			this[ key ] = options[ key ];
		}
	}
	draw() {
		for ( let key in this.buttons ) {
			this.buttons[ key ].draw()
		}
	}

	setButtons() {
		this.buttons = {
			'aboutMe': new button( {
				label: 'Acerca de...',
				x: 7 * width / 8,
				y: height - env.footerSize / 2,
				w: 100,
				h: 25

			} ),
			'contacto': new button( {
				label: 'Contactame!',
				x: width / 8,
				y: height - env.footerSize / 2,
				w: 100,
				h: 25

			} ),
			'otraCosa': new button( {
				label: 'Otra cosa',
				x: width / 2,
				y: height - env.footerSize / 2,
				w: 100,
				h: 25

			} )
		}
	}


}