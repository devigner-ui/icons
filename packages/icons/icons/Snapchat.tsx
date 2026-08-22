import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSnapchat = forwardRef<SVGSVGElement, IconProps>(function IconSnapchat(
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.98 15.31q-.43.22-.73.28-.25.05-.43.16c-.13.08-.14.21-.16.33q-.01.17-.11.26-.14.08-.49.08c-.3.02-.68.03-1.14.17q-.33.13-.62.32a2.8 2.8 0 0 1-3.27 0 3 3 0 0 0-.63-.33 4 4 0 0 0-1.14-.17q-.34 0-.49-.08-.1-.09-.11-.26c-.02-.12-.03-.25-.16-.33q-.18-.1-.43-.17c-.2-.05-.44-.11-.73-.27-.34-.19-.14-.3-.03-.36 1.93-.93 2.23-2.37 2.24-2.48v-.02c.02-.12.03-.22-.11-.35a6 6 0 0 0-.92-.62q-.43-.28-.31-.64c.06-.17.22-.23.38-.23l.15.02q.27.07.52.17l.33.11q.14 0 .12-.15l-.01-.09c-.02-.35-.05-.96-.01-1.52.08-.84.35-1.27.67-1.63a3 3 0 0 1 2.28-.95c1.39 0 2.12.77 2.28.94.32.37.59.79.67 1.64.05.59.01 1.22-.02 1.57v.03q-.02.16.12.15l.06-.01.27-.09q.23-.1.52-.17.07-.03.15-.02.27 0 .38.24.12.35-.31.63-.08.07-.27.17c-.24.16-.56.36-.65.45-.14.13-.13.23-.11.35v.02c.02.11.32 1.55 2.24 2.48.15.06.35.18.01.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.98 15.31q-.43.22-.73.28-.25.05-.43.16c-.13.08-.14.21-.16.33q-.01.17-.11.26-.14.08-.49.08c-.3.02-.68.03-1.14.17q-.33.13-.62.32a2.8 2.8 0 0 1-3.27 0 3 3 0 0 0-.63-.33 4 4 0 0 0-1.14-.17q-.34 0-.49-.08-.1-.09-.11-.26c-.02-.12-.03-.25-.16-.33q-.18-.1-.43-.17c-.2-.05-.44-.11-.73-.27-.34-.19-.14-.3-.03-.36 1.93-.93 2.23-2.37 2.24-2.48v-.02c.02-.12.03-.22-.11-.35a6 6 0 0 0-.92-.62q-.43-.28-.31-.64c.06-.17.22-.23.38-.23l.15.02q.27.07.52.17l.33.11q.14 0 .12-.15l-.01-.09c-.02-.35-.05-.96-.01-1.52.08-.84.35-1.27.67-1.63a3 3 0 0 1 2.28-.95c1.39 0 2.12.77 2.28.94.32.37.59.79.67 1.64.05.59.01 1.22-.02 1.57v.03q-.02.16.12.15l.06-.01.27-.09q.23-.1.52-.17.07-.02.15-.02.27 0 .38.24.12.34-.31.63-.08.07-.27.17c-.24.16-.56.36-.65.45-.14.13-.13.23-.11.35v.02c.02.11.32 1.55 2.24 2.48.15.06.35.18.01.37"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m5.31 13.31q-.43.22-.73.28-.25.05-.43.16c-.13.08-.14.21-.16.33q-.01.17-.11.26-.14.08-.49.08c-.3.02-.68.03-1.14.17q-.32.13-.62.32a2.8 2.8 0 0 1-3.27 0 3 3 0 0 0-.63-.33 4 4 0 0 0-1.14-.17q-.34 0-.49-.08-.1-.09-.11-.26c-.02-.12-.03-.25-.16-.33q-.18-.1-.43-.17c-.2-.05-.44-.11-.73-.27-.34-.19-.14-.3-.03-.36 1.93-.93 2.23-2.37 2.24-2.48v-.02c.02-.12.03-.22-.11-.35a6 6 0 0 0-.92-.62q-.43-.28-.31-.64c.06-.17.22-.23.38-.23l.15.02q.27.07.52.17l.27.1.06.01q.14 0 .12-.15l-.01-.09c-.02-.35-.05-.96-.01-1.52.08-.84.35-1.27.67-1.63a3 3 0 0 1 2.28-.95c1.4 0 2.12.77 2.28.94.32.37.59.79.67 1.64.05.59.01 1.22-.02 1.57v.03q-.02.16.12.15l.06-.01.27-.09q.23-.1.52-.17.08-.03.15-.02.27 0 .38.24.12.35-.31.63-.08.07-.27.17c-.24.16-.56.36-.65.45-.14.13-.13.23-.11.35v.02c.02.11.32 1.55 2.24 2.48.15.06.35.18.01.37"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSnapchat;
