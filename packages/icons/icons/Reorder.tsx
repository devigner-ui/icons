import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReorder = forwardRef<SVGSVGElement, IconProps>(function IconReorder(
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
            d="M2 17.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75s0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55C2 18.9 2 18.43 2 17.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 17.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75s0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 17.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75s0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M4.5 15V9c0-2.36 0-3.54.73-4.27S7.14 4 9.5 4h5c2.36 0 3.54 0 4.27.73s.73 1.91.73 4.27v3m0 0 2-2m-2 2-2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M9.5 17.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75s0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 17.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75s0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75"
            fill="currentColor"
          />
          <path
            d="M9.45 3.25c-1.14 0-2.06 0-2.8.1-.76.1-1.42.32-1.95.85s-.75 1.2-.85 1.96c-.1.73-.1 1.65-.1 2.79V15c-.47.02-.76.06-1 .2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75s0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55 2 2 0 0 0-1-.2V9c0-1.2 0-2.02.08-2.64.09-.6.23-.9.43-1.1s.5-.34 1.1-.43a22 22 0 0 1 2.64-.08h5c1.2 0 2.02 0 2.64.08.6.09.9.23 1.1.43s.34.5.43 1.1c.08.62.08 1.44.08 2.64v1.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V8.95c0-1.14 0-2.06-.1-2.8a3.2 3.2 0 0 0-.85-1.95 3.2 3.2 0 0 0-1.96-.85c-.73-.1-1.65-.1-2.79-.1z"
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
            d="M9.45 3.25c-1.14 0-2.06 0-2.8.1-.76.1-1.42.32-1.95.85s-.75 1.2-.85 1.96c-.1.73-.1 1.65-.1 2.79V15c-.47.01-.76.05-1 .2a1.5 1.5 0 0 0-.55.54c-.2.35-.2.82-.2 1.75s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75s0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55 2 2 0 0 0-1-.2V9c0-1.2 0-2.02.08-2.64.09-.6.23-.9.43-1.1s.5-.34 1.1-.43a22 22 0 0 1 2.64-.08h5c1.2 0 2.02 0 2.64.08.6.09.9.23 1.1.43s.34.5.43 1.1c.08.62.08 1.44.08 2.64v1.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V8.95c0-1.14 0-2.06-.1-2.8a3.2 3.2 0 0 0-.85-1.95 3.2 3.2 0 0 0-1.96-.85c-.73-.1-1.65-.1-2.79-.1z"
            fill="currentColor"
          />
          <path
            d="M9.7 15.75c-.2.35-.2.82-.2 1.75s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75s0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2s-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55"
            fill="currentColor"
          />
          <path
            d="M17 17.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75s0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconReorder;
