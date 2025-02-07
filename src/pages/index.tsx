import Image from 'next/image';
import { HomeContainer, ProductLink } from '../styles/pages/home';
import shirt1 from '../assets/shirts/1.png';
import shirt2 from '../assets/shirts/2.png';
import shirt3 from '../assets/shirts/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <ProductLink href="#">
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductLink>

      <ProductLink href="#">
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductLink>
    </HomeContainer>
  );
}
