import { Wrapper } from '@/components';
import renderWithEmotion from '@/utils/renderWithEmotion';

describe('Wrapper Component', () => {
  test('Success Case', () => {
    const titleText = 'id를 입력해주세요';
    const successMessageText = 'id 입력을 확인했습니다';

    const { container } = renderWithEmotion(
      <Wrapper title={titleText} successMessage={successMessageText}>
        <input />
      </Wrapper>
    );

    expect(container.firstChild?.childNodes[0].textContent).toBe(titleText);

    expect(container.firstChild?.childNodes[2].textContent).toBe(
      successMessageText
    );
  });

  test('Error Case', () => {
    const titleText = 'password를 입력해주세요';
    const errorMessageText = 'password를 입력을 확인하지 못했습니다';

    const { container } = renderWithEmotion(
      <Wrapper title={titleText} errorMessage={errorMessageText}>
        <input />
      </Wrapper>
    );

    expect(container.firstChild?.childNodes[0].textContent).toBe(titleText);

    expect(container.firstChild?.childNodes[2].textContent).toBe(
      errorMessageText
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
