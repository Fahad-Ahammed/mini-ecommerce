import Checkout from "@/templates/checkout";

const Index = () => {
  return (
    <section>
      <Checkout />
    </section>
  );
};

export const getStaticProps = async () => {
  const seo = {
    title: `FSH | Checkout` ?? "",
    description: "" ?? "",
  };
  const content = {
    pageData: {},
    seo,
  };
  if (!content) return false;

  return {
    props: {
      content,
    },
  };
};

export default Index;
