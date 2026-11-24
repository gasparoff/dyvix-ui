import { DyvixCommandMenu } from 'dyvix-ui';
import Wrapper from '../Wrapper';
import React from 'react';
import { DYVIX_GLOBAL_THEME, DYVIX_GLOBAL_ANIMATION } from 'dyvix-ui';

const COMMAND_MENU_THEME = {
  SINGULARITY: DYVIX_GLOBAL_THEME.SINGULARITY,
  INDUSTRIAL: DYVIX_GLOBAL_THEME.INDUSTRIAL,
  EMBER: DYVIX_GLOBAL_THEME.EMBER,
  FROST: DYVIX_GLOBAL_THEME.FROST,
  BLADE: DYVIX_GLOBAL_THEME.BLADE
};

export default function CommandMenuPlayground() {
  const [config, setConfig] = React.useState([
    {
      utility: 'theme',
      type: 'select',
      options: COMMAND_MENU_THEME,
      current: COMMAND_MENU_THEME.SINGULARITY,
      format: 'string',
      allowNull: true
    },
    {
      utility: 'animation',
      type: 'select',
      options: DYVIX_GLOBAL_ANIMATION,
      current: DYVIX_GLOBAL_ANIMATION.FADE,
      format: 'string',
      allowNull: true
    },
    {
      utility: 'background',
      type: 'color',
      current: undefined,
      format: 'string'
    },
    {
      utility: 'color',
      type: 'color',
      current: undefined,
      format: 'string'
    },
    {
      utility: 'headerText',
      type: 'text',
      current: 'Console',
      format: 'string'
    },
    {
      utility: 'triggerKey',
      type: 'text',
      current: '`',
      format: 'string'
    }
  ]);

  const theme = config.find((e) => e['utility'] === 'theme').current;
  const animation = config.find((e) => e['utility'] === 'animation').current;
  const background = config.find((e) => e['utility'] === 'background').current;
  const color = config.find((e) => e['utility'] === 'color').current;
  const headerText = config.find((e) => e['utility'] === 'headerText').current;
  const triggerKey = config.find((e) => e['utility'] === 'triggerKey').current;
  const probs = {
    ...(theme && { theme: theme }),
    ...(animation && { animation: animation }),
    ...(background && { background: background }),
    ...(color && { color: color }),
    ...(headerText && { headerText: headerText }),
    ...(triggerKey && { triggerKey: triggerKey })
  };
  return (
    <Wrapper
      componentConfig={config}
      componentCallback={setConfig}
      tag={'DyvixCommandMenu'}
      imports={"import { DyvixCommandMenu } from 'dyvix-ui';"}
    >
      <DyvixCommandMenu
        draggable={false}
        overrides={{
          '--dyvix-command-menu-position': 'relative',
          '--dyvix-command-menu-top': '0',
          '--dyvix-command-menu-z-index': '1',
          '--dyvix-command-menu-width': '100%',
          '--dyvix-command-menu-height': '320px'
        }}
        {...probs}
      />
    </Wrapper>
  );
}
