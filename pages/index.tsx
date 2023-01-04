import { useState } from 'react';
import {
  Htag,
  Input,
  Button,
  P,
  Tag,
  Rating,
  Textarea
} from "../components";

import { withLayout } from '../layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">h1</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size='lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum!</P>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum!</P>
      <P size='sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum!</P>

      <Tag size="sm">Small</Tag>
      <Tag size="m" color="red">Small</Tag>
      <Tag size="m" color="green">Small</Tag>

      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ul>
        {menu.map((m) => {
          return <li key={m._id.secondCategory}>{m._id.secondCategory}</li>;
        })}
      </ul>

      <Input placeholder='test' />
      <Textarea />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}