import Head from "next/head";

const Index = (props:any) => {
  return (
    <div>
      <Head>
        <title>{props?.data?.title}</title>
        <meta name="description" content={props?.data?.description} key="desc" />
      </Head>
    </div>
  )
}

export default Index