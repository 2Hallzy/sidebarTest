import { getCircleTransform } from './Chart.jsx';

  test('Generate the transform for a data point starting at 0 and ending at 0', () => {
    expect(getCircleTransform({
        cumulativePercentage: 0,
        percentage: 0,
      })).toBe('rotate(-90deg) translateX(130px) rotate(90deg)');
    })

  test('Generate the transform for a data point starting at 0 and ending at 20', () => {
      expect(getCircleTransform({
        cumulativePercentage: 0,
        percentage: 20,
      })).toBe('rotate(-54deg) translateX(130px) rotate(54deg)');
    })

    test('Generate the transform for a data point starting at 90 and ending at 100', () => {
        expect(getCircleTransform({
          cumulativePercentage: 80,
          percentage: 100,
        })).toBe('rotate(378deg) translateX(130px) rotate(-378deg)');
      })



;