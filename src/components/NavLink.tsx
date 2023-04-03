import Link from '@src/components/Link';
import StyleSheet from '@src/interfaces/StyleSheet';
import { useRouter } from 'next/router';
import React from 'react';

export { NavLink };

type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  ref?: any;
};

const NavLink = React.forwardRef(
  ({ href, exact, children, ...props }: NavLinkProps, ref) => {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
      <Link ref={ref} isActive={isActive} href={href} {...props}>
        {children}
      </Link>
    );
  }
);

NavLink.defaultProps = {
  exact: false,
};
