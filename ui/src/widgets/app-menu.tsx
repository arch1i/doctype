import { Divider } from '@mantine/core';

import { useLocationArray } from '~/app/router/use-location-array';
import { useAppDispatch } from '~/app/store/hooks';

import { AuthActionsButton } from '~/features/auth/ui/buttons/session-action.button';

import { create as createCv } from '~/entities/cv/model/effects/create';

import { NavigationButton } from '~/shared/ui/buttons/navigation';
import { ToolbarActionButton } from '~/shared/ui/buttons/toolbar-action';
import { Icon } from '~/shared/ui/icon';

export const AppMenu = () => {
    const location = useLocationArray();

    return (
        <header className="py-[0.9rem] flex flex-col min-h-screen min-w-full">
            <section className="gap-y-2 flex flex-col grow">
                <NavigationButton
                    pushTo="/"
                    content={
                        <Icon name="home" className="w-[1.09rem] h-[1.09rem] text-accent" />
                    }
                />
                <NavigationButton
                    pushTo="/editor/12"
                    content={
                        <Icon name="app" className="w-[1.09rem] h-[1.09rem] text-accent" />
                    }
                />

                {location[0] !== 'sign-in' ? (
                    <Divider
                        styles={{
                            root: {
                                height: '1px',
                                width: '100%',
                                borderColor: 'rgb(229 231 235 / 0.7)',
                            },
                        }}
                        orientation="horizontal"
                    />
                ) : null}

                <HomeToolbar />
                <EditorToolbar />
            </section>

            <section>
                <AuthActionsButton />
            </section>
        </header>
    );
};

const HomeToolbar = () => {
    const location = useLocationArray();
    const show = location[0] === '';

    const dispatch = useAppDispatch();

    const _createCv = () => {
        dispatch(createCv());
    };

    return (
        <section hidden={!show}>
            <ToolbarActionButton
                onClick={_createCv}
                content={<Icon name="write" className="w-[1.09rem] h-[1.09rem] text-accent" />}
            />
        </section>
    );
};

const EditorToolbar = () => {
    const location = useLocationArray();
    const show = location[0] === 'editor';

    return (
        <section hidden={!show}>
            <ToolbarActionButton
                onClick={() => null}
                content={<Icon name="share" className="w-[1.09rem] h-[1.09rem] text-accent" />}
            />
        </section>
    );
};