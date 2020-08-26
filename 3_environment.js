class environment {
	constructor() {
		this.imgSize = 100
		this.amount = round( width / this.ImsSize )

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

			this.skyline.image( skImg[ i ], ( 100 * i ), height - skImg[ i ].height )
		}
		this.rectSize = 20


	}
	// Function to Override defaults
	setter( options ) {
		for ( key in options ) {
			this[ key ] = options[ key ];
		}
	}

	createSkyline() {

	}
	draw() {
		ly[ 'env' ].image( this.skyline, 0, -50 )

	}
}