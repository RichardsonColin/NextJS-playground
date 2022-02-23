import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/*
  Custom _document.js to support proper SSR of styled-components
    - docs: https://styled-components.com/docs/advanced#server-side-rendering
    - example: https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
*/
export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const styleSheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styleSheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styleSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styleSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='toast'></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
