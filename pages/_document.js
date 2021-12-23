import Document, { Html, Head, Main, NextScript } from 'next/document';
// import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // creates an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // retrieves styles from components in the page
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    // extracts the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // passes styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <div id='toast' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
