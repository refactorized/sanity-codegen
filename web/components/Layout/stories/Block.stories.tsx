import Block, {BlockComponentProps} from '../Block';
import Layout from '../';
import theme from '../../../themes';
import * as t from '../../../themes/fn';
import styled from 'styled-components';
import {Story} from '@storybook/react';

export default {
  title: 'Components/Layout',
  component: Block,
};

const Inner = styled.div`
  height: 200px;
  background-color: ${t.color('background')};
`;

export const Blocks: Story = () => {
  return (
    <Layout theme={theme}>
      <Block narrow background="blue">
        <Inner>
          <p>This text lives inside a Narrow Block, coded as:</p>
          <pre>{'<Block narrow background="blue">'}</pre>
        </Inner>
      </Block>
      <Block background="green">
        <Inner>
          <p>This text lives inside a nomal Block, coded as:</p>
          <pre>{'<Block background="green">'}</pre>
        </Inner>
      </Block>
    </Layout>
  );
};
