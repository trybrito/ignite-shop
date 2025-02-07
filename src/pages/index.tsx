import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { HomeContainer, ProductLink } from '../styles/pages/home';
import shirt1 from '../assets/shirts/1.png';
import shirt2 from '../assets/shirts/2.png';
import shirt3 from '../assets/shirts/3.png';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <ProductLink href="#" className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductLink>

      <ProductLink href="#" className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductLink>

      <ProductLink href="#" className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductLink>

      <ProductLink href="#" className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductLink>
    </HomeContainer>
  );
}
