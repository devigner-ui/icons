import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolume = forwardRef<SVGSVGElement, IconProps>(function IconVolume(
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
            d="M5.03 10.97c.08-1.2.12-1.81.43-2.4.28-.52.83-1.04 1.38-1.3C7.44 7 8.13 7 9.5 7c.51 0 .77 0 1.02-.04a3 3 0 0 0 .7-.22c.24-.1.45-.24.88-.52l.22-.14c2.54-1.68 3.81-2.52 4.88-2.16q.3.11.58.3c.92.65 1 2.16 1.13 5.17.05 1.12.09 2.08.09 2.61s-.04 1.49-.09 2.6c-.14 3.02-.2 4.53-1.13 5.18q-.27.18-.58.3c-1.07.36-2.34-.48-4.88-2.16l-.22-.14c-.43-.28-.64-.42-.87-.52a3 3 0 0 0-.71-.22c-.25-.04-.5-.04-1.02-.04-1.37 0-2.06 0-2.66-.28a3.2 3.2 0 0 1-1.38-1.3c-.31-.58-.35-1.18-.43-2.4a17 17 0 0 1 0-2.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.76 6.2c-.6.4-.9.62-1.23.74v10.12c.33.12.63.33 1.23.75 2.38 1.64 3.56 2.46 4.56 2.1q.3-.1.54-.28c.86-.64.93-2.12 1.06-5.08.05-1.1.08-2.03.08-2.55s-.03-1.46-.08-2.55c-.13-2.96-.2-4.44-1.06-5.08a2 2 0 0 0-.54-.29c-1-.35-2.18.47-4.56 2.11"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.68 8.16c-.62.8-.64 1.71-.68 3.56v.56c.04 1.85.06 2.77.68 3.56.11.14.28.31.42.43.76.63 1.77.63 3.79.63.72 0 1.08 0 1.42.1l.22.06V6.94L11.3 7c-.34.1-.7.1-1.42.1-2.02 0-3.03 0-3.79.63q-.22.2-.42.43"
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
            d="M5 11.72c.04-1.85.06-2.77.68-3.56.11-.14.28-.31.42-.43.76-.63 1.77-.63 3.79-.63.72 0 1.08 0 1.42-.1l.22-.06a6 6 0 0 0 1.23-.75c2.38-1.64 3.56-2.46 4.56-2.1q.3.1.54.28c.86.64.93 2.12 1.06 5.08.05 1.1.08 2.03.08 2.55s-.03 1.46-.08 2.55c-.13 2.96-.2 4.44-1.06 5.08q-.25.18-.54.29c-1 .35-2.18-.47-4.56-2.11a6 6 0 0 0-1.45-.81c-.34-.1-.7-.1-1.42-.1-2.02 0-3.03 0-3.79-.63q-.22-.2-.42-.43c-.62-.8-.64-1.71-.68-3.56z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconVolume;
