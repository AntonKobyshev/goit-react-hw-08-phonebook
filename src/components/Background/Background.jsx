import { createPortal } from 'react-dom';
import { BackgroundContainer, BackgroundItem } from './Background.styled';

export const Background = () => {
  return createPortal(
    <BackgroundContainer>
      <>
        {Array.from({ length: 30 }, (_, index) => (
          <BackgroundItem key={index} />
        ))}
      </>
    </BackgroundContainer>,
    document.body
  );
};
