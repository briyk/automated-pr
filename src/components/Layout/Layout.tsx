import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
  padding?: string;
  gap?: string;
}

const StyledLayout = styled.div<Omit<LayoutProps, 'children'>>`
  width: 100%;
  max-width: ${({ maxWidth = '1200px' }) => maxWidth};
  margin: 0 auto;
  padding: ${({ padding = '1rem' }) => padding};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: ${({ gap = '1rem' }) => gap};
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
  text-align: center;
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  maxWidth,
  padding,
  gap,
}) => {
  return (
    <StyledLayout maxWidth={maxWidth} padding={padding} gap={gap}>
      <Header>
        {/* Add your header content here */}
        <h1>Your App Name</h1>
        <nav>{/* Add navigation items here */}</nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p style={{ overflowWrap: 'break-word', textOverflow: 'ellipsis' }}>
          © {new Date().getFullYear()} Your App Name. All rights reserved.
        </p>
      </Footer>
    </StyledLayout>
  );
};

export default Layout;
