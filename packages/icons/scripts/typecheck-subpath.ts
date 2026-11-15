/* Exercise the published subpath declaration during `pnpm typecheck`. */
import { IconAdd } from '@devigner-ui/icons/Add';
import type { IconComponentType, IconProps } from '@devigner-ui/icons';

import { IconAdd as BoldAdd } from '@devigner-ui/icons/bold';
import BrokenAdd from '@devigner-ui/icons/broken/Add';

const component: IconComponentType = IconAdd;
const styled: IconComponentType[] = [BoldAdd, BrokenAdd];
void styled;
const props: IconProps = { variant: 'Outline' };

void component;
void props;
