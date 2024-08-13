import { memo } from 'react';

import { Page, Content, Form, Header, Container } from '@core/uikit';
import { FunctionName } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
// import { Redirect } from '@core/navigation';
import { useStaticOptions } from '@bootstrap/hooks';
import { useMutationFunction } from '@core/functions';

import { FormField } from './Create.const';
import { useCreate } from './Create.hook';

export const Create = memo(function Create() {
  const { initialValue } = useCreate();

  const {
    // data,
    isPending,
    mutateAsync,
  } = useMutationFunction<DTO.RequestInput, DTO.Fable>({
    name: FunctionName.OnFableRequest,
  });

  const { readTime } = useStaticOptions();

  const handleOnSubmit = (data: DTO.RequestInput) => {
    mutateAsync(data);
  };

  // console.log(data);

  // if (isSuccess) {
  //   return <Redirect pathname={RoutePath.Request} params={{ id: data.id }} />;
  // }

  return (
    <Page>
      <Header translucent>
        <Header.Back />
        <Header.Title>Create Fable</Header.Title>
      </Header>
      <Content inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">Create Fable</Header.Title>
        </Header>
        <Form<DTO.FableRequest>
          defaultValues={initialValue}
          onSubmit={handleOnSubmit}
        >
          <Container padding>
            <Form.Text
              label="Character name"
              placeholder="e.g. Mickey Mouse"
              name={FormField.CharacterName}
              validation={{ required: true }}
            />
            <Form.Select
              label="Read time"
              placeholder="Select reed time"
              name={FormField.ReadTime}
              options={readTime}
              validation={{ required: true }}
            />
            <Form.Text
              label="Scene of action"
              placeholder="e.g. Magic forest"
              name={FormField.SceneOfAction}
              validation={{ required: true }}
            />
            <Form.Textarea
              label="What is this fable about"
              placeholder="e.g. How to build a friendship"
              name={FormField.WhatIsThisFableAbout}
              validation={{ required: true }}
            />
          </Container>
          <Container padding>
            <Form.Submit loading={isPending}>Create</Form.Submit>
          </Container>
        </Form>
      </Content>
    </Page>
  );
});
