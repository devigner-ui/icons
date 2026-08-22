import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBody = forwardRef<SVGSVGElement, IconProps>(function IconBody(
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
            d="M12.06 22h-.12c-.76 0-1.14 0-1.47-.15s-.57-.43-1.04-.99l-2.38-2.8c-.47-.55-.7-.82-.82-1.14-.12-.33-.12-.68-.12-1.38v-5.26c0-.69 0-1.03-.15-1.33s-.42-.53-.98-.97l-.2-.17C3.6 6.86 3 6.38 3 5.7s.52-1.12 1.57-2l.47-.35c.57-.41 1.4-.87 1.98-1.17.43-.22.95-.22 1.4-.02l.26.13q.1.05.17.14a3.92 3.92 0 0 0 6.3 0q.06-.1.17-.14l.26-.13c.45-.2.97-.2 1.4.02.58.3 1.41.76 1.98 1.17q.23.16.47.36C20.48 4.57 21 5 21 5.69c0 .7-.6 1.17-1.78 2.12l-.2.17c-.56.44-.83.67-.98.97s-.15.64-.15 1.33v5.26c0 .7 0 1.05-.12 1.38s-.35.6-.82 1.14l-2.38 2.8c-.47.56-.7.84-1.04 1-.33.14-.7.14-1.47.14"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m7.05 18.06 2.38 2.8 6.15-18.7-.26.12a.4.4 0 0 0-.17.14 3.92 3.92 0 0 1-6.3 0 .4.4 0 0 0-.17-.14l-.26-.13c-.45-.2-.97-.2-1.4.02-.58.3-1.41.76-1.98 1.17q-.23.16-.47.36C3.52 4.57 3 5 3 5.69c0 .7.6 1.17 1.78 2.12l.2.17c.56.44.83.67.98.97s.15.64.15 1.33v5.26c0 .7 0 1.05.12 1.38s.35.6.82 1.14"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.94 22h.12c.76 0 1.14 0 1.47-.15s.57-.43 1.04-.99l2.38-2.8c.47-.55.7-.82.82-1.14.12-.33.12-.68.12-1.38v-5.26c0-.69 0-1.03.15-1.33s.42-.53.98-.97l.2-.17C20.4 6.86 21 6.38 21 5.7s-.52-1.12-1.57-2l-.47-.35c-.57-.41-1.4-.87-1.98-1.17a1.6 1.6 0 0 0-1.4-.02l-6.15 18.7c.47.56.7.84 1.04 1 .33.14.7.14 1.47.14"
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
            d="M12.06 22h-.12c-.76 0-1.14 0-1.47-.15s-.57-.43-1.04-.99l-2.38-2.8c-.47-.55-.7-.82-.82-1.14-.12-.33-.12-.68-.12-1.38v-5.26c0-.69 0-1.03-.15-1.33s-.42-.53-.98-.97l-.2-.17C3.6 6.86 3 6.38 3 5.7s.52-1.12 1.57-2l.47-.35c.57-.41 1.4-.87 1.98-1.17.43-.22.95-.22 1.4-.02l.26.13q.1.05.17.14a3.92 3.92 0 0 0 6.3 0q.06-.1.17-.14l.26-.13c.45-.2.97-.2 1.4.02.58.3 1.41.76 1.98 1.17q.23.16.47.36C20.48 4.57 21 5 21 5.69c0 .7-.6 1.17-1.78 2.12l-.2.17c-.56.44-.83.67-.98.97s-.15.64-.15 1.33v5.26c0 .7 0 1.05-.12 1.38s-.35.6-.82 1.14l-2.38 2.8c-.47.56-.7.84-1.04 1-.33.14-.7.14-1.47.14"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBody;
