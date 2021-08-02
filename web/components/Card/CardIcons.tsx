import React from 'react';
import styled, {css} from 'styled-components';

interface SingleQuoteProps {
  color?: string;
  width?: number;
  height?: number;
  style?: any;
}

interface PuzzlePersonProps {
  color?: string;
  width?: number;
  height?: number;
  style?: any;
}

export const PuzzlePerson = ({style = {}}: PuzzlePersonProps) => {
  return (
    <svg
      width="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 91 108"
      preserveAspectRatio="xMinYMin meet"
    >
      <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" fill="#000">
        <path fill="#fff" d="M0 0h91v108H0z" />
        <path d="M83.348 88.589L57.163 75.517v-8.14c4.086-1.983 19.121-10.772 19.121-32.28C76.284 11.012 59.474 1 50.468 1H41c-8.988 0-25.816 10.012-25.816 34.097 0 21.508 15.034 30.278 19.121 32.28v8.14L8.12 88.59C3.737 90.777 1 95.189 1 100.12v5.303a1.573 1.573 0 103.144 0v-5.303a9.68 9.68 0 015.381-8.714L36.58 77.909c.536-.26.87-.816.87-1.41V66.377c0-.649-.408-1.242-1-1.465-.74-.278-18.122-7.268-18.122-29.795 0-23.622 16.625-30.964 22.69-30.964h3.163v16.335a9.566 9.566 0 00-4.809-1.28c-5.38 0-9.764 4.395-9.764 9.79 0 5.396 4.383 9.79 9.764 9.79a9.668 9.668 0 004.809-1.28v48.04c0 .39.129.78.425 1.095.018.018.037.037.037.055l.055.056.056.056c.037.037.074.055.11.092.611.408 1.425.353 1.961-.166l.018-.02a6.55 6.55 0 014.716-1.983c3.643 0 6.62 2.985 6.62 6.638 0 3.652-2.977 6.637-6.62 6.637a6.58 6.58 0 01-4.715-1.983l-.038-.037a1.553 1.553 0 00-2.07-.075c-.02 0-.02.019-.038.037-.018.019-.055.038-.074.075-.018.018-.037.037-.055.074a1.562 1.562 0 00-.407 1.075v8.084a1.572 1.572 0 103.144 0v-5.062a9.551 9.551 0 004.253.983c5.382 0 9.764-4.394 9.764-9.79 0-5.395-4.383-9.79-9.764-9.79a9.494 9.494 0 00-4.253.983V34.096c0-.39-.148-.779-.444-1.094 0 0-.019-.018-.019-.037l-.055-.056a28.989 28.989 0 01-.055-.055c-.019-.019-.037-.019-.056-.037a.254.254 0 00-.074-.056.14.14 0 00-.074-.037c-.018-.019-.037-.019-.055-.037-.037-.019-.056-.037-.093-.037-.018 0-.037-.019-.055-.019-.037-.018-.074-.018-.093-.037-.018 0-.037-.018-.037-.018-.037-.019-.074-.019-.11-.037h-.038c-.037 0-.092-.019-.13-.019H45.9a1.62 1.62 0 00-1.239.426l-.018.019c-.019.019-.019.037-.037.037l-.074.074c-1.276 1.595-3.162 2.522-5.141 2.522-3.643 0-6.62-2.985-6.62-6.638 0-3.652 2.977-6.638 6.62-6.638 1.997 0 3.865.927 5.14 2.522.038.037.056.074.093.111l.019.019c.074.074.148.148.24.204.019.018.056.037.074.055.019.019.037.019.056.037l.11.056s.02 0 .02.019c.425.185.942.167 1.35-.075.036-.018.073-.055.129-.074.018-.018.037-.018.037-.037a.255.255 0 01.074-.055l.055-.056.056-.056s.018-.018.018-.037a1.53 1.53 0 00.444-1.094V4.152h3.162c6.066 0 22.69 7.342 22.69 30.964 0 22.527-17.383 29.499-18.122 29.796-.61.222-.999.815-.999 1.464V76.5c0 .593.333 1.15.87 1.409L81.96 91.407a9.68 9.68 0 015.382 8.714v5.303a1.573 1.573 0 103.143 0v-5.303c-.018-4.932-2.737-9.344-7.138-11.532z" />
      </mask>
      <path
        d="M83.348 88.589L57.163 75.517v-8.14c4.086-1.983 19.121-10.772 19.121-32.28C76.284 11.012 59.474 1 50.468 1H41c-8.988 0-25.816 10.012-25.816 34.097 0 21.508 15.034 30.278 19.121 32.28v8.14L8.12 88.59C3.737 90.777 1 95.189 1 100.12v5.303a1.573 1.573 0 103.144 0v-5.303a9.68 9.68 0 015.381-8.714L36.58 77.909c.536-.26.87-.816.87-1.41V66.377c0-.649-.408-1.242-1-1.465-.74-.278-18.122-7.268-18.122-29.795 0-23.622 16.625-30.964 22.69-30.964h3.163v16.335a9.566 9.566 0 00-4.809-1.28c-5.38 0-9.764 4.395-9.764 9.79 0 5.396 4.383 9.79 9.764 9.79a9.668 9.668 0 004.809-1.28v48.04c0 .39.129.78.425 1.095.018.018.037.037.037.055l.055.056.056.056c.037.037.074.055.11.092.611.408 1.425.353 1.961-.166l.018-.02a6.55 6.55 0 014.716-1.983c3.643 0 6.62 2.985 6.62 6.638 0 3.652-2.977 6.637-6.62 6.637a6.58 6.58 0 01-4.715-1.983l-.038-.037a1.553 1.553 0 00-2.07-.075c-.02 0-.02.019-.038.037-.018.019-.055.038-.074.075-.018.018-.037.037-.055.074a1.562 1.562 0 00-.407 1.075v8.084a1.572 1.572 0 103.144 0v-5.062a9.551 9.551 0 004.253.983c5.382 0 9.764-4.394 9.764-9.79 0-5.395-4.383-9.79-9.764-9.79a9.494 9.494 0 00-4.253.983V34.096c0-.39-.148-.779-.444-1.094 0 0-.019-.018-.019-.037l-.055-.056a28.989 28.989 0 01-.055-.055c-.019-.019-.037-.019-.056-.037a.254.254 0 00-.074-.056.14.14 0 00-.074-.037c-.018-.019-.037-.019-.055-.037-.037-.019-.056-.037-.093-.037-.018 0-.037-.019-.055-.019-.037-.018-.074-.018-.093-.037-.018 0-.037-.018-.037-.018-.037-.019-.074-.019-.11-.037h-.038c-.037 0-.092-.019-.13-.019H45.9a1.62 1.62 0 00-1.239.426l-.018.019c-.019.019-.019.037-.037.037l-.074.074c-1.276 1.595-3.162 2.522-5.141 2.522-3.643 0-6.62-2.985-6.62-6.638 0-3.652 2.977-6.638 6.62-6.638 1.997 0 3.865.927 5.14 2.522.038.037.056.074.093.111l.019.019c.074.074.148.148.24.204.019.018.056.037.074.055.019.019.037.019.056.037l.11.056s.02 0 .02.019c.425.185.942.167 1.35-.075.036-.018.073-.055.129-.074.018-.018.037-.018.037-.037a.255.255 0 01.074-.055l.055-.056.056-.056s.018-.018.018-.037a1.53 1.53 0 00.444-1.094V4.152h3.162c6.066 0 22.69 7.342 22.69 30.964 0 22.527-17.383 29.499-18.122 29.796-.61.222-.999.815-.999 1.464V76.5c0 .593.333 1.15.87 1.409L81.96 91.407a9.68 9.68 0 015.382 8.714v5.303a1.573 1.573 0 103.143 0v-5.303c-.018-4.932-2.737-9.344-7.138-11.532z"
        fill="#fff"
      />
      <path
        d="M83.348 88.589L57.163 75.517v-8.14c4.086-1.983 19.121-10.772 19.121-32.28C76.284 11.012 59.474 1 50.468 1H41c-8.988 0-25.816 10.012-25.816 34.097 0 21.508 15.034 30.278 19.121 32.28v8.14L8.12 88.59C3.737 90.777 1 95.189 1 100.12v5.303a1.573 1.573 0 103.144 0v-5.303a9.68 9.68 0 015.381-8.714L36.58 77.909c.536-.26.87-.816.87-1.41V66.377c0-.649-.408-1.242-1-1.465-.74-.278-18.122-7.268-18.122-29.795 0-23.622 16.625-30.964 22.69-30.964h3.163v16.335a9.566 9.566 0 00-4.809-1.28c-5.38 0-9.764 4.395-9.764 9.79 0 5.396 4.383 9.79 9.764 9.79a9.668 9.668 0 004.809-1.28v48.04c0 .39.129.78.425 1.095.018.018.037.037.037.055l.055.056.056.056c.037.037.074.055.11.092.611.408 1.425.353 1.961-.166l.018-.02a6.55 6.55 0 014.716-1.983c3.643 0 6.62 2.985 6.62 6.638 0 3.652-2.977 6.637-6.62 6.637a6.58 6.58 0 01-4.715-1.983l-.038-.037a1.553 1.553 0 00-2.07-.075c-.02 0-.02.019-.038.037-.018.019-.055.038-.074.075-.018.018-.037.037-.055.074a1.562 1.562 0 00-.407 1.075v8.084a1.572 1.572 0 103.144 0v-5.062a9.551 9.551 0 004.253.983c5.382 0 9.764-4.394 9.764-9.79 0-5.395-4.383-9.79-9.764-9.79a9.494 9.494 0 00-4.253.983V34.096c0-.39-.148-.779-.444-1.094 0 0-.019-.018-.019-.037l-.055-.056a28.989 28.989 0 01-.055-.055c-.019-.019-.037-.019-.056-.037a.254.254 0 00-.074-.056.14.14 0 00-.074-.037c-.018-.019-.037-.019-.055-.037-.037-.019-.056-.037-.093-.037-.018 0-.037-.019-.055-.019-.037-.018-.074-.018-.093-.037-.018 0-.037-.018-.037-.018-.037-.019-.074-.019-.11-.037h-.038c-.037 0-.092-.019-.13-.019H45.9a1.62 1.62 0 00-1.239.426l-.018.019c-.019.019-.019.037-.037.037l-.074.074c-1.276 1.595-3.162 2.522-5.141 2.522-3.643 0-6.62-2.985-6.62-6.638 0-3.652 2.977-6.638 6.62-6.638 1.997 0 3.865.927 5.14 2.522.038.037.056.074.093.111l.019.019c.074.074.148.148.24.204.019.018.056.037.074.055.019.019.037.019.056.037l.11.056s.02 0 .02.019c.425.185.942.167 1.35-.075.036-.018.073-.055.129-.074.018-.018.037-.018.037-.037a.255.255 0 01.074-.055l.055-.056.056-.056s.018-.018.018-.037a1.53 1.53 0 00.444-1.094V4.152h3.162c6.066 0 22.69 7.342 22.69 30.964 0 22.527-17.383 29.499-18.122 29.796-.61.222-.999.815-.999 1.464V76.5c0 .593.333 1.15.87 1.409L81.96 91.407a9.68 9.68 0 015.382 8.714v5.303a1.573 1.573 0 103.143 0v-5.303c-.018-4.932-2.737-9.344-7.138-11.532z"
        stroke="#fff"
        mask="url(#a)"
      />
    </svg>
  );
};

export const SingleQuote = ({
  color = '#71976B',
  style = {},
}: SingleQuoteProps) => {
  return (
    <svg
      width="100%"
      preserveAspectRatio="xMinYMin meet"
      style={style}
      viewBox="0 0 15 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14.5v14.1h14.1V14.5H4.7c0-5.2 4.2-9.4 9.4-9.4V.4C6.3.4 0 6.7 0 14.5z"
        fill={color}
      />
    </svg>
  );
};
