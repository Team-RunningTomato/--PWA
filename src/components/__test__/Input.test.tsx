import { Input } from '@/components';
import renderWithEmotion from '@/utils/renderWithEmotion';

import { useForm } from 'react-hook-form';

describe('Input Component', () => {
  test('Input Component', async () => {
    const registerName = 'test';

    const TestPage = () => {
      const { register } = useForm();

      return (
        <Input
          {...register(registerName)}
          inputTitle='test'
          errorMessage='test'
          successMessage='test'
        />
      );
    };

    const { container } = renderWithEmotion(<TestPage />);

    expect((container.firstChild?.childNodes[1] as HTMLInputElement).name).toBe(
      registerName
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
