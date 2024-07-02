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
                    { label: 'Home', onClick: () => {} },
                    { label: 'About', onClick: () => {} },
                    { label: 'Projects', onClick: () => {} },    
                    { label: 'Resume', onClick: () => {} },
                    { label: 'Contact', onClick: () => {} },
                    ]}
                />
                ) : (
                <Nav direction="row">
                    <Anchor href="#" label="Home" />
                    <Anchor href="#" label="About" />
                    <Anchor href="#" label="Projects" />
                    <Anchor href="#" label="Resume" />
                    <Anchor href="#" label="Contact" />
                </Nav>
                )
            }
            </ResponsiveContext.Consumer>
        </Header>
    )
}

export default CollapsibleNav;
