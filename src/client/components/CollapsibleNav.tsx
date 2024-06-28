import { Anchor, Header, Menu, Nav, ResponsiveContext } from 'grommet'

const CollapsibleNav = () => {
    return (
        <Header background="dark-1" pad="medium">
            <ResponsiveContext.Consumer>
            {(responsive) =>
                responsive === 'small' ? (
                <Menu
                    label="Menu"
                    items={[
                    { label: 'LinkedIn', onClick: () => {} },
                    { label: 'GitHub', onClick: () => {} },
                    ]}
                />
                ) : (
                <Nav direction="row">
                    <Anchor href="#" label="LinkedIn" />
                    <Anchor href="#" label="GitHub" />
                </Nav>
                )
            }
            </ResponsiveContext.Consumer>
        </Header>
    )
}

export default CollapsibleNav;
