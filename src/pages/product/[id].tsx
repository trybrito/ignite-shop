import { stripe } from '@/src/lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Stripe from 'stripe';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageURL: string;
    description: string;
    price: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageURL} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button type="button">Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // carregar produtos mais vendidos / mais acessados (ideia de estratégia com SSG)

  return {
    paths: [
      {
        params: { id: 'prod_RjqVm5sJdoaxZI' },
      },
    ],
    fallback: true, // 'blocking' for waiting the data load without showing anything to the user
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id);
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;
  const convertedPrice = Number(price.unit_amount) / 100;
  const formattedPrice = convertedPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const second = 1;
  const minute = second * 60;
  const hour = minute * 60;

  const revalidateEveryTwoHours = hour * 2;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageURL: product.images[0],
        price: formattedPrice,
        description: product.description,
      },
    },
    revalidate: revalidateEveryTwoHours,
  };
};
