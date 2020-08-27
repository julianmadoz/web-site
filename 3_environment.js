class environment {
	constructor() {
		this.ly = ly[ 'env' ]
		this.buildingSize = 50
		this.amount = round( width / this.buildingSize )
		if ( this.amount > skImg.length ) { this.amount = skImg.length }
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
		this.buildings = []
		this.skyline = createGraphics( 1500, height )
		while ( this.buildings.length != this.amount ) {
			this.n = round( random( 29 ) )
			if ( this.buildings.includes( this.n ) ) {
				this.n = round( random( 29 ) )
			} else { this.buildings.push( this.n ) }
		}
		for ( i = 0; i < this.buildings.length; i++ ) {
			this.skyline.image( skImg[ this.buildings[ i ] ], ( this.buildingSize * i ), height - skImg[ this.buildings[ i ] ].height )
		}

	}

	// draw footer
	createFooter() {
		this.footer = createGraphics( width, this.footerSize )
		this.footer.background( 0 )
		// this.footer.background( 51, 51, 51 )

	}
	draw() {
		this.ly.clear()
		this.ly.image( this.footer, 0, this.skyline.height - this.footerSize )
		this.ly.image( this.skyline, 0, -this.footerSize + 2 )
		image( this.ly, 0, 0 )

	}
}