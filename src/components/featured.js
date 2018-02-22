import React from 'react'
import Slider from 'react-slick'

//The sliders settings
const settings = {
	arrows:false,
	dots:false,
	infinite:true,
	speed:450,
	slidesToShow:1,
	slidesToScroll:1
}

//Fundtion that generates the Slider element
const generateSlides = ({slides}) => {
	if(slides){
		return(
			<Slider {...settings}>
				{slides.map((item)=>{
					return(
						<div key={item.id} className="item_slider"
						 style={{background:`url(/images/covers/${item.cover})`}}
						 >
							<div className="caption">
								<h4>{item.topic}</h4>
								<p>{item.title}</p>
							</div>
						</div>
					)
				})}
			</Slider>
		)
	}
}

const Featured = (props) => {
	console.log(props)
	return(
		<div>
			{generateSlides(props)}
		</div>
	)
}

export default Featured