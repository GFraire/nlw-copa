import { instance } from "../api";
interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return <h1>Contagem: {props.count}</h1>;
}

export const getServerSideProps = async () => {
  const response = await instance.get("pools/count");

  return {
    props: {
      count: response.data.count,
    },
  };
};
