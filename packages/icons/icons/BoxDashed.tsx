import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBoxDashed = forwardRef<SVGSVGElement, IconProps>(function IconBoxDashed(
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
      {variant === "Broken" ? (
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
            d="m18.67 18.67 2.22-1.11v-2.78m-6.67-5L12 10.89zM12 10.89 9.78 9.78zm0 0v2.78zm8.89-4.45-2.22 1.11zm0 0-2.22-1.11zm0 0v2.78zm-6.67-3.33L12 2 9.78 3.11zM3.1 6.44l2.22-1.11zm0 0 2.22 1.11zm0 0v2.78zM12 22l-2.22-1.11zm0 0 2.22-1.11zm0 0v-2.78zm-6.67-3.33L3.1 17.56v-2.78z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
            d="M14.22 9.53 12 10.64m0 0L9.78 9.53M12 10.64v2.78m2.22-10.56L12 1.75 9.78 2.86M5.33 18.42l-2.22-1.11v-2.78m15.56 3.89 2.22-1.11v-2.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m20.89 6.66-2.22 1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.89 6.66-2.22-1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.89 6.66v2.78"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m3.11 6.66 2.22-1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m3.11 6.66 2.22 1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.11 6.66v2.78"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12 22.22-2.22-1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12 22.22 2.22-1.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22.22v-2.78"
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
            d="M5.33 19.42a1 1 0 0 1-.33-.08l-2.22-1.11a.8.8 0 0 1-.41-.67v-2.78c0-.41.34-.75.75-.75s.75.34.75.75v2.31l1.81.9c.37.19.52.64.34 1.01a.8.8 0 0 1-.69.42"
            fill="currentColor"
          />
          <path
            d="m12 22.75-.17-.02-.18-.07-2.21-1.1a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l1.14.57v-1.56c0-.41.34-.75.75-.75s.75.34.75.75v1.56l1.14-.57a.76.76 0 0 1 1.01.34c.19.37.04.82-.34 1.01l-2.21 1.1-.18.07z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 19.42a.75.75 0 0 1-.33-1.42l1.81-.9v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.78c0 .28-.16.54-.41.67l-2.22 1.11a1 1 0 0 1-.35.07"
            fill="currentColor"
          />
          <path
            d="M12 14.42a.76.76 0 0 1-.75-.75v-2.31l-1.81-.9a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l1.89.94 1.89-.94a.75.75 0 0 1 .67 1.35l-1.81.9v2.31c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.11 9.97a.76.76 0 0 1-.75-.75V6.45l.02-.17.09-.22a1 1 0 0 1 .24-.24l.07-.04 2.21-1.1a.75.75 0 0 1 .67 1.35l-.88.44.88.44c.37.19.52.64.34 1.01a.76.76 0 0 1-1.01.34l-1.14-.57v1.56a.7.7 0 0 1-.74.72"
            fill="currentColor"
          />
          <path
            d="M14.22 3.86a1 1 0 0 1-.33-.08L12 2.84l-1.89.94a.75.75 0 0 1-1.01-.34.75.75 0 0 1 .34-1.01l2.22-1.11a.7.7 0 0 1 .67 0l2.22 1.11c.37.19.52.64.34 1.01a.7.7 0 0 1-.67.42"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.89 9.97a.76.76 0 0 1-.75-.75V7.66L19 8.23a.75.75 0 0 1-1.01-.34.75.75 0 0 1 .34-1.01l.88-.44-.88-.44a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l2.21 1.1.07.04q.09.05.16.13l.09.12q.06.1.09.22l.02.17V9.2c0 .44-.34.77-.75.77"
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
            d="M5.33 19.42a1 1 0 0 1-.33-.08l-2.22-1.11a.8.8 0 0 1-.41-.67v-2.78c0-.41.34-.75.75-.75s.75.34.75.75v2.31l1.8.91c.37.18.52.63.33 1a.8.8 0 0 1-.67.42"
            fill="currentColor"
          />
          <path
            d="m12 22.75-.17-.02-.18-.07-2.21-1.1a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l1.14.57v-1.56c0-.41.34-.75.75-.75s.75.34.75.75v1.56l1.14-.57a.76.76 0 0 1 1.01.34c.19.37.04.82-.34 1.01l-2.21 1.1-.18.07z"
            fill="currentColor"
          />
          <path
            d="M18.67 19.42a.75.75 0 0 1-.33-1.42l1.81-.9v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.78c0 .28-.16.54-.41.67L19 19.34a1 1 0 0 1-.33.08"
            fill="currentColor"
          />
          <path
            d="M12 14.42a.76.76 0 0 1-.75-.75v-2.31l-1.81-.9a.76.76 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l1.89.94 1.89-.94a.75.75 0 0 1 .67 1.35l-1.81.9v2.31c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M3.11 9.97a.76.76 0 0 1-.75-.75V6.45a1 1 0 0 1 .11-.4l.11-.13.14-.11.07-.04L5 4.66A.75.75 0 0 1 6 5c.19.37.04.82-.33 1l-.88.44.88.44c.37.19.52.64.33 1.01a.75.75 0 0 1-1 .34l-1.14-.57v1.56c0 .42-.33.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M14.22 3.86a1 1 0 0 1-.33-.08L12 2.84l-1.89.94a.74.74 0 0 1-1-.33.75.75 0 0 1 .33-1.01l2.22-1.11a.7.7 0 0 1 .67 0l2.22 1.11c.37.19.52.64.34 1.01a.7.7 0 0 1-.67.41"
            fill="currentColor"
          />
          <path
            d="M20.89 9.97a.76.76 0 0 1-.75-.75V7.66L19 8.23a.75.75 0 0 1-1-.34.75.75 0 0 1 .34-1.01l.88-.44-.89-.44A.74.74 0 0 1 18 5a.75.75 0 0 1 1-.34l2.21 1.1.07.04q.09.05.16.13l.09.12q.06.1.09.22l.02.17v2.77c0 .43-.34.76-.75.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBoxDashed;
