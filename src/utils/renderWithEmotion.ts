import Providers from '@/app/providers';

import { render } from '@testing-library/react';
import type { RenderOptions, RenderResult } from '@testing-library/react';

/**
 * @testing-library/react의 render 함수에 Provider를 추가하여 렌더링 합니다
 * test 환경에서만 사용가능합니다
 *
 * @param element 렌더링할 element
 * @param options 렌더링 option
 *
 * @returns RenderResult를 반환합니다
 */

const renderWithEmotion = (
  element: React.ReactNode,
  options?: RenderOptions
): RenderResult => render(element, { wrapper: Providers, ...options });

export default renderWithEmotion;
