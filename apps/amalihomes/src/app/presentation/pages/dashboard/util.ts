const initialUrl = window.location.pathname.toLowerCase();
const urlSegments = initialUrl.split('/').slice(1);

interface Props {
  /** Tab's index in url pathname segments[] */
  index: number;
  mustMatch?: string[];
}

export const getInitialTab = ({ index, mustMatch = [] }: Props): string => {
  if (urlSegments.length <= index || mustMatch.length > urlSegments.length) return '';
  for (let i = 0; i < mustMatch.length; i++) if (mustMatch[i] !== urlSegments[i]) return '';

  let tab = urlSegments[index];
  tab = `${tab.charAt(0).toUpperCase()}${tab.slice(1).toLowerCase()}`;
  return tab;
};
