import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlanet2 = forwardRef<SVGSVGElement, IconProps>(function IconPlanet2(
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
            d="M17.67 6.22c2.1-.41 3.65-.26 4.16.54 1.01 1.62-2.57 5.27-8 8.17-5.43 2.89-10.65 3.92-11.66 2.3-.51-.82.16-2.17 1.67-3.68"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray="3.5 2.5"
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
            d="M19 6.78a.75.75 0 0 0-.13-1.49q-.63.05-1.34.2a.8.8 0 0 0-.48.3l1.12 1.1.84-.1"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.94 5.38a.75.75 0 1 0-.35 1.46c.4.1.55.23.6.32.07.1.14.37-.15.95a.75.75 0 1 0 1.34.67c.38-.76.56-1.65.09-2.41a2.4 2.4 0 0 0-1.53-1m-.23 5.58a.75.75 0 0 0-1.06-1.06q-1.04 1.05-2.61 2.18a.75.75 0 1 0 .87 1.22q1.66-1.19 2.8-2.34m-17.11 4q.3-.38.7-.8l-.23-1.32a.8.8 0 0 0-.75.19q-.5.5-.9 1a.75.75 0 1 0 1.18.93m12.16-.25a.75.75 0 0 0-.77-1.28 35 35 0 0 1-3.1 1.64.75.75 0 0 0 .65 1.36 37 37 0 0 0 3.22-1.72M2.81 16.25a.75.75 0 1 0-1.42-.46c-.2.6-.22 1.27.15 1.84.45.73 1.3 1.01 2.15 1.1a.75.75 0 1 0 .14-1.5c-.7-.07-.95-.27-1.02-.4-.05-.07-.1-.23 0-.58m7.27 1.2a.75.75 0 0 0-.52-1.4q-1.86.69-3.37.99a.75.75 0 0 0 .3 1.47q1.64-.33 3.6-1.06"
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
            d="M12 20a8 8 0 0 0 8-8.36q.38-.34.71-.68a.75.75 0 0 0-1-1.11q-.47-1.66-1.55-2.95.45-.08.85-.12a.75.75 0 0 0-.14-1.49q-.63.05-1.34.2a.8.8 0 0 0-.48.3 8 8 0 0 0-13.01 7.02.8.8 0 0 0-.73.2q-.5.5-.9 1a.75.75 0 1 0 1.18.94q.3-.38.7-.8a8 8 0 0 0 1.6 3.02.75.75 0 0 0 .6 1.34l.66-.15A8 8 0 0 0 12 20m-4.85-1.64a8 8 0 0 1-1.26-1.19 1 1 0 0 1 .3-.13q1.51-.3 3.37-1a.75.75 0 0 1 .52 1.41q-1.55.59-2.93.91m12.56-8.51-.06.05q-1.04 1.05-2.61 2.18a.75.75 0 0 0 .87 1.22q1.16-.82 2.08-1.66a8 8 0 0 0-.28-1.79m1.23-4.47a.75.75 0 1 0-.35 1.46c.4.1.55.23.6.32.07.1.14.37-.15.95a.75.75 0 0 0 1.34.67c.38-.76.56-1.65.08-2.41a2.4 2.4 0 0 0-1.52-1M2.8 16.25a.75.75 0 0 0-1.42-.46c-.2.6-.22 1.27.14 1.84.46.73 1.31 1.01 2.16 1.1a.75.75 0 1 0 .14-1.5c-.7-.07-.95-.27-1.02-.4-.05-.07-.1-.23 0-.58m12.94-1.55a.75.75 0 1 0-.77-1.28 35 35 0 0 1-3.1 1.64.75.75 0 0 0 .65 1.36 37 37 0 0 0 3.22-1.72"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlanet2;
