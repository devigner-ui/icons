/* Exercise the published subpath declaration during `pnpm typecheck`. */
import { IconAdd } from '@devigner-ui/icons/Add';
import type { IconComponentType, IconProps } from '@devigner-ui/icons';

const component: IconComponentType = IconAdd;
const props: IconProps = { variant: 'Outline' };

void component;
void props;
