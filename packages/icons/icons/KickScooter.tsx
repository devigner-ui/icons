import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKickScooter = forwardRef<SVGSVGElement, IconProps>(
  function IconKickScooter(
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
              d="M14.38 17.65v.75c.42 0 .75-.34.75-.75zm5.24-5.18v.75a.75.75 0 0 0 .74-.87zm-1-5.95-.74.12zm-4.24-3.27a.75.75 0 0 0 0 1.5zm3.78 1.6-.62.4zm-.8-.68.3-.69zm-2.23 13.48c0-2.44 2-4.43 4.49-4.43v-1.5a5.96 5.96 0 0 0-5.99 5.93zm-.75-.75H6.76v1.5h7.62zm5.98-4.55-1-5.96-1.48.25 1 5.96zm-4.75-9.1h-1.23v1.5h1.23zm3.74 3.14q-.1-.65-.2-1.1t-.36-.87l-1.25.84c.05.07.1.17.15.39.06.23.1.53.19 1zm-3.74-1.64c.47 0 .78 0 1.02.02q.33.03.42.08l.61-1.37a3 3 0 0 0-.92-.2q-.45-.04-1.13-.03zm3.18-.33a2.7 2.7 0 0 0-1.13-.94l-.6 1.37q.3.14.48.4z"
              fill="currentColor"
            />
            <path
              d="M6.01 17.65c0 .87-.72 1.6-1.63 1.6v1.5a3.1 3.1 0 0 0 3.13-3.1zm-1.63 1.6c-.9 0-1.63-.73-1.63-1.6h-1.5c0 1.72 1.41 3.1 3.13 3.1zm-1.63-1.6c0-.88.72-1.6 1.63-1.6v-1.5a3.1 3.1 0 0 0-3.13 3.1zm1.63-1.6c.91 0 1.63.72 1.63 1.6h1.5a3.1 3.1 0 0 0-3.13-3.1z"
              fill="currentColor"
            />
            <path
              d="M21.25 17.65c0 .87-.72 1.6-1.63 1.6v1.5a3.1 3.1 0 0 0 3.13-3.1zm-1.63 1.6c-.91 0-1.63-.73-1.63-1.6h-1.5a3.1 3.1 0 0 0 3.13 3.1zm-1.63-1.6c0-.88.72-1.6 1.63-1.6v-1.5a3.1 3.1 0 0 0-3.13 3.1zm1.63-1.6c.9 0 1.63.72 1.63 1.6h1.5c0-1.72-1.41-3.1-3.13-3.1z"
              fill="currentColor"
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
              d="M16.63 4.77c-.24-.02-.55-.02-1.02-.02h-1.23a.75.75 0 1 1 0-1.5h1.26q.65 0 1.1.02.48.03.92.21.7.31 1.13.94.26.4.35.87.11.44.21 1.08l1 5.98a.75.75 0 0 1-.73.87 4.46 4.46 0 0 0-4.49 4.43c0 .41-.33.75-.75.75H7.42a3.1 3.1 0 0 1-3.04 2.35 3.1 3.1 0 0 1-3.13-3.1 3.14 3.14 0 0 1 6.17-.75h6.26a5.96 5.96 0 0 1 5.06-5.12l-.86-5.14c-.08-.46-.13-.76-.2-.99a1 1 0 0 0-.14-.4 1 1 0 0 0-.49-.4 1 1 0 0 0-.42-.08"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.49 17.65a3.1 3.1 0 0 1 3.13-3.1 3.1 3.1 0 0 1 3.13 3.1c0 1.72-1.41 3.1-3.13 3.1a3.1 3.1 0 0 1-3.13-3.1"
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
              d="M16.63 4.77c-.24-.02-.55-.02-1.02-.02h-1.23a.75.75 0 1 1 0-1.5h1.26q.65 0 1.1.02.48.03.92.21.7.31 1.13.94.26.4.35.87.11.44.21 1.08l1 5.98a.75.75 0 0 1-.73.87 4.46 4.46 0 0 0-4.49 4.43c0 .41-.33.75-.75.75H7.42a3.1 3.1 0 0 1-3.04 2.35 3.1 3.1 0 0 1-3.13-3.1 3.14 3.14 0 0 1 6.17-.75h6.26a5.96 5.96 0 0 1 5.06-5.12l-.86-5.14c-.08-.46-.13-.76-.2-.99a1 1 0 0 0-.14-.4 1 1 0 0 0-.49-.4 1 1 0 0 0-.42-.08m-.14 12.88a3.1 3.1 0 0 1 3.13-3.1 3.1 3.1 0 0 1 3.13 3.1c0 1.72-1.41 3.1-3.13 3.1a3.1 3.1 0 0 1-3.13-3.1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKickScooter;
