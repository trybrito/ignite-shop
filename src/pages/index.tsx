import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { HomeContainer } from '../styles/pages/home';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: string;
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
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Image src={product.imageURL} width={520} height={480} alt="" />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price; // In cents

    const convertedPrice = Number(price.unit_amount) / 100;
    const formattedPrice = convertedPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: formattedPrice,
    };
  });

  const second = 1;
  const minute = second * 60;
  const hour = minute * 60;

  const revalidateEveryTwoHours = hour * 2;

  return {
    props: {
      products,
    },
    revalidate: revalidateEveryTwoHours,
  };
};
