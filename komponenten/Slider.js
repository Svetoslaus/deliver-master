import { Carousel } from "react-bootstrap";
import Image from "next/image";


export default function Slider() {
    return (
      <div>
        <Carousel controls={false} fade={true} interval={3000}>
    <Carousel.Item>
        <Image className="d-block w-100 rounded-3" src='/bilder/essen/spaghetti.jpg' alt="spaghetti" width={3000} height={1000}/>
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100 rounded-3" src='/bilder/essen/pizza.jpg' alt="pizza" width={3000} height={1000}/>
    </Carousel.Item>
    <Carousel.Item>
        <Image className="d-block w-100 rounded-3" src='/bilder/essen/fish.jpg' alt="fish" width={3000} height={1000}/>
    </Carousel.Item>
  </Carousel>
      </div>
    )
  }
