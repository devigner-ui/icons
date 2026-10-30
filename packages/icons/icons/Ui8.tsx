import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUi8 = forwardRef<SVGSVGElement, IconProps>(function IconUi8(
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
            d="M2 11.19V9.46a2 2 0 0 1 1.15-1.81l6.5-3.06a2 2 0 0 1 1.7 0l2.67 1.26-.02.35a4 4 0 0 0 5 3.87v6.86a2 2 0 0 1-1.15 1.81l-6.5 3.06c-.54.25-1.16.25-1.7 0l-6.5-3.06A2 2 0 0 1 2 16.93v-1.29"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 10.7v3c0 1.1.9 2 2 2a2 2 0 0 0 2-2v-3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="M14 10.7v4.94"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="M22 6.2a4 4 0 1 1-8 0l.02-.34A3.99 3.99 0 0 1 22 6.2Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            stroke="currentColor"
          />
          <path
            d="M19.09 6.11q.37-.32.37-.83C19.46 4.51 18.88 4 18 4s-1.46.52-1.46 1.28q0 .5.37.83-.49.38-.5.98c0 .81.61 1.31 1.6 1.31s1.6-.5 1.6-1.31a1.2 1.2 0 0 0-.52-.98ZM18 5.71q-.42-.02-.44-.38c0-.28.23-.37.44-.37s.44.1.44.37q-.02.36-.44.38Zm0 .83c.28 0 .58.12.58.45q-.02.45-.58.46-.56-.01-.58-.46c0-.41.44-.45.58-.45Z"
            fill="currentColor"
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
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M19 9.9v6.9c0 .8-.4 1.5-1.1 1.8l-6.5 3.1c-.5.2-1.2.2-1.7 0l-6.5-3.1c-.7-.3-1.1-1-1.1-1.8V9.3c0-.8.4-1.5 1.1-1.8l6.5-3.1c.5-.2 1.2-.2 1.7 0L14 5.7V6c0 2.2 1.8 4 4 4 .4 0 .7 0 1-.1"
          />
          <path
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeMiterlimit={10}
            d="M7 10.5v3c0 1.1.9 2 2 2s2-.9 2-2v-3m3 0v4.9"
            opacity={duotone ? "0.4" : "1"}
          />
          <path
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit={10}
            d="M22 6c0 1.9-1.3 3.4-3 3.9-.3.1-.6.1-1 .1-2.2 0-4-1.8-4-4v-.3c.2-2 1.9-3.7 4-3.7 2.2 0 4 1.8 4 4"
          />
          <path
            fill="currentColor"
            d="M19.1 5.9c.2-.2.4-.5.4-.8 0-.8-.6-1.3-1.5-1.3s-1.5.5-1.5 1.3c0 .3.1.6.4.8-.3.2-.5.6-.5 1 0 .8.6 1.3 1.6 1.3s1.6-.5 1.6-1.3c0-.4-.2-.8-.5-1M18 5.5c-.3 0-.4-.1-.4-.4s.2-.4.4-.4.4.1.4.4-.1.4-.4.4m0 .8c.3 0 .6.1.6.5 0 .3-.2.5-.6.5s-.6-.2-.6-.5c0-.4.5-.5.6-.5"
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
            d="M24 0H0v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 9.87v6.86a2 2 0 0 1-1.15 1.81l-6.5 3.06c-.54.25-1.16.25-1.7 0l-6.5-3.06A2 2 0 0 1 2 16.73V9.27a2 2 0 0 1 1.15-1.81l6.5-3.06a2 2 0 0 1 1.7 0l2.67 1.26L14 6a4 4 0 0 0 5 3.87"
            fill="currentColor"
          />
          <path
            d="M9 16.25a2.75 2.75 0 0 1-2.75-2.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3a1.25 1.25 0 0 0 2.5 0v-3c0-.41.34-.75.75-.75s.75.34.75.75v3A2.75 2.75 0 0 1 9 16.25"
            fill="currentColor"
          />
          <path
            d="M14 16.19a.76.76 0 0 1-.75-.75V10.5c0-.41.34-.75.75-.75s.75.34.75.75v4.94c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18 6.34c-.14 0-.58.03-.58.45q.02.45.58.46.56-.01.58-.46c0-.33-.3-.45-.58-.45"
            fill="currentColor"
          />
          <path
            d="M18 5.51q.42-.02.44-.38c0-.28-.23-.37-.44-.37s-.44.1-.44.37q.02.36.44.38"
            fill="currentColor"
          />
          <path
            d="M18 2a4 4 0 0 0-3.98 3.66L14 6a4 4 0 1 0 4-4m0 6.2c-.99 0-1.6-.5-1.6-1.31q.01-.6.5-.98-.36-.32-.37-.83c0-.77.59-1.28 1.46-1.28s1.46.52 1.46 1.28q0 .5-.37.83.5.36.51.98c.01.81-.6 1.31-1.59 1.31"
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
            d="M18 6.34c-.14 0-.58.03-.58.45q.02.45.58.46.56-.01.58-.46c0-.33-.3-.45-.58-.45"
            fill="currentColor"
          />
          <path
            d="M18 5.51q.42-.02.44-.38c0-.28-.23-.37-.44-.37s-.44.1-.44.37q.02.36.44.38"
            fill="currentColor"
          />
          <path
            d="M18 2a4 4 0 0 0-3.98 3.66L14 6a4 4 0 1 0 4-4m0 6.2c-.99 0-1.6-.5-1.6-1.31q.01-.6.5-.98-.36-.32-.37-.83c0-.77.59-1.28 1.46-1.28s1.46.52 1.46 1.28q0 .5-.37.83.5.36.51.98c.01.81-.6 1.31-1.59 1.31"
            fill="currentColor"
          />
          <path
            d="M18 11.5a5.4 5.4 0 0 1-3.1-.96.1.1 0 0 0-.16.08l.01 4.82a.75.75 0 1 1-1.5 0V10.5c0-.33.22-.61.52-.71.08-.03.13-.14.07-.2a5.5 5.5 0 0 1-1.31-4.1l.01-.11a.5.5 0 0 0-.29-.55l-.9-.43a2 2 0 0 0-1.7 0l-6.5 3.06A2 2 0 0 0 2 9.27v7.46a2 2 0 0 0 1.15 1.81l6.5 3.06c.54.25 1.16.25 1.7 0l6.5-3.06A2 2 0 0 0 19 16.73v-4.71c0-.31-.29-.55-.6-.53zm-6.25 2a2.75 2.75 0 1 1-5.5 0v-3c0-.41.34-.75.75-.75s.75.34.75.75v3a1.25 1.25 0 0 0 2.5 0v-3c0-.41.34-.75.75-.75s.75.34.75.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUi8;
