import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';

type Station2MotionState = {
  activeLayerId: number;
  reviewUnlocked: boolean;
  reducedMotion: boolean;
};

type UseStation2MotionResult = {
  rootRef: RefObject<HTMLElement>;
};

const useStation2Motion = ({
  activeLayerId,
  reviewUnlocked,
  reducedMotion,
}: Station2MotionState): UseStation2MotionResult => {
  const rootRef = useRef<HTMLElement>(null);
  const sceneEnteredRef = useRef(false);
  const previousReviewUnlockedRef = useRef(reviewUnlocked);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const wasReviewUnlocked = previousReviewUnlockedRef.current;
    const shouldPlayReviewUnlock = reviewUnlocked && !wasReviewUnlocked;

    const context = gsap.context(() => {
      const activePanel = root.querySelector<HTMLElement>(
        `.station-2-panel[data-station2-layer-id="${activeLayerId}"][data-station2-layer-status="active"]`,
      );
      const activeButton = root.querySelector<HTMLElement>(
        `.station-2-layer-button[data-station2-layer-id="${activeLayerId}"][data-station2-layer-status="active"]`,
      );
      const liaCard = root.querySelector<HTMLElement>(
        '[data-station2-motion-cue="lia_shift"]',
      );
      const signalTrace = root.querySelector<HTMLElement>(
        '[data-station2-layer-id="2"][data-station2-motion-cue="signal_trace"]',
      );
      const reviewButtons = Array.from(
        root.querySelectorAll<HTMLElement>('.station-2-layer-button'),
      );

      if (reducedMotion) {
        const reducedMotionTargets = [
          root,
          activePanel,
          activeButton,
          liaCard,
          signalTrace,
        ].filter((target): target is HTMLElement => target !== null);

        gsap.set(reducedMotionTargets, {
          clearProps: 'transform,opacity,visibility',
        });
        return;
      }

      const timeline = gsap.timeline({ defaults: { overwrite: 'auto' } });

      if (!sceneEnteredRef.current) {
        timeline.fromTo(
          root,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' },
          0,
        );
        sceneEnteredRef.current = true;
      }

      if (activePanel) {
        timeline.fromTo(
          activePanel,
          { opacity: 0.72, scale: 0.985 },
          { opacity: 1, scale: 1, duration: 0.24, ease: 'power2.out' },
          sceneEnteredRef.current ? 0 : 0.08,
        );
      }

      if (activeButton) {
        timeline.fromTo(
          activeButton,
          { scale: 0.985 },
          { scale: 1, duration: 0.2, ease: 'power2.out' },
          0.02,
        );
      }

      if (liaCard) {
        timeline.fromTo(
          liaCard,
          { opacity: 0.85, y: 4 },
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
          0.04,
        );
      }

      if (activeLayerId === 2 && signalTrace) {
        timeline.fromTo(
          signalTrace,
          { opacity: 0.78 },
          { opacity: 1, duration: 0.5, ease: 'power1.inOut' },
          0.04,
        );
      }

      if (shouldPlayReviewUnlock && reviewButtons.length > 0) {
        timeline.fromTo(
          reviewButtons,
          { opacity: 0.82, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.18,
            ease: 'power2.out',
            stagger: { each: 0.035, from: 'start' },
          },
          0,
        );
      }
    }, root);

    previousReviewUnlockedRef.current = reviewUnlocked;

    return () => {
      context.revert();
    };
  }, [activeLayerId, reviewUnlocked, reducedMotion]);

  return { rootRef };
};

export { useStation2Motion };
export type { Station2MotionState, UseStation2MotionResult };
