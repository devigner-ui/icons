import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGlobal2 = forwardRef<SVGSVGElement, IconProps>(function IconGlobal2(
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
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.67 3h1a28.4 28.4 0 0 0 0 18h-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.67 3a28.4 28.4 0 0 1 0 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.67 16v-1a28.4 28.4 0 0 0 18 0v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.67 9a28.4 28.4 0 0 1 18 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="m8.32 20.91-.1.02a10 10 0 0 1-4.5-4.49l.03-.1q1.84.53 3.73.84.31 1.9.84 3.73"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.61 16.45a10 10 0 0 1-4.65 4.57q.58-1.9.91-3.84 1.89-.3 3.72-.84 0 .06.02.11"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.69 7.71a32 32 0 0 0-3.82-.91 28 28 0 0 0-.91-3.82c2.07.99 3.74 2.66 4.73 4.73"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.32 3.09a31 31 0 0 0-.83 3.72q-1.94.31-3.84.9a10 10 0 0 1 4.57-4.65z"
            fill="currentColor"
          />
          <path
            d="M16.16 6.59a31 31 0 0 0-6.98 0q.36-2.07 1.02-4.06l.02-.22q1.18-.3 2.45-.31 1.26.01 2.44.31l.03.22q.66 2 1.02 4.06"
            fill="currentColor"
          />
          <path
            d="M7.26 15.49a28 28 0 0 1-4.06-1.02l-.22-.02A10 10 0 0 1 2.67 12q.01-1.27.31-2.44l.22-.03q2-.65 4.06-1.02a33 33 0 0 0 0 6.98"
            fill="currentColor"
          />
          <path
            d="M22.67 12q-.01 1.27-.31 2.45l-.22.02q-2 .65-4.06 1.02.39-3.49 0-6.98 2.07.36 4.06 1.02.11.03.22.03.3 1.18.31 2.44"
            fill="currentColor"
          />
          <path
            d="M16.16 17.41a28 28 0 0 1-1.02 4.06l-.03.22q-1.18.3-2.44.31-1.27-.01-2.45-.31l-.02-.22a30 30 0 0 1-1.02-4.06q1.74.2 3.49.22 1.76-.01 3.49-.22"
            fill="currentColor"
          />
          <path
            d="M16.43 15.76q-3.76.48-7.52 0-.48-3.76 0-7.52 3.76-.48 7.52 0 .48 3.76 0 7.52"
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
          <g clipPath="url(#clip0_12_64909)">
            <path
              d="m8.32 20.91-.1.02a10 10 0 0 1-4.5-4.49l.03-.1q1.84.53 3.73.84.31 1.9.84 3.73"
              fill="currentColor"
            />
            <path
              d="M21.61 16.45a10 10 0 0 1-4.65 4.57q.58-1.9.91-3.84 1.89-.3 3.72-.84 0 .06.02.11"
              fill="currentColor"
            />
            <path
              d="M21.69 7.71a32 32 0 0 0-3.82-.91 28 28 0 0 0-.91-3.82c2.07.99 3.74 2.66 4.73 4.73"
              fill="currentColor"
            />
            <path
              d="M8.32 3.09a31 31 0 0 0-.83 3.72q-1.94.31-3.84.9a10 10 0 0 1 4.57-4.65z"
              fill="currentColor"
            />
            <path
              d="M16.16 6.59a31 31 0 0 0-6.98 0q.36-2.07 1.02-4.06l.02-.22q1.18-.3 2.45-.31 1.26.01 2.44.31l.03.22q.66 2 1.02 4.06"
              fill="currentColor"
            />
            <path
              d="M7.26 15.49a28 28 0 0 1-4.06-1.02l-.22-.02A10 10 0 0 1 2.67 12q.01-1.27.31-2.44l.22-.03q2-.65 4.06-1.02a33 33 0 0 0 0 6.98"
              fill="currentColor"
            />
            <path
              d="M22.67 12q-.01 1.27-.31 2.45l-.22.02q-2 .65-4.06 1.02.39-3.49 0-6.98 2.07.36 4.06 1.02.11.03.22.03.3 1.18.31 2.44"
              fill="currentColor"
            />
            <path
              d="M16.16 17.41a28 28 0 0 1-1.02 4.06l-.03.22q-1.18.3-2.44.31-1.27-.01-2.45-.31l-.02-.22a30 30 0 0 1-1.02-4.06q1.74.2 3.49.22 1.76-.01 3.49-.22"
              fill="currentColor"
            />
            <path
              d="M16.43 15.76q-3.76.48-7.52 0-.48-3.76 0-7.52 3.76-.48 7.52 0 .48 3.76 0 7.52"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
});

export default IconGlobal2;
