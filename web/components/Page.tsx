import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

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
  </>
);

export default Page;
