import { memo } from 'react';

import { Page } from '@core/uikit';
import { Route, RouterOutlet } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

import { Index } from './Index/Index';
import { ContactUs } from './ContactUs/ContactUs';
import { Feedback } from './Feedback/Feedback';

export const Profile = memo(function Profile() {
  return (
    <Page>
      <RouterOutlet>
        <Route exact path={RoutePath.Profile}>
          <Index />
        </Route>
        <Route exact path={RoutePath.ProfileContactUs}>
          <ContactUs />
        </Route>
        <Route exact path={RoutePath.ProfileFeedback}>
          <Feedback />
        </Route>
      </RouterOutlet>
    </Page>
  );
});
