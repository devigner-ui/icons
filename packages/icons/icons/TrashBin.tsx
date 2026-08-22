import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrashBin = forwardRef<SVGSVGElement, IconProps>(function IconTrashBin(
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
            d="M20.5 6h-17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m18.83 8.5-.46 6.9c-.17 2.65-.26 3.98-1.13 4.8-.86.8-2.2.8-4.85.8h-.78c-2.66 0-3.99 0-4.85-.8-.87-.82-.96-2.15-1.13-4.8l-.46-6.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.5 6h.1a2 2 0 0 0 1.84-1.32l.03-.1.1-.3q.11-.34.18-.47a1.5 1.5 0 0 1 1.1-.8l.5-.01h3.3c.26 0 .39 0 .5.02.47.07.88.37 1.1.79.05.1.1.23.18.48l.1.29.03.1A2 2 0 0 0 17.5 6"
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
            opacity={duotone ? "0.4" : "1"}
            d="M11.35 22h.8c2.79 0 4.18 0 5.08-.9.9-.91 1-2.4 1.19-5.37l.26-4.29c.1-1.61.15-2.42-.3-2.93S17.16 8 15.63 8H7.87c-1.53 0-2.3 0-2.75.51s-.4 1.32-.3 2.93l.26 4.29c.19 2.97.28 4.46 1.19 5.36s2.3.91 5.08.91"
            fill="currentColor"
          />
          <path
            d="M2.75 6.17c0-.46.35-.84.77-.84H6.2a1.3 1.3 0 0 0 1.2-1l.12-.38q.1-.35.21-.6c.34-.7.97-1.2 1.7-1.32q.26-.04.6-.03h3.47q.33 0 .6.03c.72.13 1.35.61 1.69 1.32q.11.26.21.6l.12.37.03.1c.18.53.74.9 1.27.91h2.57c.42 0 .77.38.77.84s-.35.83-.77.83H3.52c-.42 0-.77-.37-.77-.83"
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
            d="M11.35 22h.8c2.79 0 4.18 0 5.08-.9.9-.91 1-2.4 1.19-5.37l.26-4.29c.1-1.61.15-2.42-.3-2.93S17.16 8 15.63 8H7.87c-1.53 0-2.3 0-2.75.51s-.4 1.32-.3 2.93l.26 4.29c.19 2.97.28 4.46 1.19 5.36s2.3.91 5.08.91"
            fill="currentColor"
          />
          <path
            d="M2.75 6.17c0-.46.35-.84.77-.84H6.2a1.3 1.3 0 0 0 1.2-1l.12-.38q.1-.35.21-.6c.34-.7.97-1.2 1.7-1.32q.26-.04.6-.03h3.47q.33 0 .6.03c.72.13 1.35.61 1.69 1.32q.11.26.21.6l.12.37.03.1c.18.53.74.9 1.27.91h2.57c.42 0 .77.38.77.84s-.35.83-.77.83H3.52c-.42 0-.77-.37-.77-.83"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTrashBin;
