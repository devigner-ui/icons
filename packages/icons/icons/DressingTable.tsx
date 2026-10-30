import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDressingTable = forwardRef<SVGSVGElement, IconProps>(function IconDressingTable(
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
            d="M19 22v-.5M5 22v-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21v-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.71 19.94q.15.18.32.32c1.21.99 4.12.74 5.61.74q4.2.02 8.41 0c1.23 0 2.84.11 3.86-.69.92-.71 1.02-1.98 1.07-3.05.02-.7.24-1.76-.52-2.15-.46-.23-3.49-.11-4.22-.11H6.92c-.74 0-3.92-.13-4.38.11-.36.19-.49.51-.54.89l-.01.01v.57"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 15V6.14c0-.39 0-.58-.02-.72a1.84 1.84 0 0 0-1.54-1.68c-.13-.03-.4-.05-.94-.1-1-.1-2.18-.44-3.23-.83C13.27 2.27 12.53 2 12 2s-1.28.27-2.77.81C8.18 3.2 7 3.54 6 3.64c-.54.05-.81.07-.94.1q-1.36.3-1.54 1.68c-.02.14-.02.33-.02.72V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 18h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 18h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m14.5 11-1 1m0-4-3 3m0-4-1 1"
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
            d="M1.99 16.01c0 1.36-.13 3.29 1.04 4.25 1.21.99 4.12.74 5.61.74q4.2.02 8.41 0c1.23 0 2.84.11 3.86-.69.92-.71 1.02-1.98 1.07-3.05.02-.7.24-1.76-.52-2.15-.46-.23-3.49-.11-4.22-.11H6.92c-.74 0-3.92-.13-4.38.11-.36.19-.49.51-.54.89z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M20.5 14.6V5.74c0-.39 0-.58-.02-.72a1.84 1.84 0 0 0-1.54-1.68c-.13-.03-.4-.05-.94-.1-1-.1-2.18-.44-3.23-.83-1.5-.54-2.24-.81-2.77-.81s-1.28.27-2.77.81C8.18 2.8 7 3.14 6 3.24c-.54.05-.81.07-.94.1q-1.36.3-1.54 1.68c-.02.14-.02.33-.02.72v8.86h7.75v6h1.5v-6z"
            fill="currentColor"
          />
          <path
            d="M14.03 8.13a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <path
            d="M11.03 7.13a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <path
            d="M15.03 11.13a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 14.6h8.25v6H8q-1.31 0-2.25-.03v1.03a.75.75 0 0 1-1.5 0v-1.19a2.6 2.6 0 0 1-1.37-.69C2.1 18.95 2 17.78 2 15.6a1 1 0 0 1 1-1m3.25 3c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 20.6h-3.25v-6H21a1 1 0 0 1 1 1c-.01 2.18-.11 3.35-.88 4.12q-.51.5-1.37.7v1.18a.75.75 0 0 1-1.5 0v-1.03q-.94.04-2.25.03m-1-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
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
            d="M20.5 13.6V5.74c0-.39 0-.58-.02-.72a1.84 1.84 0 0 0-1.54-1.68c-.13-.03-.4-.05-.94-.1-1-.1-2.18-.44-3.23-.83-1.5-.54-2.24-.81-2.77-.81s-1.28.27-2.77.81C8.18 2.8 7 3.14 6 3.24c-.54.05-.81.07-.94.1q-1.36.3-1.54 1.68c-.02.14-.02.33-.02.72v7.86zm-9.47-7.53c.3.3.3.77 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1c.3-.3.77-.3 1.06 0m3 1c.3.3.3.77 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l3-3c.3-.3.77-.3 1.06 0m1 3c.3.3.3.77 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1c.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 14.6h8.25v6H8q-1.31 0-2.25-.03v1.03a.75.75 0 0 1-1.5 0v-1.19a2.6 2.6 0 0 1-1.37-.69C2.1 18.95 2 17.78 2 15.6a1 1 0 0 1 1-1m3.25 3c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 20.6h-3.25v-6H21a1 1 0 0 1 1 1c-.01 2.18-.11 3.35-.88 4.12q-.51.5-1.37.7v1.18a.75.75 0 0 1-1.5 0v-1.03q-.94.04-2.25.03m-1-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDressingTable;
