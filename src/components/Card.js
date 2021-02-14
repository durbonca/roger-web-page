import React from 'react';
import styled from 'styled-components';


const GridCard = styled.div `
padding: 1.5em;
display: grid;
grid-template-columns: auto;
grid-template-rows: 4fr 2fr 1fr 1fr;

@media (min-width: 450px)
{
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-columns: 2fr 2fr;
    grid-template-areas: 'thumbnail title'
                         'thumbnail description'
                         'thumbnail price'
}
`

const Thumbnail = styled.div.attrs ( props => ({
    img: props.img
}))
`
grid-area: thumbnail;
background-image: url(${props => props.img});
background-position:center;
background-size: cover;
`

const Title = styled.h1`
grid-area: title;
font-weight: bold;
font-size: 2rem;
padding-left: .5rem
`
const Description = styled.p`
grid-area: description;
padding-left: .5rem
`
const Price = styled.small`
grid-area: price;
text-align: right;
`

class Card extends React.Component {
    render() {
      return <GridCard>
                <Thumbnail img={this.props.img}/>
                <Title className="">{this.props.title}</Title>
                <Description>{this.props.description}</Description>
                <Price>{this.props.price}</Price>
             </GridCard>
    }
  }


  export default Card