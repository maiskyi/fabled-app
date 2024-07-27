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
        <Content>
          <Form.Text
            label="Title 1"
            name="test1"
            validation={{ required: true }}
          />
          <Form.Text
            label="Title 2"
            name="test2"
            validation={{ required: true }}
          />
          <Form.Select
            label="Title 3"
            name="test3"
            options={[]}
            validation={{ required: true }}
          />
          <Form.Textarea
            label="Title 4"
            name="test4"
            validation={{ required: true }}
          />
        </Content>
        <Footer>
          <Form.Submit loading={isPending}>Create</Form.Submit>
        </Footer>
      </Form>
    </Page>
  );
});
