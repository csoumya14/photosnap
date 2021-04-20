import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.ul`
  width: 19.375rem;
  height: 7.563rem;
  margin-top: 3.063rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .link {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 15.62px;
    letter-spacing: 2px;
    height: 1rem;
    &:hover,
    &:focus {
      text-decoration: underline;
      opacity: 0.3;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    flex-direction: row;
    width: 315px;
    height: 0px;
    margin-left: 39px;
    padding: 0px;
    .link {
      height: 4rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    flex-direction: column;
    margin-top: 4rem;
  }
`;

const Links = () => {
  const linkElements = [
    {
      id: '1',
      name: 'Home',
      linkTo: '/',
    },
    {
      id: '2',
      name: 'Stories',
      linkTo: '/stories',
    },
    {
      id: '3',
      name: 'Features',
      linkTo: '/features',
    },
    {
      id: '4',
      name: 'Pricing',
      linkTo: '/pricing',
    },
  ];

  return (
    <LinkContainer>
      {linkElements.map(linkElement => (
        <li key={linkElement.id}>
          <Link className="link" to={linkElement.linkTo}>
            {linkElement.name}
          </Link>
        </li>
      ))}
    </LinkContainer>
  );
};

export default Links;
