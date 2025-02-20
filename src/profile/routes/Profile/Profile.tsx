import { Header, Page, Content, SafeArea, Grid } from '@core/uikit';
import { useAuth } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { withLoad } from '@core/analytics';

import { ProfileUserCard } from './_partitions/ProfileUserCard';
import { ProfileMenu } from './_partitions/ProfileMenu';
import { ProfileActions } from './_partitions/ProfileActions';
import { useProfileMenu } from './Profile.hooks';
import { ProfilePlan } from './_partitions/ProfilePlan';

export const Profile = withLoad({
  category: 'Profile',
  name: 'Profile',
})(function Profile() {
  const { t } = useTranslation();
  const { user } = useAuth();

  const { menu, hasActiveSubscription } = useProfileMenu();

  const title = t('pages.profile');

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content fullscreen inset={false}>
        <SafeArea safe={['bottom']}>
          <Grid>
            <Grid.Row>
              <Grid.Cell>
                <ProfileUserCard />
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row>
              <Grid.Cell>
                {!hasActiveSubscription && <ProfilePlan />}
                <ProfileMenu menu={menu} />
                {!user?.isAnonymous && <ProfileActions />}
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </SafeArea>
      </Content>
    </Page>
  );
});
