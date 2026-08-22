import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLike = forwardRef<SVGSVGElement, IconProps>(function IconLike(
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
            d="m20.98 12.19-.74-.13zm-.71 4.08-.74-.13zm-13.33 4.2-.75.07zm-.81-9.39.74-.06zm7.86-5.86.75.12zm-.66 4.05.74.12zm-6.63.4-.5-.56zm1.44-1.23.49.57zm2.38-3.66-.73-.18zm.47-1.83.73.19zm1.68-.89-.23.72zm.14.05.23-.71zM9.86 6.46l.66.36zm4.04-3.21-.72.19zm-2.23-1.12-.32-.67zm8.57 9.93-.7 4.08 1.47.25.7-4.08zm-7 9.19H8.6v1.5h4.64zm-5.56-.84-.8-9.39-1.5.13.81 9.4zm11.85-4.27a6.3 6.3 0 0 1-6.29 5.11v1.5a7.8 7.8 0 0 0 7.77-6.36zM13.25 5.1l-.66 4.05 1.48.24.67-4.05zM7.2 10.25 8.63 9l-.98-1.14L6.2 9.11zm4.05-5.28.48-1.83-1.45-.38L9.8 4.6zm1.2-2.2.14.06.46-1.43-.14-.05zm-1.92 4.05q.48-.88.72-1.85L9.8 4.6a7 7 0 0 1-.6 1.5zm2.06-4c.31.1.53.34.6.62l1.45-.38c-.2-.8-.81-1.41-1.59-1.66zm-.86.32A.5.5 0 0 1 12 2.8l-.65-1.35c-.53.25-.93.73-1.08 1.3zM12 2.8a.6.6 0 0 1 .44-.03l.46-1.43a2 2 0 0 0-1.55.1zm2.15 8.17h5.18v-1.5h-5.18zm.59-5.64q.17-1.15-.1-2.28l-1.46.38q.21.82.07 1.66zM8.6 21.25a.9.9 0 0 1-.92-.84l-1.49.13a2.4 2.4 0 0 0 2.4 2.21zm.03-12.24a8 8 0 0 0 1.9-2.2l-1.33-.7c-.35.65-.9 1.2-1.55 1.76zm13.08 3.3a2.42 2.42 0 0 0-2.38-2.83v1.5c.57 0 1 .52.9 1.08zM12.6 9.15c-.16.96.59 1.83 1.56 1.83v-1.5a.1.1 0 0 1-.08-.1zm-5.72 1.87q-.02-.47.32-.77l-1-1.15a2.4 2.4 0 0 0-.83 2.04z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.97 21.47-.75.07zM3 10.23l.75-.06a.75.75 0 0 0-1.5.06zm1.72 11.18-.97-11.24-1.5.13.97 11.24zm-.97.1V10.23h-1.5v11.28zm-.53.03a.26.26 0 0 1 .27-.29v1.5c.72 0 1.3-.62 1.23-1.34zm.27-.29c.14 0 .26.12.26.26h-1.5c0 .69.55 1.24 1.24 1.24z"
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
            d="m20.27 16.27.7-4.08a1.67 1.67 0 0 0-1.64-1.96h-5.18a.83.83 0 0 1-.82-.96L14 5.22q.16-1-.09-1.97a1.6 1.6 0 0 0-1.09-1.14l-.14-.05q-.52-.15-1 .07c-.34.17-.58.47-.68.82l-.47 1.83a8 8 0 0 1-.66 1.68 7 7 0 0 1-1.72 1.98L6.7 9.68c-.4.35-.62.87-.57 1.4l.8 9.4c.08.86.8 1.52 1.67 1.52h4.64a7.05 7.05 0 0 0 7.03-5.73"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97 9.49c.4-.02.74.28.78.68l.97 11.24a1.24 1.24 0 1 1-2.47.1V10.23c0-.4.32-.73.72-.74"
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
            d="m20.27 16.27.7-4.08a1.67 1.67 0 0 0-1.64-1.96h-5.18a.83.83 0 0 1-.82-.96L14 5.22q.16-1-.09-1.97a1.6 1.6 0 0 0-1.09-1.14l-.14-.05q-.52-.15-1 .07c-.34.17-.58.47-.68.82l-.47 1.83a8 8 0 0 1-.66 1.68 7 7 0 0 1-1.72 1.98L6.7 9.68c-.4.35-.62.87-.57 1.4l.8 9.4c.08.86.8 1.52 1.67 1.52h4.64a7.05 7.05 0 0 0 7.03-5.73"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97 9.49c.4-.02.74.28.78.68l.97 11.24a1.24 1.24 0 1 1-2.47.1V10.23c0-.4.32-.73.72-.74"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLike;
