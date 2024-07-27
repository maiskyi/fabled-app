import { memo } from 'react';

import { Page, Content, Form, Footer } from '@core/uikit';
import { useAddDocument } from '@core/firestore';
import { FireStoreDocument } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';

export const Create = memo(function Create() {
  const { isPending, mutateAsync } = useAddDocument<DTO.Fable>();

  const handleOnSubmit = (data: DTO.Fable) => {
    mutateAsync({
      data,
      doc: FireStoreDocument.Fable,
    });
  };

  return (
    <Page>
      <Form<DTO.Fable> onSubmit={handleOnSubmit}>
        <Content></Content>
        <Footer>
          <Form.Submit loading={isPending}>Create</Form.Submit>
        </Footer>
      </Form>
    </Page>
  );
});
