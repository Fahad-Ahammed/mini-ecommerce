import Cart from "@/templates/cart";

const Index = () => {
  return (
    <section>
      <Cart />
    </section>
  );
};


export const getStaticProps = async () => {
  const seo = {
    title: `FSH | Cart` ?? "",
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
