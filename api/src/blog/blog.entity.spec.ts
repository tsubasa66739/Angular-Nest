import { Blog } from './blog.entity';

describe('Blog', () => {
  it('should be defined', () => {
    expect(new Blog('title', 'body')).toBeDefined();
  });
});
