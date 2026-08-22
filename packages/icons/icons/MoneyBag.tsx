import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoneyBag = forwardRef<SVGSVGElement, IconProps>(function IconMoneyBag(
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
            d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 6c0-1.89 0-2.83-.59-3.41C14.83 2 13.9 2 12 2s-2.83 0-3.41.59C8 3.17 8 4.1 8 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 17.33c1.1 0 2-.74 2-1.66S13.1 14 12 14s-2-.75-2-1.67.9-1.66 2-1.66m0 6.66c-1.1 0-2-.74-2-1.66m2 1.66V18m0-8v.67m0 0c1.1 0 2 .74 2 1.66"
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
            d="M3.17 7.17c.85-.84 2.06-1.08 4.08-1.14L8.75 6h6.5l1.5.03c2.02.06 3.23.3 4.08 1.14C22 8.34 22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14s0-5.66 1.17-6.83"
            fill="currentColor"
          />
          <path
            d="M12.75 10a.75.75 0 0 0-1.5 0v.01c-1.09.28-2 1.13-2 2.32 0 1.46 1.37 2.42 2.75 2.42.82 0 1.25.53 1.25.92 0 .38-.43.91-1.25.91s-1.25-.53-1.25-.91a.75.75 0 1 0-1.5 0c0 1.19.91 2.05 2 2.32V18a.75.75 0 0 0 1.5 0v-.01c1.09-.27 2-1.13 2-2.32 0-1.46-1.37-2.42-2.75-2.42-.82 0-1.25-.53-1.25-.92 0-.38.43-.91 1.25-.91s1.25.53 1.25.91a.75.75 0 0 0 1.5 0c0-1.19-.91-2.04-2-2.32"
            fill="currentColor"
          />
          <path
            d="M12.05 1.25h-.1c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.06.42-.07 1.44-.08 2.32L8.75 6c0-.84.02-1.76.07-2.1.06-.46.17-.65.3-.78s.32-.24.79-.3c.48-.07 1.13-.07 2.09-.07s1.61 0 2.1.07c.46.06.65.17.78.3s.24.32.3.79c.05.33.06 1.25.07 2.1l1.5.02c0-.88-.02-1.9-.08-2.32a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08"
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
            d="M12.05 1.25h-.1c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.06.42-.07 1.44-.08 2.32-2.02.06-3.23.3-4.08 1.14C2 8.34 2 10.23 2 14s0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14s0-5.66-1.17-6.83c-.85-.84-2.06-1.08-4.08-1.14 0-.88-.02-1.9-.08-2.32a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08M15.25 6c0-.84-.02-1.76-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07s-1.61 0-2.1.07c-.46.06-.65.17-.78.3s-.24.32-.3.79c-.05.33-.06 1.25-.07 2.1L10 6zM12 9.25c.41 0 .75.34.75.75v.01c1.09.28 2 1.13 2 2.32a.75.75 0 0 1-1.5 0c0-.38-.43-.91-1.25-.91s-1.25.53-1.25.91c0 .39.43.92 1.25.92 1.38 0 2.75.96 2.75 2.42 0 1.19-.91 2.05-2 2.32V18a.75.75 0 0 1-1.5 0v-.01c-1.09-.27-2-1.13-2-2.32a.75.75 0 1 1 1.5 0c0 .38.43.91 1.25.91s1.25-.53 1.25-.91c0-.39-.43-.92-1.25-.92-1.38 0-2.75-.96-2.75-2.42 0-1.19.91-2.04 2-2.32 0-.42.34-.76.75-.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMoneyBag;
