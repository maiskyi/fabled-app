import { memo } from 'react';

import { Page, Content, Button } from '@core/uikit';
import { useAddDocument } from '@core/firestore';
import { FireStoreDocument } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';

export const Create = memo(function Create() {
  const { mutateAsync } = useAddDocument<DTO.Fable>();

  const handleOnSubmit = () => {
    mutateAsync({
      doc: FireStoreDocument.Fable,
      data: {
        title: 'test',
      },
    });
  };

  return (
    <Page>
      <Content>
        <Button onClick={handleOnSubmit}>Create</Button>
      </Content>
    </Page>
  );
});
