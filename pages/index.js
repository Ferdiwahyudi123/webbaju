import Layout from "../comps/Layout";
import SectionPrice from "../comps/sectionPrice";
import SectionHero from "../comps/herosection";

export default function Home() {
  return (
    <div>
      <Layout title="home">
        <SectionHero />
        <SectionPrice />
      </Layout>
    </div>
  );
}
