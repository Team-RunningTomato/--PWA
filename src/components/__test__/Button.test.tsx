import { Button } from '@/components';
import { renderWithEmotion } from '@/utils';

describe('Button Component', () => {
  test('text 확인', () => {
    const buttonText = '클릭하시오';

    const { container } = renderWithEmotion(<Button title={buttonText} />);

    expect(container.firstChild?.childNodes[0].textContent).toBe(buttonText);

    expect(container.firstChild).toBeInTheDocument();
  });
});
