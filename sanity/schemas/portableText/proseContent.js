import {Subscript2, Superscript2} from '@styled-icons/remix-editor/';
import styled from 'styled-components';
import React from 'react';

const EditorSubhead = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  color: #999;
`;

const EditorSubheadSmall = styled.div`
  font-weight: bold;
  font-size: 1em;
  color: #999;
`;

const EditorBody = styled.div`
  font-size: 1.2em;
`;

const EditorBodySmall = styled.div`
  font-size: 1em;
`;

const EditorBodyXS = styled.div`
  font-size: 0.8em;
`;

const proseContent = {
  name: 'proseContent',
  type: 'array',
  of: [
    {name: 'ptImage', type: 'ptImage'},
    {name: 'ptFile', type: 'ptFile'},
    {name: 'ptEmbed', type: 'ptEmbed'},
    {name: 'ptFloatBreak', type: 'ptFloatBreak'},
    {
      type: 'block',
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {
            title: 'Superscript',
            value: 'sup',
            blockEditor: {
              icon: Superscript2,
              render: ({children}) => <sup>{children}</sup>,
            },
          },
          {
            title: 'Subscript',
            value: 'sub',
            blockEditor: {
              icon: Subscript2,
              render: ({children}) => <sub>{children}</sub>,
            },
          },
          // {title: 'StrikeThru', value: 'strike-through'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'link',
            fields: [
              {
                name: 'link',
                type: 'link',
              },
            ],
          },
        ],
      },
      styles: [
        {
          title: 'Body',
          value: 'body_md',
          blockEditor: {
            render: ({children}) => <EditorBody>{children}</EditorBody>,
          },
        },
        {
          title: 'Body Small',
          value: 'body_sm',
          blockEditor: {
            render: ({children}) => (
              <EditorBodySmall>{children}</EditorBodySmall>
            ),
          },
        },
        {
          title: 'Body Extra Small',
          value: 'body_xs',
          blockEditor: {
            render: ({children}) => <EditorBodyXS>{children}</EditorBodyXS>,
          },
        },
        {title: 'Caption', value: 'caption'},
        {title: 'Heading Large', value: 'h2'},
        {title: 'Heading Medium', value: 'h3'},
        {title: 'Heading Small', value: 'h4'},
        {
          title: 'Sub-Heading',
          value: 'sub_head',
          blockEditor: {
            render: ({children}) => <EditorSubhead>{children}</EditorSubhead>,
          },
        },
        {
          title: 'Sub-Heading Small',
          value: 'sub_head_sm',
          blockEditor: {
            render: ({children}) => (
              <EditorSubheadSmall>{children}</EditorSubheadSmall>
            ),
          },
        },
        {title: 'Quote', value: 'blockquote'},
      ],
    },
  ],
};

export default proseContent;
