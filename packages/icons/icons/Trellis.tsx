import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrellis = forwardRef<SVGSVGElement, IconProps>(function IconTrellis(
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
      {!fill ? (
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
            d="M19 22v-.5M5 22v-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 21v-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m2.88 20.12-.53.53zM2 16h-.75zm19.12 4.12.53.53zM22 16h.75zm-6 4.25H8v1.5h8zm-8 0c-1.44 0-2.44 0-3.2-.1-.73-.1-1.11-.28-1.4-.56l-1.05 1.06c.6.6 1.36.86 2.26.98.88.12 2 .12 3.39.12zM1.25 16c0 1.09.03 1.99.17 2.72.14.76.4 1.4.93 1.93L3.4 19.6a2 2 0 0 1-.52-1.14 17 17 0 0 1-.14-2.45zM16 21.75c1.4 0 2.51 0 3.4-.12s1.65-.38 2.25-.98L20.6 19.6c-.28.28-.66.46-1.4.56-.75.1-1.75.1-3.19.1zM21.25 16c0 1.09-.04 1.86-.14 2.45-.1.57-.28.9-.52 1.14l1.06 1.06c.53-.52.8-1.17.93-1.93.14-.73.16-1.63.17-2.72zM3 15.75h18v-1.5H3zm19.75.25c0-.97-.79-1.75-1.75-1.75v1.5q.23.02.25.25zm-20 0c0-.14.11-.25.25-.25v-1.5c-.96 0-1.75.78-1.75 1.75z"
            fill="currentColor"
          />
          <path
            d="M20.5 15V6.14c0-.39 0-.58-.02-.72a1.84 1.84 0 0 0-1.54-1.68c-.13-.03-.4-.05-.94-.1-1-.1-2.18-.44-3.23-.83C13.27 2.27 12.53 2 12 2s-1.28.27-2.77.81C8.18 3.2 7 3.54 6 3.64c-.54.05-.81.07-.94.1q-1.36.3-1.54 1.68c-.02.14-.02.33-.02.72V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 18h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 18h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.5 11-1 1m0-4-3 3m0-4-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M20.5 15V6.14c0-.39 0-.58-.02-.72a1.84 1.84 0 0 0-1.54-1.68c-.13-.03-.4-.05-.94-.1-1-.1-2.18-.44-3.23-.83C13.27 2.27 12.53 2 12 2s-1.28.27-2.77.81C8.18 3.2 7 3.54 6 3.64c-.54.05-.81.07-.94.1q-1.36.3-1.54 1.68c-.02.14-.02.33-.02.72V15h7.75v6h1.5v-6z"
            fill="currentColor"
          />
          <path
            d="M14.03 8.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <path
            d="M11.03 7.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <path
            d="M15.03 11.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 15h8.25v6H8q-1.31 0-2.25-.03V22a.75.75 0 0 1-1.5 0v-1.19a2.6 2.6 0 0 1-1.37-.69C2.1 19.35 2 18.18 2 16a1 1 0 0 1 1-1m3.25 3c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 21h-3.25v-6H21a1 1 0 0 1 1 1c-.01 2.18-.11 3.35-.88 4.12q-.51.5-1.37.7V22a.75.75 0 0 1-1.5 0v-1.03q-.94.04-2.25.03m-1-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5 14V6.14c0-.39 0-.58-.02-.72a1.84 1.84 0 0 0-1.54-1.68c-.13-.03-.4-.05-.94-.1-1-.1-2.18-.44-3.23-.83C13.27 2.27 12.53 2 12 2s-1.28.27-2.77.81C8.18 3.2 7 3.54 6 3.64c-.54.05-.81.07-.94.1q-1.36.3-1.54 1.68c-.02.14-.02.33-.02.72V14zm-9.47-7.53c.3.3.3.77 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1c.3-.3.77-.3 1.06 0m3 1c.3.3.3.77 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l3-3c.3-.3.77-.3 1.06 0m1 3c.3.3.3.77 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1c.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 15h8.25v6H8q-1.31 0-2.25-.03V22a.75.75 0 0 1-1.5 0v-1.19a2.6 2.6 0 0 1-1.37-.69C2.1 19.35 2 18.18 2 16a1 1 0 0 1 1-1m3.25 3c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 21h-3.25v-6H21a1 1 0 0 1 1 1c-.01 2.18-.11 3.35-.88 4.12q-.51.5-1.37.7V22a.75.75 0 0 1-1.5 0v-1.03q-.94.04-2.25.03m-1-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTrellis;
