import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product';
// import { useRouter } from 'next/router';

export default function Product() {
  // const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,99</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non
          ipsum illum adipisci sed velit ab, veritatis officiis nesciunt
          consectetur enim ea suscipit, esse tenetur numquam deserunt corporis!
          Tempora, saepe.
        </p>
        <button type="button">Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
