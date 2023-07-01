import { MutableRefObject } from 'react';

export function handleDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function handleScrollTop(
  elementRef: MutableRefObject<HTMLDivElement>,
): void {
  window.scrollTo({
    top: elementRef.current.offsetTop - 200,
    behavior: 'smooth',
  });
}
