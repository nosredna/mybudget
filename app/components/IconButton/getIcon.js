import * as faSolid from 'styled-icons/fa-solid';

export default function getIcon(icon) {
  const validName = icon.replace(/^\w/, c => c.toUpperCase());
  return faSolid[validName];
}
