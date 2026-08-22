import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChatRoundMoney = forwardRef<SVGSVGElement, IconProps>(
  function IconChatRoundMoney(
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
              d="M12 22a10 10 0 1 0-8.96-5.55q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 15.33c1.1 0 2-.74 2-1.66S13.1 12 12 12s-2-.75-2-1.67.9-1.66 2-1.66m0 6.66c-1.1 0-2-.74-2-1.66m2 1.66V16m0-8v.67m0 0c1.1 0 2 .74 2 1.66"
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
              d="M12 22a10 10 0 1 0-8.96-5.55q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
              fill="currentColor"
            />
            <path
              d="M12.75 8a.75.75 0 0 0-1.5 0v.01c-1.09.27-2 1.13-2 2.32 0 1.46 1.37 2.42 2.75 2.42.82 0 1.25.53 1.25.92 0 .38-.43.91-1.25.91s-1.25-.53-1.25-.91a.75.75 0 0 0-1.5 0c0 1.19.91 2.05 2 2.32V16a.75.75 0 1 0 1.5 0v-.01c1.09-.27 2-1.13 2-2.32 0-1.46-1.37-2.42-2.75-2.42-.82 0-1.25-.53-1.25-.92 0-.38.43-.91 1.25-.91s1.25.53 1.25.91a.75.75 0 0 0 1.5 0c0-1.19-.91-2.05-2-2.32z"
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
              d="M22 12a10 10 0 0 1-14.45 8.96 1.6 1.6 0 0 0-1.15-.14l-2.23.6a1.3 1.3 0 0 1-1.59-1.6l.6-2.22c.1-.38.04-.8-.14-1.15A10 10 0 1 1 22 12M12 7.25c.41 0 .75.34.75.75v.01c1.09.27 2 1.13 2 2.32a.75.75 0 0 1-1.5 0c0-.38-.43-.91-1.25-.91s-1.25.53-1.25.91c0 .39.43.92 1.25.92 1.38 0 2.75.96 2.75 2.42 0 1.19-.91 2.05-2 2.32V16a.75.75 0 1 1-1.5 0v-.01c-1.09-.27-2-1.13-2-2.32a.75.75 0 0 1 1.5 0c0 .38.43.91 1.25.91s1.25-.53 1.25-.91c0-.39-.43-.92-1.25-.92-1.38 0-2.75-.96-2.75-2.42 0-1.19.91-2.05 2-2.32V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChatRoundMoney;
