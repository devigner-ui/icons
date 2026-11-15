import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiPieChart = forwardRef<SVGSVGElement, IconProps>(function IconAiPieChart(
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
            d="M20 15.55A9.21 9.21 0 1 1 3.12 8.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.91 9.95a11.4 11.4 0 0 0-7.86-7.86C12.41 1.63 11 3.05 11 4.76v6.7c0 .85.7 1.54 1.54 1.54h3.02m2.4 0h1.28c1.7 0 3.13-1.4 2.67-3.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 15.55A9.21 9.21 0 1 1 3.12 8.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.91 9.95a11.4 11.4 0 0 0-7.86-7.86C12.41 1.63 11 3.05 11 4.76v6.7c0 .85.7 1.54 1.54 1.54h6.7c1.7 0 3.13-1.4 2.67-3.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.75 7.88-.26.5-.3.79-.23.8-.17.83-.1.85-.03.87.05.88.13.86.2.85.27.81.33.78.4.75.46.7.51.66.57.61.61.57.67.51.7.46.74.4.78.33.82.27.84.2.87.13.87.05.87-.02.85-.1.83-.17.81-.25.78-.3.75-.37.72-.42.68-.49.63-.54.6-.6.54-.65.48-.7.43-.74.37-.78.3-.83.03-.15v-.14l-.03-.15-.05-.13-.08-.13-.1-.1-.12-.09-.14-.06-.15-.03h-.15l-.14.03-.14.05-.13.08-.1.1-.08.12-.32.84-.31.67-.36.63-.41.6-.46.55-.5.51-.54.46-.58.41-.61.37-.63.31-.66.27-.7.2-.7.14-.73.09-.73.02-.75-.05-.74-.1-.71-.17-.69-.23-.67-.28-.63-.33-.6-.4-.56-.43-.52-.48-.48-.53-.44-.56-.39-.6-.34-.63-.28-.66-.23-.69-.18-.72-.1-.74-.04-.74.02-.74.06-.54h.02l.12-.67.16-.6.13-.4.2-.51-.15-.15-.14-.18-.13-.19-.11-.21-.09-.21-.07-.23-.04-.2-.05-.38-.32.59z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M22.31 9.55a11.4 11.4 0 0 0-7.86-7.86c-1.64-.46-3.05.96-3.05 2.67v6.7c0 .85.7 1.54 1.54 1.54h6.7c1.7 0 3.13-1.4 2.67-3.05"
            fill="currentColor"
          />
          <path
            d="M5.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="m2.75 7.88-.26.5-.3.79-.23.8-.17.83-.1.85-.03.87.05.88.13.86.2.85.27.81.33.78.4.75.46.7.51.66.57.61.61.57.67.51.7.46.74.4.78.33.82.27.84.2.87.13.87.05.87-.02.85-.1.83-.17.81-.25.78-.3.75-.37.72-.42.68-.49.63-.54.6-.6.54-.65.48-.7.43-.74.37-.78.3-.83.03-.15v-.14l-.03-.15-.05-.13-.08-.13-.1-.1-.12-.09-.14-.06-.15-.03h-.15l-.14.03-.14.05-.13.08-.1.1-.08.12-.32.84-.31.67-.36.63-.41.6-.46.55-.5.51-.54.46-.58.41-.61.37-.63.31-.66.27-.7.2-.7.14-.73.09-.73.02-.75-.05-.74-.1-.71-.17-.69-.23-.67-.28-.63-.33-.6-.4-.56-.43-.52-.48-.48-.53-.44-.56-.39-.6-.34-.63-.28-.66-.23-.69-.18-.72-.1-.74-.04-.74.02-.74.06-.54h.02l.12-.67.16-.6.13-.4.2-.51-.15-.15-.14-.18-.13-.19-.11-.21-.09-.21-.07-.23-.04-.2-.05-.38-.32.59z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M22.31 9.55a11.4 11.4 0 0 0-7.86-7.86c-1.64-.46-3.05.96-3.05 2.67v6.7c0 .85.7 1.54 1.54 1.54h6.7c1.7 0 3.13-1.4 2.67-3.05"
            fill="currentColor"
          />
          <path
            d="M5.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiPieChart;
