import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDna = forwardRef<SVGSVGElement, IconProps>(function IconAiDna(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

  /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
  const labelled =
    rest["aria-label"] != null || rest["aria-labelledby"] != null;
  const a11y: SVGProps<SVGSVGElement> = labelled
    ? { role: "img" }
    : { "aria-hidden": true };

  /* In TwoTone and Bulk the rungs are masked by the strands, so they stop
     exactly at the strands' edges instead of sitting over them. One tone
     skips it: there the overlap is invisible, and a mask would leave a
     hairline seam. */
  const cut = useId();

  return (
    <>
      {variant === "Broken" ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="M17 2.5C17 7.3 7 7.2 7 12s10 4.7 10 9.5M7 2.5C7 7.3 17 7.2 17 12c0 2.05-1.82 3.2-3.9 4.23m-2.17 1.03C8.83 18.3 7 19.45 7 21.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.6 4.2h6.8M8.6 19.8h6.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.6c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M7 2.5C7 7.3 17 7.2 17 12S7 16.7 7 21.5m10-19C17 7.3 7 7.2 7 12s10 4.7 10 9.5" stroke="black" strokeWidth={strokeWidth} strokeLinecap="round" />
          </mask>
          <path
            d="M7 2.5C7 7.3 17 7.2 17 12S7 16.7 7 21.5m10-19C17 7.3 7 7.2 7 12s10 4.7 10 9.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            mask={duotone ? `url(#${cut})` : undefined}
            d="M8.6 4.2h6.8M8.6 19.8h6.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.6c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M7.75 2.5c.03 1.63 1.59 2.57 2.88 3.25l1.37.67 1.37-.67c1.3-.68 2.85-1.62 2.88-3.25a.75.75 0 0 1 1.5 0q0 .52-.13 1.03c-.5 1.82-2.18 2.9-3.86 3.72q1.07.53 2.04 1.25c1.12.86 1.95 2.05 1.95 3.5s-.83 2.64-1.95 3.5q-.96.71-2.04 1.25c1.68.83 3.36 1.9 3.86 3.72q.13.5.13 1.03a.75.75 0 0 1-1.5 0c-.03-1.64-1.59-2.57-2.88-3.25L12 17.58l-1.37.67c-1.3.68-2.85 1.61-2.88 3.25a.75.75 0 0 1-1.5 0q0-.53.13-1.03c.5-1.82 2.18-2.9 3.86-3.72q-1.07-.54-2.04-1.25c-1.12-.86-1.95-2.05-1.95-3.5s.83-2.64 1.95-3.5q.96-.72 2.04-1.25c-1.68-.83-3.36-1.9-3.86-3.72q-.12-.5-.13-1.03a.75.75 0 0 1 1.5 0zm5.52 12.8c1.3-.67 2.98-1.63 2.98-3.3s-1.68-2.63-2.98-3.3q-.63-.32-1.27-.62-.64.3-1.27.62c-1.3.67-2.98 1.63-2.98 3.3s1.68 2.63 2.98 3.3q.63.32 1.27.62.64-.3 1.27-.62z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.75 2.5c.03 1.63 1.59 2.57 2.88 3.25l1.37.67 1.37-.67c1.3-.68 2.85-1.62 2.88-3.25a.75.75 0 0 1 1.5 0q0 .52-.13 1.03c-.5 1.82-2.18 2.9-3.86 3.72q1.07.53 2.04 1.25c1.12.86 1.95 2.05 1.95 3.5s-.83 2.64-1.95 3.5q-.96.71-2.04 1.25c1.68.83 3.36 1.9 3.86 3.72q.13.5.13 1.03a.75.75 0 0 1-1.5 0c-.03-1.64-1.59-2.57-2.88-3.25L12 17.58l-1.37.67c-1.3.68-2.85 1.61-2.88 3.25a.75.75 0 0 1-1.5 0q0-.53.13-1.03c.5-1.82 2.18-2.9 3.86-3.72q-1.07-.54-2.04-1.25c-1.12-.86-1.95-2.05-1.95-3.5s.83-2.64 1.95-3.5q.96-.72 2.04-1.25c-1.68-.83-3.36-1.9-3.86-3.72q-.12-.5-.13-1.03a.75.75 0 0 1 1.5 0zm5.52 12.8c1.3-.67 2.98-1.63 2.98-3.3s-1.68-2.63-2.98-3.3q-.63-.32-1.27-.62-.64.3-1.27.62c-1.3.67-2.98 1.63-2.98 3.3s1.68 2.63 2.98 3.3q.63.32 1.27.62.64-.3 1.27-.62z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            mask={`url(#${cut})`}
            d="M7.85 4.2c0-.41.34-.75.75-.75h6.8a.75.75 0 0 1 0 1.5H8.6a.75.75 0 0 1-.75-.75zm0 15.6c0-.41.34-.75.75-.75h6.8a.75.75 0 0 1 0 1.5H8.6a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 9.2c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="M7.75 2.5q.02.66.32 1.17a.8.8 0 0 1 .53-.22h6.8q.32.01.53.22.3-.51.32-1.17a.75.75 0 0 1 1.5 0q0 .53-.13 1.02c-.5 1.83-2.18 2.9-3.86 3.73q1.07.53 2.04 1.25c1.12.86 1.95 2.04 1.95 3.5 0 1.45-.83 2.64-1.95 3.5q-.96.72-2.04 1.25c1.68.83 3.36 1.9 3.86 3.72q.13.5.13 1.03a.75.75 0 0 1-1.5 0q-.01-.66-.32-1.17a.8.8 0 0 1-.53.22H8.6q-.32-.01-.53-.22-.3.51-.32 1.17a.75.75 0 0 1-1.5 0q0-.53.13-1.03c.5-1.82 2.18-2.9 3.86-3.72q-1.07-.54-2.04-1.25c-1.12-.86-1.95-2.05-1.95-3.5s.83-2.64 1.95-3.5q.96-.72 2.04-1.25c-1.68-.83-3.36-1.9-3.86-3.73q-.12-.5-.13-1.02a.75.75 0 0 1 1.5 0zm2.88 3.25 1.37.67 1.37-.67q.67-.35 1.34-.8H9.29q.66.45 1.34.8zm2.74 12.5L12 17.58l-1.37.67q-.67.35-1.34.8h5.42q-.66-.45-1.34-.8zm-.1-2.95c1.3-.67 2.98-1.63 2.98-3.3s-1.68-2.63-2.98-3.3q-.63-.32-1.27-.62-.64.3-1.27.62c-1.3.67-2.98 1.63-2.98 3.3s1.68 2.63 2.98 3.3q.63.32 1.27.62.64-.3 1.27-.62zm-.87-6.1c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiDna;
