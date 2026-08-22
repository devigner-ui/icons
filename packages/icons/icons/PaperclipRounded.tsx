import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaperclipRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconPaperclipRounded(
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
              d="m12.69 11.4-2.83 2.85c-.36.36-.54.54-.66.71a3.3 3.3 0 0 0 0 3.99c.12.17.3.35.66.7.35.36.53.54.7.67 1.17.9 2.79.9 3.95 0 .17-.13.35-.3.7-.66l3.68-3.71c1.42-1.44 2.13-2.16 2.52-2.93a5.5 5.5 0 0 0 0-4.95c-.39-.77-1.1-1.49-2.52-2.93-1.43-1.43-2.14-2.15-2.9-2.54a5.4 5.4 0 0 0-4.92 0c-.76.39-1.47 1.1-2.9 2.54L4.45 8.91c-.8.8-1.2 1.2-1.48 1.6a5.5 5.5 0 0 0 0 6.24c.28.4.68.8 1.48 1.61"
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
              d="M3.46 3.46C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54"
              fill="currentColor"
            />
            <path
              d="M11.11 5.67a4 4 0 0 1 3.61 0c.57.28 1.08.78 1.83 1.51l.1.1.1.1c.76.74 1.27 1.23 1.56 1.79a3.8 3.8 0 0 1 0 3.56 8 8 0 0 1-1.55 1.78l-.1.1-2.2 2.15-.04.03q-.26.26-.46.42a2.74 2.74 0 0 1-3.73-.42l-.04-.03-.03-.03-.43-.45a2.6 2.6 0 0 1 0-3.24q.15-.2.43-.45l.03-.03 1.7-1.66a.75.75 0 1 1 1.05 1.08l-1.7 1.65c-.23.22-.3.29-.33.34-.33.4-.33.97 0 1.38l.33.33.34.33c.44.32 1.04.32 1.48 0l.34-.33 2.2-2.14c.9-.87 1.22-1.2 1.38-1.5.36-.69.36-1.5 0-2.18a8 8 0 0 0-1.37-1.5 8 8 0 0 0-1.55-1.34 2.6 2.6 0 0 0-2.28 0c-.33.16-.66.47-1.55 1.34l-2.24 2.18c-.5.49-.68.66-.8.83a2.3 2.3 0 0 0 0 2.74c.12.16.3.34.8.83A.75.75 0 0 1 6.94 16l-.05-.06a8 8 0 0 1-.92-.97 3.8 3.8 0 0 1 0-4.49c.2-.28.5-.56.92-.97l.05-.06 2.24-2.18.1-.1c.76-.73 1.27-1.23 1.83-1.5"
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
              d="M12 2C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2m-.89 3.67a4 4 0 0 1 3.61 0c.57.28 1.08.78 1.83 1.51l.1.1.1.1c.76.74 1.27 1.23 1.56 1.79a3.8 3.8 0 0 1 0 3.56 8 8 0 0 1-1.55 1.78l-.1.1-2.2 2.15-.04.03q-.26.26-.46.42a2.74 2.74 0 0 1-3.73-.42l-.04-.03-.03-.03-.43-.45a2.6 2.6 0 0 1 0-3.24q.15-.2.43-.45l.03-.03 1.7-1.66a.75.75 0 1 1 1.05 1.08l-1.7 1.65c-.23.22-.3.29-.33.34-.33.4-.33.97 0 1.38l.33.33.34.33c.44.32 1.04.32 1.48 0l.34-.33 2.2-2.14c.9-.87 1.22-1.2 1.38-1.5.36-.69.36-1.5 0-2.18a8 8 0 0 0-1.37-1.5 8 8 0 0 0-1.55-1.34 2.6 2.6 0 0 0-2.28 0c-.33.16-.66.47-1.55 1.34l-2.24 2.18c-.5.49-.68.66-.8.83a2.3 2.3 0 0 0 0 2.74c.12.16.3.34.8.83A.75.75 0 0 1 6.94 16l-.05-.06a8 8 0 0 1-.92-.97 3.8 3.8 0 0 1 0-4.49c.2-.28.5-.56.92-.97l.05-.06 2.24-2.18.1-.1c.76-.73 1.27-1.23 1.83-1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPaperclipRounded;
