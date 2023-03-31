import { Header } from "../../components/Header";
import { SiteBar } from "../../components/SiteBar";
import { HomeMainWrap, HomeMainWrapTable, HomeWrap } from "./MainStyle";

export const Main = ({ children }) => {
  return (
    <HomeWrap>
      <SiteBar />
      <HomeMainWrap>
        <Header />
        <HomeMainWrapTable>{children}</HomeMainWrapTable>
      </HomeMainWrap>
    </HomeWrap>
  );
};
