import { ModalComponent, Header, Content, Box, Footer } from '@core/uikit';
import { Fragment } from 'react/jsx-runtime';

export const Volume: ModalComponent = () => {
  return (
    <Fragment>
      <Header collapse="fade"></Header>
      <Content />
      <Box paddingInline={20}></Box>
      <Content />
      <Footer />
    </Fragment>
  );
};
