const mask = 'mM/yY';

const formatChars = {
  m: '[01]',
  M: '[1-9]',
  y: '[2-9]',
  Y: '[0-9]',
};

const beforeMaskedValueChange = (
  newState: any,
  oldState: any,
  userInput: any,
) => {
  let { value } = newState;

  if (value.startsWith('1')) formatChars['M'] = '[0-2]';
  else formatChars['M'] = '[1-9]';

  return { value, selection: newState.selection };
};

export const DateFormatUtils = {
  mask,
  formatChars,
  beforeMaskedValueChange,
};
