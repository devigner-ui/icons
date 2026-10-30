import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShuffle = forwardRef<SVGSVGElement, IconProps>(function IconShuffle(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* One drawing in all four core styles. Its lines are filled shapes 1.5
     wide; Bold and Bulk outline them by 0.5 more, to the weight 2 the
     other unboxed Bold drawings use. They used to sit in a filled square. */
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
            d="M2 16.25a.75.75 0 0 0 0 1.5zm3.6 1.5a.75.75 0 0 0 0-1.5zm5.15-3.66-.65-.39zm2.5-4.18.65.39zM22 7l.53.53c.3-.3.3-.77 0-1.06zm-2.53 1.47a.75.75 0 0 0 1.06 1.06zm1.06-4a.75.75 0 1 0-1.06 1.06zm-5.31 2.92-.37-.65v0zm-6.5 8.34a.75.75 0 1 0 1.02 1.1zM2 17.75h3.6v-1.5H2zm9.4-3.28 2.5-4.17-1.3-.77-2.5 4.17zm7-6.72H22v-1.5h-3.6zm3.07-1.28-2 2 1.06 1.06 2-2zm1.06 0-2-2-1.06 1.06 2 2zM13.9 10.3c.43-.72.73-1.22 1-1.59.26-.36.47-.54.69-.67l-.74-1.3a4 4 0 0 0-1.15 1.08q-.47.66-1.1 1.7zm4.5-4.05q-1.22-.01-2.03.05a4 4 0 0 0-1.52.44l.74 1.3c.22-.12.49-.2.93-.24.45-.05 1.03-.05 1.88-.05zm-8.3 7.45a10 10 0 0 1-1.38 2.03l1.02 1.1c.56-.53 1.02-1.31 1.65-2.36z"
            fill="currentColor"
          />
          <path
            d="M2 6.25a.75.75 0 0 0 0 1.5zM22 17l.53.53c.3-.3.3-.77 0-1.06zm-1.47-2.53a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zm-3.34-1.53.14-.73h0zm-1.69-2.33a.75.75 0 1 0-1.28.78zm.03 1.4.56-.5v0zm-6.6-8.95.15-.74zm1.69 2.33a.75.75 0 0 0 1.28-.78zm-.03-1.4-.56.5h0zM2 7.75h4.67v-1.5H2zm15.33 10H22v-1.5h-4.67zm5.2-1.28-2-2-1.06 1.06 2 2zm-1.06 0-2 2 1.06 1.06 2-2zm-4.14-.22c-.64 0-.87 0-1.06-.04l-.29 1.47c.37.07.77.07 1.35.07zm-4.17-.86c.3.5.5.84.75 1.12l1.12-1a6 6 0 0 1-.59-.9zm3.1.82q-.72-.16-1.23-.7l-1.12 1c.55.6 1.27 1.02 2.07 1.17zm-9.6-8.46c.65 0 .88 0 1.07.04l.29-1.47c-.37-.07-.77-.07-1.35-.07zm4.18.86c-.3-.5-.5-.84-.75-1.12l-1.12 1c.14.15.25.34.59.9zm-3.1-.82q.72.16 1.23.7l1.12-1a3.8 3.8 0 0 0-2.07-1.17z"
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
            d="M2 16.25a.75.75 0 0 0 0 1.5zm8.75-2.16-.65-.39zm2.5-4.18.65.39zM22 7l.53.53c.3-.3.3-.77 0-1.06zm-2.53 1.47a.75.75 0 0 0 1.06 1.06zm1.06-4a.75.75 0 1 0-1.06 1.06zm-5.31 2.92-.37-.65zM2 17.75h3.6v-1.5H2zm9.4-3.28 2.5-4.17-1.3-.77-2.5 4.17zm7-6.72H22v-1.5h-3.6zm3.07-1.28-2 2 1.06 1.06 2-2zm1.06 0-2-2-1.06 1.06 2 2zM13.9 10.3c.43-.72.73-1.22 1-1.59.26-.36.47-.54.69-.67l-.74-1.3a4 4 0 0 0-1.15 1.08q-.47.66-1.1 1.7zm4.5-4.05q-1.22-.01-2.03.05a4 4 0 0 0-1.52.44l.74 1.3c.22-.12.49-.2.93-.24.45-.05 1.03-.05 1.88-.05zM5.6 17.75q1.22.01 2.03-.05a4 4 0 0 0 1.52-.44l-.74-1.3c-.22.12-.49.2-.93.24-.45.05-1.03.05-1.88.05zm4.5-4.05c-.43.72-.73 1.22-1 1.59-.26.36-.47.54-.69.67l.74 1.3a4 4 0 0 0 1.15-1.08q.47-.66 1.1-1.7z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={fill ? "0.5" : "0"}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 7.75a.75.75 0 0 1 0-1.5zm8.75 2.16-.65.39zm2.5 4.18.65-.39zM22 17l.53-.53c.3.3.3.77 0 1.06zm-2.53-1.47a.75.75 0 1 1 1.06-1.06zm1.06 4a.75.75 0 1 1-1.06-1.06zm-5.31-2.92-.37.65zM2 6.25h3.6v1.5H2zm9.4 3.28 2.5 4.17-1.3.77-2.5-4.17zm7 6.72H22v1.5h-3.6zm3.07 1.28-2-2 1.06-1.06 2 2zm1.06 0-2 2-1.06-1.06 2-2zM13.9 13.7c.43.72.73 1.22 1 1.59.26.36.47.54.69.67l-.74 1.3a4 4 0 0 1-1.15-1.08q-.47-.66-1.1-1.7zm4.5 4.05q-1.22.01-2.03-.05a4 4 0 0 1-1.52-.44l.74-1.3c.22.12.49.2.93.24.45.05 1.03.05 1.88.05zM5.6 6.25q1.22-.01 2.03.05a4 4 0 0 1 1.52.44l-.74 1.3a2 2 0 0 0-.93-.24c-.45-.05-1.03-.05-1.88-.05zm4.5 4.05c-.43-.72-.73-1.22-1-1.59a2 2 0 0 0-.69-.67l.74-1.3c.47.26.82.62 1.15 1.08q.47.66 1.1 1.7z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={fill ? "0.5" : "0"}
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
});

export default IconShuffle;
