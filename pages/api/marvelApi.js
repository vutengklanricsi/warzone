// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import md5 from "js-md5";

export async function getStaticProps() {
  const ts = Number(new Date()).toString();

  md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);
  const hash = md5.create();
  hash.update(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);
  hash.hex();

  const URL = `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
