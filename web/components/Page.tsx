import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Page: React.FC = (props) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/ypr6nez.css" />
    </Head>
    {props.children}
  </>
);

export default Page;
