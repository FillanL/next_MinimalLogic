import Head from "next/head";
interface SeoAttributes {
  title: string;
  description: string;
  content: string;
}
const Seo = ({
  title,
  description,
  content,
}: SeoAttributes): React.ReactElement => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name={description} content={content} />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          title
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title}</title>
    </Head>
  );
};

export default Seo;
