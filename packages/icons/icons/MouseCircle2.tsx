import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMouseCircle2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMouseCircle2(
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
              d="m21.63 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L13.75 15a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 12a10 10 0 1 0-10 10"
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
              d="m21.63 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L13.75 15a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.17 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19"
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
              d="m21.63 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L13.75 15a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
              fill="currentColor"
            />
            <path
              d="M21.67 11.5q0 .65-.08 1.28c-.04.3-.35.48-.64.39l-4.85-1.51a3.03 3.03 0 0 0-3.78 3.79l1.5 4.83a.5.5 0 0 1-.4.64q-.62.08-1.25.08a9.5 9.5 0 0 1-9.5-9.77A9.6 9.6 0 0 1 11.9 2a9.5 9.5 0 0 1 9.77 9.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMouseCircle2;
