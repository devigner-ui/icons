import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBox2 = forwardRef<SVGSVGElement, IconProps>(function IconBox2(
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
            d="m14.89 9.78-2.22 1.11m0 0-2.22-1.11m2.22 1.11v2.78m2.22-10.56L12.67 2l-2.22 1.11M6 18.67l-2.22-1.11v-2.78m15.56 3.89 2.22-1.11v-2.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m21.56 6.91-2.22 1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.56 6.91 19.34 5.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.56 6.91v2.78"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.78 6.91 6 5.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.78 6.91 6 8.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.78 6.91v2.78"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.67 22.47-2.22-1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.67 22.47 2.22-1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22.47v-2.78"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M6 19.42a1 1 0 0 1-.33-.08l-2.22-1.11a.8.8 0 0 1-.41-.67v-2.78c0-.41.34-.75.75-.75s.75.34.75.75v2.31l1.81.9c.37.19.52.64.34 1.01a.8.8 0 0 1-.69.42"
            fill="currentColor"
          />
          <path
            d="m12.67 22.75-.17-.02-.18-.07-2.21-1.1a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l1.14.57v-1.56c0-.41.34-.75.75-.75s.75.34.75.75v1.56l1.14-.57a.76.76 0 0 1 1.01.34c.19.37.04.82-.34 1.01l-2.21 1.1-.18.07z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.34 19.42a.75.75 0 0 1-.33-1.42l1.81-.9v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.78c0 .28-.16.54-.41.67l-2.22 1.11a1 1 0 0 1-.35.07"
            fill="currentColor"
          />
          <path
            d="M12.67 14.42a.76.76 0 0 1-.75-.75v-2.31l-1.81-.9a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l1.89.94 1.89-.94a.75.75 0 0 1 .67 1.35l-1.81.9v2.31c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.78 9.97a.76.76 0 0 1-.75-.75V6.45l.02-.17.09-.22a1 1 0 0 1 .24-.24l.07-.04 2.21-1.1a.75.75 0 0 1 .67 1.35l-.88.44.88.44c.37.19.52.64.34 1.01a.76.76 0 0 1-1.01.34l-1.14-.57v1.56a.7.7 0 0 1-.74.72"
            fill="currentColor"
          />
          <path
            d="M14.89 3.86a1 1 0 0 1-.33-.08l-1.89-.94-1.89.94a.75.75 0 0 1-1.01-.34.75.75 0 0 1 .34-1.01l2.22-1.11a.7.7 0 0 1 .67 0l2.22 1.11c.37.19.52.64.34 1.01a.7.7 0 0 1-.67.42"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.56 9.97a.76.76 0 0 1-.75-.75V7.66l-1.14.57a.75.75 0 0 1-1.01-.34.75.75 0 0 1 .34-1.01l.88-.44L19 6a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l2.21 1.1.07.04q.09.05.16.13l.09.12q.06.1.09.22l.02.17V9.2c0 .44-.34.77-.75.77"
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
            d="M6 19.42a1 1 0 0 1-.33-.08l-2.22-1.11a.8.8 0 0 1-.41-.67v-2.78c0-.41.34-.75.75-.75s.75.34.75.75v2.31l1.8.91c.37.18.52.63.33 1a.8.8 0 0 1-.67.42"
            fill="currentColor"
          />
          <path
            d="m12.67 22.75-.17-.02-.18-.07-2.21-1.1a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l1.14.57v-1.56c0-.41.34-.75.75-.75s.75.34.75.75v1.56l1.14-.57a.76.76 0 0 1 1.01.34c.19.37.04.82-.34 1.01l-2.21 1.1-.18.07z"
            fill="currentColor"
          />
          <path
            d="M19.34 19.42a.75.75 0 0 1-.33-1.42l1.81-.9v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.78c0 .28-.16.54-.41.67l-2.24 1.1a1 1 0 0 1-.33.08"
            fill="currentColor"
          />
          <path
            d="M12.67 14.42a.76.76 0 0 1-.75-.75v-2.31l-1.81-.9a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l1.89.94 1.89-.94a.75.75 0 0 1 .67 1.35l-1.81.9v2.31c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M3.78 9.97a.76.76 0 0 1-.75-.75V6.45a1 1 0 0 1 .11-.4l.11-.13.14-.11.07-.04 2.21-1.11a.75.75 0 0 1 1 .34c.19.37.04.82-.33 1l-.88.44.88.44c.37.19.52.64.33 1.01a.75.75 0 0 1-1 .34l-1.14-.57v1.56c0 .42-.33.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M14.89 3.86a1 1 0 0 1-.33-.08l-1.89-.94-1.89.94a.74.74 0 0 1-1-.33.75.75 0 0 1 .33-1.01l2.22-1.11a.7.7 0 0 1 .67 0l2.22 1.11c.37.19.52.64.34 1.01a.7.7 0 0 1-.67.41"
            fill="currentColor"
          />
          <path
            d="M21.56 9.97a.76.76 0 0 1-.75-.75V7.66l-1.14.57a.75.75 0 0 1-1-.34.75.75 0 0 1 .34-1.01l.88-.44L19 6a.74.74 0 0 1-.33-1 .75.75 0 0 1 1-.34l2.21 1.1.07.04q.09.05.16.13l.09.12q.06.1.09.22l.02.17v2.77c0 .43-.34.76-.75.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBox2;
