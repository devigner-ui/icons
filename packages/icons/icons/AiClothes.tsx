import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiClothes = forwardRef<SVGSVGElement, IconProps>(function IconAiClothes(
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
            d="M17.5 12.78V10.4l.8.4c.5.2 1.1 0 1.4-.5L21 7.9c.3-.6.1-1.3-.5-1.6l-5-2.8c-.4 1.6-1.8 2.7-3.5 2.7S8.9 5.1 8.5 3.5l-5 2.8c-.6.3-.8 1-.5 1.6l1.3 2.4c.3.5.9.7 1.4.5l.8-.4V19c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5v-3.82"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="m8.5 3.5-5 2.8c-.6.3-.8 1-.5 1.6l1.3 2.4c.3.5.9.7 1.4.5l.8-.4V19c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5v-8.6l.8.4c.5.2 1.1 0 1.4-.5L21 7.9c.3-.6.1-1.3-.5-1.6l-5-2.8c-.4 1.6-1.8 2.7-3.5 2.7S8.9 5.1 8.5 3.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M12 5.45a2.7 2.7 0 0 0 1.78-.6c.52-.4.84-.85 1-1.53a.75.75 0 0 1 1.09-.47l4.97 2.78c.42.25.84.72.97 1.14a2.5 2.5 0 0 1-.15 1.49l-1.32 2.43c-.24.35-.65.7-1.02.83-.28.1-.71.1-1.07.02V19c-.03.56-.3 1.22-.67 1.58s-1.02.63-1.58.67H8a2.7 2.7 0 0 1-1.58-.67A2.7 2.7 0 0 1 5.75 19v-7.44a2 2 0 0 1-1.07-.04c-.37-.13-.8-.5-1.04-.86L2.33 8.24a2.4 2.4 0 0 1-.13-1.47c.12-.42.5-.87.93-1.12l5-2.8a.75.75 0 0 1 1.1.47 2.5 2.5 0 0 0 1 1.54c.51.4 1.05.6 1.77.6z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 10.1c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.14-1.7.38-2.16.84-.46.47-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.46-1.1-.7-2.16-.84a.4.4 0 0 1 0-.8c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M12 5.45a2.7 2.7 0 0 0 1.78-.6c.52-.4.84-.85 1-1.53a.75.75 0 0 1 1.09-.47l4.97 2.78c.42.25.84.72.97 1.14a2.5 2.5 0 0 1-.15 1.49l-1.32 2.43c-.24.35-.65.7-1.02.83-.28.1-.71.1-1.07.02V19c-.03.56-.3 1.22-.67 1.58s-1.02.63-1.58.67H8a2.7 2.7 0 0 1-1.58-.67A2.7 2.7 0 0 1 5.75 19v-7.44a2 2 0 0 1-1.07-.04c-.37-.13-.8-.5-1.04-.86L2.33 8.24a2.4 2.4 0 0 1-.13-1.47c.12-.42.5-.87.93-1.12l5-2.8a.75.75 0 0 1 1.1.47 2.5 2.5 0 0 0 1 1.54c.51.4 1.05.6 1.77.6zm0 4.3a.4.4 0 0 0-.4.35c-.14 1.06-.38 1.7-.84 2.16-.47.46-1.1.7-2.16.84a.4.4 0 0 0 0 .8c1.06.14 1.7.38 2.16.84.46.47.7 1.1.84 2.16a.4.4 0 0 0 .8 0c.14-1.06.38-1.7.84-2.16.47-.46 1.1-.7 2.16-.84a.4.4 0 0 0 0-.8c-1.06-.14-1.7-.38-2.16-.84-.46-.47-.7-1.1-.84-2.16a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiClothes;
