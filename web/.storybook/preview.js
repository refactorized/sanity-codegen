import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return (
      <div
        {...props}
        style={{
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#DCDCDC',
          // maxWidth: props.width,
          height: props.height,
          width: '100%',
        }}
      >
        Mock Image
      </div>
    );
  },
});

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
