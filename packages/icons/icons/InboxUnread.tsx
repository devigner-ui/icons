import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInboxUnread = forwardRef<SVGSVGElement, IconProps>(
  function IconInboxUnread(
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
              d="M14 2h-2C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="19"
              cy="5.00024"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 13h3.16c.9 0 1.36 0 1.76.18.4.19.69.53 1.28 1.22l.6.7c.6.7.89 1.03 1.28 1.22.4.18.85.18 1.76.18h.32c.9 0 1.36 0 1.76-.18.4-.19.69-.53 1.28-1.22l.6-.7c.6-.69.89-1.03 1.28-1.22.4-.18.85-.18 1.76-.18H22"
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
            <path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.61 2.04Q14.1 1.99 12 2C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12q.01-2.09-.04-3.61a4.5 4.5 0 0 1-6.35-6.35"
              fill="currentColor"
            />
            <path
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.35-1.36 1.45-3.48 1.46-7.54h-3.16c-.9 0-1.36 0-1.76.18-.4.19-.69.53-1.28 1.22l-.6.7c-.6.7-.89 1.03-1.28 1.22-.4.18-.85.18-1.76.18h-.32c-.9 0-1.36 0-1.76-.18-.4-.19-.69-.53-1.28-1.22l-.6-.7c-.6-.69-.89-1.03-1.28-1.22-.4-.18-.85-.18-1.76-.18H2c0 4.06.1 6.18 1.46 7.54"
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
            <path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.27-1.27 1.43-3.22 1.46-6.79h-3.16c-.97 0-1.23.02-1.44.11-.22.1-.4.29-1.03 1.03l-.7.8a4 4 0 0 1-1.44 1.3c-.55.26-1.16.26-1.94.26h-.58c-.78 0-1.39 0-1.94-.25a5 5 0 0 1-1.45-1.3l-.7-.81c-.63-.74-.8-.93-1.02-1.03s-.47-.11-1.44-.11H2c.03 3.57.2 5.52 1.46 6.79"
              fill="currentColor"
            />
            <path
              d="M12 2C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12v.25h3.3c.77 0 1.38 0 1.93.25.55.26.95.72 1.45 1.3l.7.82c.63.73.8.92 1.02 1.02s.47.11 1.44.11h.32c.97 0 1.23-.02 1.44-.11.22-.1.4-.29 1.03-1.02l.7-.81c.5-.59.89-1.05 1.44-1.3a5 5 0 0 1 1.94-.26H22V12q0-1.68-.02-2.98a5 5 0 0 1-7-7Q13.68 2 12 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconInboxUnread;
