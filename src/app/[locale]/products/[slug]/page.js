import {Metadata} from "next";
import {resolve} from "path";

export const generateMetadata = async ({params}) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${params.slug}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function productDetales({params}) {
  return <h1>product slug = {params.slug}</h1>;
}
