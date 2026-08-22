import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartEdit = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartEdit(
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
              d="M22.16 12q.5-1.53.51-3.31a5.57 5.57 0 0 0-5.56-5.59c-1.82 0-3.43.88-4.44 2.24A5.5 5.5 0 0 0 8.23 3.1a5.57 5.57 0 0 0-5.56 5.59c0 7 6.48 11.13 9.38 12.13q.27.09.62.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.88 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.37 16.25a3.2 3.2 0 0 0 2.22 2.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M17.11 3.1c-1.81 0-3.43.88-4.44 2.23a5.55 5.55 0 0 0-10 3.36q.01 1.78.52 3.31c1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81q.5-1.53.52-3.31a5.57 5.57 0 0 0-5.56-5.59"
              fill="currentColor"
            />
            <path
              d="M15.51 9.16c-.9-.9-1.61-.61-2.22 0L9.75 12.7c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.62-.6.91-1.31.01-2.21"
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
              d="M17.11 3.1c-1.81 0-3.43.88-4.44 2.23a5.55 5.55 0 0 0-10 3.36q.01 1.78.52 3.31c1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81q.5-1.53.52-3.31a5.57 5.57 0 0 0-5.56-5.59m-1.6 8.28-3.54 3.54c-.14.14-.4.27-.59.3l-1.35.18c-.49.07-.83-.27-.76-.76l.19-1.35c.03-.19.16-.46.3-.59l3.54-3.54c.61-.61 1.32-.9 2.22 0 .89.9.6 1.61-.01 2.22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartEdit;
