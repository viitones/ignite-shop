import Image from "next/image";

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/1.png';
import camiseta2 from '../assets/2.png';
import camiseta3 from '../assets/3.png';
import camiseta4 from '../assets/4.png';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 99,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 99,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta4} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 99,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
