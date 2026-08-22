import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaperclip3 = forwardRef<SVGSVGElement, IconProps>(
  function IconPaperclip3(
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
              d="M12.64 12v3.5a3.5 3.5 0 0 0 7 0V10a7 7 0 1 0-14 0v6a6 6 0 0 0 6 6"
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
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M12.1 18.18A4.2 4.2 0 0 1 7.92 14v-3.43a4.75 4.75 0 0 1 9.5 0v3.14a2.75 2.75 0 1 1-5.5 0v-2c0-.41.34-.75.75-.75s.75.34.75.75v2a1.25 1.25 0 0 0 2.5 0v-3.14a3.26 3.26 0 0 0-6.5 0V14c0 1.48 1.2 2.68 2.68 2.68.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m.56 11.71a2.75 2.75 0 1 1-5.5 0v-2c0-.41.34-.75.75-.75s.75.34.75.75v2a1.25 1.25 0 0 0 2.5 0v-3.14a3.26 3.26 0 0 0-6.5 0V14c0 1.48 1.2 2.68 2.68 2.68.41 0 .75.34.75.75s-.34.75-.75.75A4.2 4.2 0 0 1 7.92 14v-3.43a4.75 4.75 0 0 1 9.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPaperclip3;
