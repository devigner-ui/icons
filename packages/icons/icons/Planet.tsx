import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlanet = forwardRef<SVGSVGElement, IconProps>(function IconPlanet(
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
            d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.85 6.2c2.01-.38 3.49-.22 3.98.56 1.01 1.62-2.57 5.27-8 8.17-5.43 2.89-10.65 3.92-11.66 2.3-.53-.85.21-2.26 1.83-3.84"
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
            d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
            fill="currentColor"
          />
          <path
            d="M17.71 5.45q1.59-.3 2.8-.15c.77.1 1.54.4 1.95 1.07.45.7.32 1.54 0 2.25a9 9 0 0 1-1.68 2.27 28 28 0 0 1-6.6 4.7A29 29 0 0 1 6.5 18.5q-1.67.33-2.92.2c-.8-.1-1.6-.38-2.03-1.08-.48-.75-.3-1.63.06-2.37a9 9 0 0 1 1.88-2.4l.52-.44a26 26 0 0 0 .3 1.74 7 7 0 0 0-1.35 1.75c-.27.57-.2.83-.14.93.07.12.3.3.93.38q.92.11 2.46-.18c2.02-.4 4.61-1.35 7.28-2.78a26 26 0 0 0 6.23-4.42Q20.75 8.78 21.09 8c.23-.51.16-.74.1-.84-.07-.11-.29-.3-.88-.37a8 8 0 0 0-2.16.1l-1.28-1.23c.34-.1.66-.17.84-.2"
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
            d="M20 11.64q.41-.37.78-.75a8 8 0 0 0 1.67-2.27c.33-.71.46-1.54.01-2.25-.41-.68-1.18-.97-1.95-1.07q-1.21-.14-2.8.15l-.89.17A8 8 0 0 0 4 12.26l-.52.6a9 9 0 0 0-1.88 2.4c-.36.74-.54 1.62-.06 2.37.43.7 1.23.98 2.03 1.08.82.1 1.82.01 2.92-.2l.66-.15q-.72-.55-1.31-1.26a8 8 0 0 1-2.1.12c-.63-.08-.86-.26-.93-.38-.07-.1-.13-.36.14-.93q.36-.75 1.34-1.75.47 1.67 1.55 2.94l.36-.06c2.02-.4 4.61-1.35 7.28-2.78a26 26 0 0 0 6.23-4.42q-.47-1.66-1.55-2.94a7 7 0 0 1 2.15-.11c.6.08.81.26.88.37s.13.33-.1.84q-.35.76-1.38 1.84.24.87.28 1.8"
            fill="currentColor"
          />
          <path
            d="M12 20a8 8 0 0 0 8-8.36 30 30 0 0 1-5.82 3.95 31 31 0 0 1-7.03 2.77A8 8 0 0 0 12 20"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlanet;
