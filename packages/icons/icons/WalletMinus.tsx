import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalletMinus = forwardRef<SVGSVGElement, IconProps>(
  function IconWalletMinus(
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
            d="M14.5 16h-5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12.9 2.52-.03.07-2.9 6.73H7.12q-1.03 0-1.92.39l1.75-4.18.04-.1.07-.16.07-.17c1.3-3.03 2.79-3.72 5.77-2.58Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.3 9.52q-.7-.2-1.42-.2h-6.9l2.9-6.73.02-.07q.23.08.44.18l2.21.93a6.5 6.5 0 0 1 2.61 1.68q.15.17.25.36.15.2.2.43l.1.26q.38 1.24-.42 3.16Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 22H8.1q-.36 0-.71-.05-4.77-.32-5.09-5.09a6 6 0 0 1-.05-.71V14.2a4.9 4.9 0 0 1 4.88-4.88h9.76a4.9 4.9 0 0 1 4.87 4.87v1.95l-.02.6Q21.45 22 15.9 22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.95 5.53 5.2 9.71a4.9 4.9 0 0 0-2.96 4.49v-2.93a5.85 5.85 0 0 1 4.71-5.74Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.76 11.27v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17l-.09-.26a5.8 5.8 0 0 1 3.13 5.17Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="M14.48 16h-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.88 2.52-.03.07-2.9 6.73H7.1q-1.03 0-1.92.39l1.75-4.18.04-.1.07-.16.07-.17c1.31-3.03 2.79-3.72 5.77-2.58"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.27 9.52q-.68-.2-1.41-.2H9.95l2.9-6.73.03-.07.44.18 2.21.93a6.5 6.5 0 0 1 2.61 1.68q.15.17.25.36.14.2.2.43l.09.26q.39 1.24-.41 3.16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.75 14.2v1.95l-.03.6q-.29 5.24-5.84 5.25h-7.8q-.37 0-.7-.05-4.78-.31-5.1-5.1a6 6 0 0 1-.05-.7V14.2a4.9 4.9 0 0 1 4.88-4.88h9.76a4.9 4.9 0 0 1 4.87 4.88"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.93 5.53 5.18 9.7a4.9 4.9 0 0 0-2.96 4.49v-2.93a5.85 5.85 0 0 1 4.71-5.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.74 11.27v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17l-.1-.26a5.8 5.8 0 0 1 3.14 5.17"
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
              d="m12.9 2.52-.03.07-2.9 6.73H7.12q-1.02 0-1.92.39l1.75-4.18.04-.09.06-.16.08-.18c1.31-3.03 2.79-3.72 5.77-2.58"
              opacity={duotone ? "0.7" : "1"}
            />
            <path
              fill="currentColor"
              d="M18.29 9.52q-.68-.2-1.41-.2H9.97l2.9-6.73.03-.07.44.17 2.21.93a6.6 6.6 0 0 1 2.62 1.68l.25.36q.14.2.2.43.06.13.09.26.38 1.26-.42 3.17"
            />
            <path
              fill="currentColor"
              d="M21.76 14.2v1.95l-.02.59Q21.45 22 15.9 22H8.1a5 5 0 0 1-.71-.05q-4.77-.32-5.1-5.09a6 6 0 0 1-.05-.71V14.2A4.9 4.9 0 0 1 5.2 9.71q.9-.39 1.92-.39h9.76q.73 0 1.41.2a4.9 4.9 0 0 1 3.47 4.68"
              opacity={duotone ? "0.3" : "1"}
            />
            <path
              fill="currentColor"
              d="M6.95 5.53 5.2 9.71a4.9 4.9 0 0 0-2.96 4.49v-2.93a5.85 5.85 0 0 1 4.71-5.74m14.81 5.74v2.93a4.9 4.9 0 0 0-3.47-4.68q.8-1.91.42-3.17l-.09-.26a5.8 5.8 0 0 1 3.14 5.18"
              opacity={duotone ? "0.5" : "1"}
            />
            <path
              fill="currentColor"
              d="M14.5 16.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="m11.94 2.21-2.4 5.61H7.11q-.6 0-1.17.11l1-2.4.04-.09.06-.16.08-.18c1.16-2.69 2.46-3.53 4.81-2.89"
              fill="currentColor"
            />
            <path
              d="m18.73 8.09-.02-.01a7 7 0 0 0-1.83-.26h-6.25l2.25-5.23.03-.07.44.17 2.21.93a6.6 6.6 0 0 1 2.62 1.68q.14.17.25.36.15.2.2.43l.1.26q.21.76.01 1.74"
              fill="currentColor"
            />
            <path
              d="M18.29 9.52q-.68-.2-1.4-.2H7.11q-1.02 0-1.92.39a4.9 4.9 0 0 0-2.96 4.49v1.95q0 .35.05.71.33 4.77 5.1 5.09.34.05.71.05h7.8q5.55 0 5.84-5.26l.02-.59V14.2a4.9 4.9 0 0 0-3.47-4.68m-3.79 7.23h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWalletMinus;
