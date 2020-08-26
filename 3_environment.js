class environment {
	constructor() {
		this.ly = ly[ 'env' ]
		this.buildingSize = 50
		this.amount = round( width / this.buildingSize )
		this.footerSize = 50
		this.createSkyline()
		this.createFooter()



	}
	// Function to Override defaults
	setter( options ) {
		for ( key in options ) {
			this[ key ] = options[ key ];
		}
	}
	// draw skyline
	createSkyline() {
		this.buildings = new Set()
		this.skyline = createGraphics( width, height )
		while ( this.buildings.size != this.amount ) {
			this.n = round( random( 29 ) )
			if ( this.buildings.has( this.n ) ) {
				this.n = round( random( 29 ) )
			} else { this.buildings.add( this.n ) }
		}
		// this.skyline.rotate( 180 )
		for ( i = 0; i < this.buildings.size; i++ ) {

			this.skyline.image( skImg[ i ], ( width / ( this.amount ) * i ), height - skImg[ i ].height )
		}

	}
	// draw footer
	createFooter() {
		this.footer = createGraphics( width, this.footerSize )
		this.footer.background( 0 )

	}
	draw() {
		this.ly.image( this.footer, 0, height - this.footerSize )
		this.ly.image( this.skyline, 0, -this.footerSize )

	}
}