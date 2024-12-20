import { MateBox } from '@/components';
import renderWithEmotion from '@/utils/renderWithEmotion';

describe('RecruitBox Component', () => {
  test('RecruitBox Component', () => {
    const distanceText = '1';
    const locationText = '광주광역시 광산구 상무대로 312';
    const titleText = '광주소프트웨어마이스터고에서 런닝 모집';
    const dateText = '1월 1일 월요일';
    const timeText = '오전 12시 00분';

    const { container, getByText } = renderWithEmotion(
      <MateBox
        distance={distanceText}
        location={locationText}
        title={titleText}
        date={dateText}
        time={timeText}
      />
    );

    expect(getByText(`${distanceText}km`)).toBeInTheDocument();
    expect(getByText(locationText)).toBeInTheDocument();
    expect(getByText(titleText)).toBeInTheDocument();

    expect(getByText(`${dateText} / ${timeText}`)).toBeInTheDocument();

    expect(container.firstChild).toBeInTheDocument();
  });
});
