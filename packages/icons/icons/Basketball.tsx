import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBasketball = forwardRef<SVGSVGElement, IconProps>(
  function IconBasketball(
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
              d="M3.34 17A10 10 0 1 0 20.66 7 10 10 0 0 0 3.34 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.95 20.57S16.01 13.98 14 10.5 7.05 3.43 7.05 3.43m.53 17.39c1.48-4.47 8.87-9.43 14.28-8.24m-5.45-9.37c-1.48 4.42-8.74 9.3-14.12 8.24"
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
              d="M13.45 8.4c1.73-1.47 3.09-3.21 3.67-4.95l.02-.03A10 10 0 0 1 22 11.84c-2-.43-4.19-.1-6.26.68a16 16 0 0 0-1.09-2.4 14 14 0 0 0-1.2-1.72"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.34 17a10 10 0 0 0 3.52 3.58c.82-2.47 3.2-4.94 6-6.64q.73-.45 1.5-.82-.46-1.26-1-2.24-.46-.78-1.09-1.56-.52.37-1.06.7c-2.76 1.7-6.12 2.75-9.07 2.17L2 12.16A10 10 0 0 0 3.34 17"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M16.23 13.94c1.88-.72 3.8-1 5.47-.63l.2.05a10 10 0 0 1-4.24 6.89l-.01-.08a45 45 0 0 0-.7-3.5c-.19-.85-.43-1.79-.72-2.73"
                fill="currentColor"
              />
              <path
                d="M8.32 3.45 7.72 3l-.02-.02a10 10 0 0 1 8.08-.23l-.08.23c-.47 1.42-1.65 2.95-3.23 4.3-.73-.8-1.5-1.54-2.2-2.17a42 42 0 0 0-1.95-1.65"
                fill="currentColor"
              />
              <path
                d="M10.42 8.75c-2.59 1.59-5.55 2.45-7.99 1.97l-.34-.07A10 10 0 0 1 6.3 3.8l.32.23.01.01.04.03.73.56a40 40 0 0 1 3.9 3.55q-.43.3-.87.57"
                fill="currentColor"
              />
              <path
                d="M16.2 20.66v.02l.06.37a10 10 0 0 1-8.04.2l.07-.2c.66-2 2.72-4.23 5.35-5.83q.6-.36 1.2-.67a39 39 0 0 1 1.2 5.07l.16.99z"
                fill="currentColor"
              />
            </g>
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
              d="M6.86 20.58A10 10 0 0 1 2 12.16l.14.03c2.95.58 6.3-.47 9.07-2.16q.54-.34 1.06-.71.62.78 1.08 1.56.56.98 1.01 2.24-.77.37-1.5.82c-2.8 1.7-5.18 4.17-6 6.64m9.4.47a10 10 0 0 1-8.04.2l.07-.2c.66-2 2.72-4.23 5.35-5.83q.6-.36 1.2-.67a39 39 0 0 1 1.2 5.07l.16.99v.07z"
              fill="currentColor"
            />
            <path
              d="M16.23 13.94c1.88-.72 3.8-1 5.47-.63l.2.05a10 10 0 0 1-4.24 6.89l-.01-.08a44 44 0 0 0-.7-3.5c-.19-.85-.43-1.79-.72-2.73"
              fill="currentColor"
            />
            <path
              d="M13.45 8.4c1.73-1.47 3.09-3.21 3.67-4.95l.02-.03A10 10 0 0 1 22 11.84c-2-.43-4.19-.1-6.26.68q-.48-1.3-1.09-2.4-.52-.87-1.2-1.72"
              fill="currentColor"
            />
            <path
              d="M8.32 3.45 7.72 3l-.02-.02a10 10 0 0 1 8.08-.23l-.08.23c-.47 1.42-1.65 2.95-3.23 4.3a32 32 0 0 0-2.2-2.17 42 42 0 0 0-1.95-1.65"
              fill="currentColor"
            />
            <path
              d="M10.42 8.75c-2.59 1.59-5.55 2.45-7.99 1.97l-.34-.07A10 10 0 0 1 6.3 3.8l.32.23.01.01.04.03.73.56a40 40 0 0 1 3.9 3.55q-.43.3-.87.57"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBasketball;
