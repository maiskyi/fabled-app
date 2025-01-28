import { Dictionary, entries } from 'lodash';
import { FC, Fragment } from 'react';

import { Box, Divider, List } from '@core/uikit';

import { ProfileMenuItem } from '../../Profile.types';

interface ProfileMenuProps {
  menu: Dictionary<ProfileMenuItem[]>;
}

export const ProfileMenu: FC<ProfileMenuProps> = ({ menu }) => {
  return (
    <Fragment>
      {entries(menu).map(([title, items], index, arr) => {
        return (
          <Fragment key={title}>
            <List>
              {items.map(({ label, onClick, icon }) => (
                <List.Item
                  button={!!onClick}
                  key={label}
                  lines="none"
                  onClick={onClick}
                >
                  <List.Icon color="secondary" name={icon} />
                  <List.Label>{label}</List.Label>
                </List.Item>
              ))}
            </List>
            {index + 1 < arr.length && (
              <Box paddingBottom={12} paddingInline={20} paddingTop={12}>
                <Divider />
              </Box>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
};
