import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignTop = forwardRef<SVGSVGElement, IconProps>(function IconAlignTop(
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
            d="M2 3h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.5 7c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55C5 8.1 5 8.57 5 9.5v9c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-9c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C8.9 7 8.43 7 7.5 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16.5 7c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75v6c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-6c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C17.9 7 17.43 7 16.5 7"
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
            d="M7.5 7.75c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75v9c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-9c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2"
            fill="currentColor"
          />
          <path
            d="M16.5 7.75c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75v6c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-6c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.75 3.75c0 .41-.34.75-.75.75H2A.75.75 0 1 1 2 3h20c.41 0 .75.34.75.75"
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
            d="M1.25 3.75c0 .41.34.75.75.75h20A.75.75 0 0 0 22 3H2a.75.75 0 0 0-.75.75"
            fill="currentColor"
          />
          <path
            d="M7.5 7.75c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75v9c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-9c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2"
            fill="currentColor"
          />
          <path
            d="M16.5 7.75c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75v6c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-6c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAlignTop;
