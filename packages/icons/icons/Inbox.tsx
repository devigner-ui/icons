import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInbox = forwardRef<SVGSVGElement, IconProps>(function IconInbox(
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M1 12c0-5.19 0-7.78 1.61-9.39S6.81 1 12 1s7.78 0 9.39 1.61S23 6.81 23 12s0 7.78-1.61 9.39S17.19 23 12 23s-7.78 0-9.39-1.61S1 17.19 1 12"
            fill="currentColor"
          />
          <path
            d="M2.61 21.39C4.22 23 6.81 23 12 23s7.78 0 9.39-1.61c1.5-1.5 1.6-3.83 1.6-8.29h-3.47c-1 0-1.49 0-1.93.2s-.76.58-1.4 1.34l-.67.77c-.65.76-.97 1.14-1.41 1.34s-.94.2-1.93.2h-.36c-1 0-1.49 0-1.93-.2s-.76-.58-1.4-1.34l-.67-.77c-.65-.76-.97-1.14-1.41-1.34s-.94-.2-1.93-.2H1c0 4.46.12 6.8 1.61 8.29"
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
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.27-1.27 1.43-3.22 1.46-6.79h-3.16c-.97 0-1.23.02-1.44.11-.22.1-.4.29-1.03 1.03l-.6.7-.1.1a4 4 0 0 1-1.44 1.3c-.55.26-1.16.26-1.94.26h-.58c-.78 0-1.39 0-1.94-.25a5 5 0 0 1-1.45-1.3l-.09-.1-.6-.71c-.64-.74-.81-.93-1.03-1.03s-.47-.11-1.44-.11H2c.03 3.57.2 5.52 1.46 6.79"
            fill="currentColor"
          />
          <path
            d="M20.54 3.46C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12v.25h3.29c.78 0 1.39 0 1.94.25.55.26.95.72 1.45 1.3l.09.1.6.72c.64.73.81.92 1.03 1.02s.47.11 1.44.11h.32c.97 0 1.23-.02 1.44-.11.22-.1.4-.29 1.03-1.02l.6-.71.1-.1c.5-.59.89-1.05 1.44-1.3a5 5 0 0 1 1.94-.26H22V12c0-4.71 0-7.07-1.46-8.54"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconInbox;
