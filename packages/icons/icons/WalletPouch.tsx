import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalletPouch = forwardRef<SVGSVGElement, IconProps>(function IconWalletPouch(
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
            d="m12.91 2.52-.03.07-2.9 6.73H7.13a5 5 0 0 0-1.92.39l1.75-4.18.04-.1.07-.16.07-.17c1.31-3.03 2.79-3.72 5.77-2.58Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3 9.52q-.68-.2-1.41-.2H9.98l2.9-6.73.03-.07.44.18 2.21.93c.99.34 1.89.92 2.61 1.68q.15.17.25.36.14.2.2.43l.09.26q.39 1.24-.41 3.16Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.86 22H8.11q-.37 0-.7-.05-4.78-.32-5.1-5.1a6 6 0 0 1-.05-.7V14.2q0-1.1.45-2.03m2.43-2.42a5 5 0 0 1 2-.43h9.76a4.9 4.9 0 0 1 4.87 4.88l.01 1.95-.03.6q-.22 3.94-3.42 4.93"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.96 5.53 5.21 9.7a4.9 4.9 0 0 0-2.96 4.49v-2.93c0-2.79 1.97-5.2 4.71-5.74Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.77 11.27v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17l-.1-.26a5.8 5.8 0 0 1 3.14 5.17Z"
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
            d="m12.91 2.52-.03.07-2.9 6.73H7.13q-1.03 0-1.92.39l1.75-4.18.04-.1.07-.16.07-.17c1.31-3.03 2.79-3.72 5.77-2.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3 9.52q-.68-.2-1.41-.2H9.98l2.9-6.73.03-.07.44.18 2.21.93a6.5 6.5 0 0 1 2.61 1.68q.15.17.25.36.14.2.2.43l.09.26q.39 1.24-.41 3.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.78 14.2v1.95l-.03.6q-.29 5.24-5.84 5.25h-7.8q-.37 0-.7-.05-4.78-.31-5.1-5.1a6 6 0 0 1-.05-.7V14.2a4.9 4.9 0 0 1 4.88-4.88h9.76a4.9 4.9 0 0 1 4.87 4.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.96 5.53 5.21 9.7a4.9 4.9 0 0 0-2.96 4.49v-2.93a5.85 5.85 0 0 1 4.71-5.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.77 11.27v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17l-.1-.26a5.8 5.8 0 0 1 3.14 5.17"
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
            fill="currentColor"
            d="m12.86 2.52-.03.07-2.9 6.73H7.08q-1.02 0-1.92.39l1.75-4.18.04-.09.06-.16.08-.18c1.31-3.03 2.79-3.72 5.77-2.58"
            opacity={duotone ? "0.7" : "1"}
          />
          <path
            fill="currentColor"
            d="M18.25 9.52q-.68-.2-1.41-.2H9.93l2.9-6.73.03-.07.44.17 2.21.93a6.6 6.6 0 0 1 2.62 1.68l.25.36q.14.2.2.43.06.13.09.26.38 1.26-.42 3.17"
          />
          <path
            fill="currentColor"
            d="M21.72 14.2v1.95l-.02.59Q21.41 22 15.86 22h-7.8a5 5 0 0 1-.71-.05q-4.77-.32-5.1-5.09a6 6 0 0 1-.05-.71V14.2a4.9 4.9 0 0 1 2.96-4.49q.9-.39 1.92-.39h9.76q.73 0 1.41.2a4.9 4.9 0 0 1 3.47 4.68"
            opacity={duotone ? "0.3" : "1"}
          />
          <path
            fill="currentColor"
            d="M6.91 5.53 5.16 9.71A4.9 4.9 0 0 0 2.2 14.2v-2.93a5.85 5.85 0 0 1 4.71-5.74m14.81 5.74v2.93a4.9 4.9 0 0 0-3.47-4.68q.8-1.91.42-3.17l-.09-.26a5.8 5.8 0 0 1 3.14 5.18"
            opacity={duotone ? "0.5" : "1"}
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
            d="M11.9 2.21 9.5 7.82H7.07q-.6 0-1.17.11l1-2.4.04-.09.06-.16.08-.18c1.16-2.69 2.46-3.53 4.81-2.89"
            fill="currentColor"
          />
          <path
            d="m18.69 8.09-.02-.01a7 7 0 0 0-1.83-.26h-6.25l2.25-5.23.03-.07.44.17 2.21.93a6.6 6.6 0 0 1 2.62 1.68q.14.17.25.36.15.2.2.43l.1.26q.21.76.01 1.74"
            fill="currentColor"
          />
          <path
            d="M18.25 9.52q-.68-.2-1.4-.2H7.07q-1.02 0-1.92.39a4.9 4.9 0 0 0-2.96 4.49v1.95q0 .35.05.71.33 4.77 5.1 5.09.34.05.71.05h7.8q5.55 0 5.84-5.26l.02-.59V14.2a4.9 4.9 0 0 0-3.47-4.68zM6.91 5.53 5.16 9.7a4.9 4.9 0 0 0-2.96 4.49v-2.93a5.85 5.85 0 0 1 4.71-5.74zm14.81 5.74v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17l-.1-.26a5.8 5.8 0 0 1 3.14 5.17z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWalletPouch;
