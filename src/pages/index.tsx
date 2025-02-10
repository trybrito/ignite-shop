import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { HomeContainer, ProductLink } from '../styles/pages/home';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import { GetStaticProps } from 'next';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <ProductLink key={product.id} href="#" className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </ProductLink>
        );
      })}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const convertedPrice = price.unit_amount ? price.unit_amount / 100 : 0;
    const formattedPrice = convertedPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice,
    };
  });

  const seconds = 1;
  const minute = seconds * 60;
  const hour = minute * 60;

  const revalidateEveryTwoHours = hour * 2;

  return {
    props: {
      products,
    },
    revalidate: revalidateEveryTwoHours,
  };
};
