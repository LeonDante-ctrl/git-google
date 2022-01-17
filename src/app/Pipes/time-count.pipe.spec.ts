import { CountTimePassedPipe } from './time-count.pipe';

describe('TimeCountPipe', () => {
  it('create an instance', () => {
    const pipe = new CountTimePassedPipe();
    expect(pipe).toBeTruthy();
  });
});
