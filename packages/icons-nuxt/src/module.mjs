import { addComponent, defineNuxtModule } from "@nuxt/kit";
import { names } from "./names.mjs";

/*
 * Every icon in @devigner-ui/icons-vue, auto-imported: <IconBagStraps /> in
 * any template, no import line. Nuxt registers a name, not a module, so a
 * build still carries only the icons its templates use.
 *
 * One addComponent per icon rather than a components directory: the Vue
 * package's files are named BagStraps.js, and a scanned directory would
 * register them as <BagStraps>, colliding with an app's own components.
 */
export default defineNuxtModule({
  meta: { name: "@devigner-ui/icons-nuxt", configKey: "devignerIcons" },
  defaults: { prefix: "Icon" },
  setup(options) {
    for (const name of names) {
      addComponent({
        name: `${options.prefix}${name}`,
        export: `Icon${name}`,
        filePath: "@devigner-ui/icons-vue",
      });
    }
  },
});
