import PropTypes from 'prop-types';
// components
import ClientPortal from './ClientPortal';
// style
import styled, { css } from 'styled-components';

ToastNotification.propTypes = {
  selector: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  status: PropTypes.string,
};

export default function ToastNotification(props) {
  const { selector, title, message, status } = props;

  return (
    <>
      {selector && (
        <ClientPortal selector={selector}>
          <Wrapper status={status}>
            <Heading>{title}</Heading>
            <Paragraph>{message}</Paragraph>
          </Wrapper>
        </ClientPortal>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--size-8);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 5rem;
  bottom: 0;
  width: 100%;
  left: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  ${(props) => {
    switch (props.status) {
      case 'success':
        return css`
          background-color: var(--color-success-500);
          color: var(--color-grey-900);
        `;
      case 'error':
        return css`
          background-color: var(--color-error-500);
          color: var(--color-grey-50);
        `;
      default:
        return css`
          background-color: var(--color-grey-800);
          color: var(--color-grey-50);
        `;
    }
  }}
`;
const Heading = styled.h2`
  font-size: var(--size-6);
  margin: 0;
`;
const Paragraph = styled.p`
  margin: 0;
`;
