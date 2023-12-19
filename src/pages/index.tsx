import Home from "@/templates/home";

export default function Index(props: any) {
  return (
    <section>
      <Home />
    </section>
  );
}

export const getStaticProps = async () => {
  const seo = {
    title: `FSH | Home` ?? "",
    description: "Explore products" ?? "",
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
