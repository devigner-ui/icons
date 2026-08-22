import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefresh = forwardRef<SVGSVGElement, IconProps>(function IconRefresh(
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
            d="M12.08 3v-.75zm-8.4 8.33h-.75zm0 1.67-.53.53c.3.3.77.3 1.06 0zm2.2-1.13a.75.75 0 1 0-1.05-1.07zM2.54 10.8a.75.75 0 0 0-1.06 1.07zm16.09-3.4a.75.75 0 1 0 1.27-.8zm-6.54-5.15a9.1 9.1 0 0 0-9.15 9.08h1.5a7.6 7.6 0 0 1 7.65-7.58zm-9.15 9.08V13h1.5v-1.67zm1.28 2.2 1.68-1.66-1.06-1.07-1.68 1.67zm0-1.06L2.53 10.8l-1.06 1.07 1.68 1.66zM19.89 6.6a9.2 9.2 0 0 0-7.81-4.36v1.5c2.77 0 5.2 1.46 6.54 3.64z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.88 21v.75zm8.43-8.33h.75zm0-1.67.53-.53a.75.75 0 0 0-1.05 0zm-2.21 1.13a.75.75 0 1 0 1.05 1.07zm3.37 1.07a.75.75 0 1 0 1.06-1.07zM5.32 16.6a.75.75 0 1 0-1.28.8zm6.56 5.15a9.13 9.13 0 0 0 9.18-9.08h-1.5a7.63 7.63 0 0 1-7.68 7.58zm9.18-9.08V11h-1.5v1.67zm-1.27-2.2-1.69 1.66 1.05 1.07 1.7-1.67zm0 1.06 1.68 1.67 1.06-1.07-1.69-1.66zM4.04 17.4a9.2 9.2 0 0 0 7.84 4.36v-1.5a7.7 7.7 0 0 1-6.56-3.64z"
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
            d="M12.08 2.25a9.1 9.1 0 0 0-9.12 8.33H2a.75.75 0 0 0-.53 1.29l1.68 1.66c.3.3.77.3 1.06 0l1.68-1.66a.75.75 0 0 0-.53-1.29h-.9a7.63 7.63 0 0 1 7.62-6.83c2.77 0 5.2 1.46 6.54 3.64a.75.75 0 1 0 1.27-.78 9.2 9.2 0 0 0-7.81-4.36"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.84 10.47a.75.75 0 0 0-1.05 0l-1.69 1.66a.75.75 0 0 0 .53 1.29h.9a7.65 7.65 0 0 1-7.65 6.83 7.7 7.7 0 0 1-6.56-3.64.75.75 0 1 0-1.28.78 9.2 9.2 0 0 0 7.84 4.36 9.14 9.14 0 0 0 9.15-8.33H22a.75.75 0 0 0 .53-1.29z"
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
            d="M12.08 2.25a9.1 9.1 0 0 0-9.12 8.33H2a.75.75 0 0 0-.53 1.29l1.68 1.66c.3.3.77.3 1.06 0l1.68-1.66a.75.75 0 0 0-.53-1.29h-.9a7.63 7.63 0 0 1 7.62-6.83c2.77 0 5.2 1.46 6.54 3.64a.75.75 0 1 0 1.27-.78 9.2 9.2 0 0 0-7.81-4.36"
            fill="currentColor"
          />
          <path
            d="M20.84 10.47a.75.75 0 0 0-1.05 0l-1.69 1.66a.75.75 0 0 0 .53 1.29h.9a7.65 7.65 0 0 1-7.65 6.83 7.7 7.7 0 0 1-6.56-3.64.75.75 0 1 0-1.28.78 9.2 9.2 0 0 0 7.84 4.36 9.14 9.14 0 0 0 9.15-8.33H22a.75.75 0 0 0 .53-1.29z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRefresh;
