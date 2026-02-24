import { useRef, useCallback, useEffect, useState } from "react";

/**
 * Shared hook for a horizontal-scrolling carousel container.
 */
export function useHorizontalScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll > 0) {
      setScrollProgress(scrollLeft / maxScroll);
    }

    // Determine active index based on snap points or children
    const children = Array.from(el.children).filter(c => (c as HTMLElement).dataset.card !== undefined);
    setTotalItems(children.length);

    if (children.length > 0) {
      const scrollCenter = scrollLeft + clientWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const childEl = child as HTMLElement;
        const childCenter = childEl.offsetLeft + childEl.offsetWidth / 2;
        const distance = Math.abs(scrollCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Initial item count
    setTotalItems(el.querySelectorAll("[data-card]").length);

    console.log("[useHorizontalScroller] Attached to:", el, "on port:", window.location.port);

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      console.log("[useHorizontalScroller] Wheel event captured:", e.deltaY);
      e.preventDefault();
      el.scrollLeft += e.deltaY * 1.5;
    };

    const handleScroll = () => {
      updateScrollState();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", handleScroll, { passive: true });

    // Resize observer to update on layout changes
    const resizeObserver = new ResizeObserver(() => updateScrollState());
    resizeObserver.observe(el);

    return () => {
      console.log("[useHorizontalScroller] Detached");
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const children = Array.from(el.children).filter(c => (c as HTMLElement).dataset.card !== undefined);
    const target = children[index] as HTMLElement;
    if (target) {
      el.scrollTo({
        left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
        behavior: "smooth"
      });
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const el = scrollRef.current;
      if (!el) return;
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;

      e.preventDefault();

      const firstCard = el.querySelector<HTMLElement>("[data-card]");
      const style = getComputedStyle(el);
      const gapPx =
        parseFloat(style.columnGap || "0") ||
        parseFloat(style.gap || "0") ||
        0;
      const cardWidth = firstCard
        ? firstCard.offsetWidth
        : Math.max(280, el.clientWidth / 4);

      el.scrollBy({
        left: e.key === "ArrowRight" ? cardWidth + gapPx : -(cardWidth + gapPx),
        behavior: "smooth",
      });
    },
    []
  );

  return {
    scrollRef,
    handleKeyDown,
    scrollProgress,
    activeIndex,
    totalItems,
    scrollTo
  };
}
