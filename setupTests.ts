import '@testing-library/jest-dom/vitest';

// jsdom lacks IntersectionObserver; provide a minimal mock for framer-motion usage
class MockIntersectionObserver implements IntersectionObserver {
	readonly root: Element | null = null;
	readonly rootMargin = '';
	readonly thresholds: ReadonlyArray<number> = [];
	constructor(private readonly callback: IntersectionObserverCallback) {}
	observe(target: Element): void {
		const entry: IntersectionObserverEntry = {
			isIntersecting: true,
			target,
			boundingClientRect: target.getBoundingClientRect(),
			intersectionRatio: 1,
			intersectionRect: target.getBoundingClientRect(),
			rootBounds: null,
			time: Date.now(),
		};
		this.callback([entry], this);
	}
	unobserve(): void {}
	disconnect(): void {}
	takeRecords(): IntersectionObserverEntry[] { return []; }
}

type IntersectionObserverConstructor = new (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => IntersectionObserver;

(globalThis as unknown as { IntersectionObserver: IntersectionObserverConstructor }).IntersectionObserver =
  MockIntersectionObserver as unknown as IntersectionObserverConstructor;
