import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { type ReactNode } from 'react';

const theme = createTheme({
    fontFamily: 'Roboto',
    white: '#f5f5f5',
    fontSizes: { sm: '0.87rem', md: '0.94' },
});

export const WithMantine = (component: () => ReactNode) => () => {
    return (
        <MantineProvider theme={theme}>
            <Notifications />
            {component()}
        </MantineProvider>
    );
};