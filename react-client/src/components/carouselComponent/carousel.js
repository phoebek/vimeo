import React, { Component } from 'react';
import Vibrant from 'node-vibrant'

const imgUrls = [
	"https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_UX182_CR0,0,182,268_AL_.jpg", 
	"https://m.media-amazon.com/images/M/MV5BOGVhNjUwYTItYmI2NS00ZGI1LWE5ZDQtMWVjMTIyODAzMDI4XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_UY268_CR3,0,182,268_AL_.jpg",
	"https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/220px-Deadpool_%282016_poster%29.png",
	"https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Prestige_poster.jpg/220px-Prestige_poster.jpg",
	"https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXGLMMT/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"
];

const textContent = [
	{title: 'Hunt for the Wilderpeople', description: 'Raised on hip-hop and foster care'}, 
	{title: 'The Fourth Phase', description: 'What happens after the third phase'},
	{title: 'Deadpool', description: "Look the button is red wow"},
	{title: 'The Prestige', description: "David Bowie, Wolverine, Batman, and Black Widow walk into a bar"},
	{title: "Beauty and the Beast", description: "This should make a gold button"}
];

class Carousel extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};

		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
		this.buttonLoad = this.nextSlide.bind(this);

	}
	
	previousSlide () {
		console.log('click')
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		this.state.currentImageIndex = index
		this.setState({
			currentImageIndex: index
		}, this.loadContent());
	}
	
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
		this.state.currentImageIndex = index
		this.setState({
			currentImageIndex: index
		}, this.loadContent());
		

	}

	loadContent(){
		let v = new Vibrant(imgUrls[this.state.currentImageIndex])
		v.getPalette((err, palette) => {
			document.getElementById('buy-button').style.background = palette.Vibrant.getHex()
			document.getElementById('image-slide-wrapper').style.background = palette.Vibrant.getHex()

		})
		document.getElementById('image-slide').style.backgroundImage = "url(\'"+imgUrls[this.state.currentImageIndex]+"\')"

	}

	componentDidMount(){
		console.log('mount')
		this.loadContent()
	}
	render () {
		return (
			<div className="carousel">
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } 
					title={ textContent[this.state.currentImageIndex].title } 
					description={ textContent[this.state.currentImageIndex].description }  />
				<ImageCard 
					url={ imgUrls[this.state.currentImageIndex] }  />
				<TextContent 
					title={ textContent[this.state.currentImageIndex].title } 
					description={ textContent[this.state.currentImageIndex].description }/>
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />

				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => {
	let arrowStyles = {
	};
	if (direction == "right") {
		arrowStyles = {
			position:'absolute',
			bottom: '46%',
			left:'85%'
		}
	} else {
		arrowStyles = {
			position:'absolute',
			top: '50%',
			left:'15%'
		}
	}

	return (
		<div 
			className={ `slide-arrow ${direction}` } 
			onClick={ clickFunction }
			style={arrowStyles}>
			{ glyph } 
		</div>
	);
}

const ImageSlide = ({ url, title, description }) => {
	return (
	<div id='image-slide-wrapper'>
		<div id="image-slide" >
		</div>
	</div>
	);
}

const ImageCard = ({ url, title, description }) => {
	return (
	<div className="image-card" >
		<div>
			<img src={url}/>
		</div>
	</div>
	)
}

const TextContent = ({ title, description }) => {
	return (
	<div className="text-content">
		<h2>{title}</h2>
		<p>{description}</p>
		<div className="buttons-wrapper">
					<BuyButton />
					<WatchButton />
				</div>
	</div>
	)
}

const BuyButton = () => {
	return (
	<div className="button" id="buy-button" >
		<p>Buy Now</p>
	</div>
	)
}

const WatchButton = ({  }) => {

	return (
	<div className="button" id="watch-button">
		<p>Watch Trailer</p>
	</div>
	)
}

export default Carousel;
