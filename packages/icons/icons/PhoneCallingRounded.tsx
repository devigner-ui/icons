import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPhoneCallingRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconPhoneCallingRounded(
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
              d="M14 2s2.2.2 5 3 3 5 3 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14.2 5.54s1 .28 2.48 1.76c1.49 1.49 1.77 2.48 1.77 2.48"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10.04 5.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
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
              d="m10.04 5.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
              fill="currentColor"
            />
            <path
              d="M13.26 1.88c.07-.4.45-.69.86-.62l.15.03.35.1q.46.11 1.21.45c1 .45 2.32 1.25 3.7 2.63a13 13 0 0 1 2.63 3.7 9 9 0 0 1 .57 1.66v.03c.07.41-.2.81-.61.88a.75.75 0 0 1-.86-.62l-.08-.32a7 7 0 0 0-.38-1c-.4-.86-1.1-2.03-2.33-3.27a11 11 0 0 0-3.26-2.33 7 7 0 0 0-1.32-.46.76.76 0 0 1-.63-.86"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.49 5.33c.11-.4.52-.63.92-.52l-.2.73.2-.73h.02l.02.01.23.1q.22.08.59.3a10 10 0 0 1 1.94 1.55 10 10 0 0 1 1.56 1.95 5 5 0 0 1 .39.82v.02h.01v.01l-.72.2.72-.2a.75.75 0 0 1-1.44.42l-.04-.1q-.05-.12-.21-.41a9 9 0 0 0-1.33-1.65A9 9 0 0 0 14.1 6.3l-.1-.04a.75.75 0 0 1-.51-.93"
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
              d="m10.04 5.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
              fill="currentColor"
            />
            <path
              d="M13.26 1.88c.07-.4.45-.69.86-.62l.15.03.35.1q.46.11 1.21.45c1 .45 2.32 1.25 3.7 2.63a13 13 0 0 1 2.63 3.7 9 9 0 0 1 .57 1.66v.03c.07.41-.2.81-.61.88a.75.75 0 0 1-.86-.62l-.08-.32a7 7 0 0 0-.38-1c-.4-.86-1.1-2.03-2.33-3.27a11 11 0 0 0-3.26-2.33 7 7 0 0 0-1.32-.46.76.76 0 0 1-.63-.86"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.49 5.33c.11-.4.52-.63.92-.52l-.2.73.2-.73h.02l.02.01.23.1q.22.08.59.3a10 10 0 0 1 1.94 1.55 10 10 0 0 1 1.56 1.95 5 5 0 0 1 .39.82v.02h.01v.01l-.72.2.72-.2a.75.75 0 0 1-1.44.42l-.04-.1q-.05-.12-.21-.41a9 9 0 0 0-1.33-1.65A9 9 0 0 0 14.1 6.3l-.1-.04a.75.75 0 0 1-.51-.93"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPhoneCallingRounded;
