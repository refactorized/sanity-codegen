import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const callRailUrl =
  'https://js.callrail.com/group/0/5e3092e9e5712fb4e431/12/icap.js?t=1621431764435&amp;Facebook__fbp=fb.1.1611701572277.1821419604&amp;ga=GA1.2.2076040478.1611701572&amp;uuid=b1d7507e-f9ad-42fc-829c-85d875676b19&amp;ids%5B%5D=153392284';

const Page: React.FC = (props: {
  children: React.ReactNode;
  metatitle: string;
  description?: string;
}) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/ypr6nez.css" />
      <title>{props.metatitle}</title>
      <meta property="og:title" content="My page title" key="title" />
      <meta name="description" content={props.description} key="description" />
    </Head>
    {props.children}
    <script type="text/javascript" src={callRailUrl}></script>
  </>
);

export default Page;
