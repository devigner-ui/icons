import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDislike = forwardRef<SVGSVGElement, IconProps>(function IconDislike(
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
            d="m20.98 11.82-.74.12zm-.71-4.08-.74.12zM6.94 3.52l-.75-.06zm-.81 9.4.74.06zm7.86 5.86.75-.12zm-.66-4.05.74-.12zm-6.63-.4-.5.56zm1.44 1.23.49-.57zm2.38 3.66-.73.18zm.47 1.83.73-.19zm1.68.89-.23-.72zm.14-.05.23.71zm-2.95-4.35.66-.36zm4.04 3.21-.72-.19zm-2.23 1.12-.32.67zm8.57-9.93-.7-4.08L21 7.61l.7 4.08zm-7-9.19H8.6v-1.5h4.64zm-5.56.84-.8 9.4-1.5-.14.81-9.4zm11.85 4.27a6.3 6.3 0 0 0-6.29-5.11v-1.5a7.8 7.8 0 0 1 7.77 6.36zM13.25 18.9l-.66-4.04 1.48-.25.67 4.05zM7.2 13.75 8.63 15l-.98 1.14L6.2 14.9zm4.05 5.28.48 1.83-1.45.38-.48-1.84zm1.2 2.2.14-.05.46 1.42-.14.05zm-1.92-4.05q.48.88.72 1.85l-1.45.37a7 7 0 0 0-.59-1.5zm2.06 4c.31-.1.53-.34.6-.62l1.45.38c-.2.8-.81 1.41-1.59 1.66zm-.86-.32q.05.22.28.33l-.65 1.35a2 2 0 0 1-1.08-1.3zm.28.33q.21.1.44.03l.46 1.43a2 2 0 0 1-1.55-.1zm2.15-8.17h5.18v1.5h-5.18zm.59 5.64q.17 1.16-.1 2.28l-1.46-.38q.21-.82.07-1.66zM8.6 2.75a.9.9 0 0 0-.92.84L6.2 3.46a2.4 2.4 0 0 1 2.4-2.21zm.03 12.24a8 8 0 0 1 1.9 2.2l-1.33.7c-.35-.65-.9-1.2-1.55-1.76zm13.08-3.3a2.42 2.42 0 0 1-2.38 2.83v-1.5c.57 0 1-.52.9-1.08zm-9.12 3.17a1.58 1.58 0 0 1 1.56-1.84v1.5a.1.1 0 0 0-.08.1zm-5.72-1.88q-.02.47.32.77L6.2 14.9c-.59-.5-.9-1.26-.83-2.04z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.97 2.53-.75-.07zM3 13.77l.75.06a.75.75 0 0 1-1.5-.06zM4.72 2.59l-.97 11.24-1.5-.13.97-11.24zm-.97-.1v11.28h-1.5V2.49zm-.53-.03c0 .16.11.29.27.29v-1.5c.72 0 1.3.62 1.23 1.34zm.27.29c.14 0 .26-.12.26-.26h-1.5c0-.69.55-1.24 1.24-1.24z"
            fill="currentColor"
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
            d="m20.27 8.49.7 4.08a1.67 1.67 0 0 1-1.63 1.95h-5.19c-.51 0-.9.46-.82.96l.67 4.05q.15 1-.1 1.97a1.6 1.6 0 0 1-1.09 1.14l-.14.05q-.52.15-1-.07a1.3 1.3 0 0 1-.68-.82l-.47-1.83a8 8 0 0 0-.66-1.68 7 7 0 0 0-1.72-1.98L6.7 15.07c-.4-.35-.62-.87-.57-1.4l.8-9.4c.08-.86.8-1.52 1.67-1.52h4.65a7.05 7.05 0 0 1 7.02 5.74"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97 15.27c.4.01.74-.29.78-.69l.97-11.24a1.24 1.24 0 1 0-2.47-.1v11.28c0 .4.32.73.72.75"
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
            d="m20.27 8.49.7 4.08a1.67 1.67 0 0 1-1.63 1.95h-5.19c-.51 0-.9.46-.82.96l.67 4.05q.15 1-.1 1.97a1.6 1.6 0 0 1-1.09 1.14l-.14.05q-.52.15-1-.07a1.3 1.3 0 0 1-.68-.82l-.47-1.83a8 8 0 0 0-.66-1.68 7 7 0 0 0-1.72-1.98L6.7 15.07c-.4-.35-.62-.87-.57-1.4l.8-9.4c.08-.86.8-1.52 1.67-1.52h4.65a7.05 7.05 0 0 1 7.02 5.74"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97 15.27c.4.01.74-.29.78-.69l.97-11.24a1.24 1.24 0 1 0-2.47-.1v11.28c0 .4.32.73.72.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDislike;
