import "../../style/home.scss";
import HeaderMain from "../../components/HeaderMain";
import MainContent from "../../components/MainContent";
import Teste from "../../assets/teste.png";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <MainContent prop={{ imageSrc: Teste }} />
    </>
  );
}
