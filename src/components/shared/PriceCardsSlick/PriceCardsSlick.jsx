import {React, Component} from 'react';
import Slider from 'react-slick';

import CardTextGreen from '../../CardTextGreen/CardTextGreen';
import CardHeading from '../../CardHeading/CardHeading';
import CardList from '../../CardList/CardList';
import CardPrice from '../../CardPrice/CardPrice';
import CardParagraph from '../../CardParagraph/CardParagraph';
import Button from '../../Btn/Btn';

export default class CardsSlider extends Component {
  render() {
      const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
    <Slider {...settings}>
        <div>
            <CardHeading text={'30 days'} />
            <CardPrice text={'$20.99'} />
            <CardList />
            <Button text={'Sign Up'} btnAction={"You've signed up for 30 days successfully"} />    
            <CardParagraph />    
        </div>
        <div>
            <CardTextGreen text={'Most popular'} />
            <CardHeading text={'90 days'} />
            <CardPrice text={'$46.99'} />
            <CardList />
            <Button text={'Sign Up'} btnAction={"You've signed up for 90 days successfully"} />
            <CardParagraph />  
        </div>
        <div>
            <CardHeading text={'365 days'} />
            <CardPrice text={'$127.99'} />
            <CardList />
            <Button text={'Sign Up'} btnAction={"You've signed up for 365 days successfully"} />
            <CardParagraph />     
        </div>
    </Slider>
  );
}
}