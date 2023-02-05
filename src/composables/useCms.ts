import * as prismicH from '@prismicio/helpers';
import type { RichTextField } from '@prismicio/types';

const useCms = () => {
  const renderAsText = (data: RichTextField) => {
    if (!data) return '';

    return prismicH.asText(data);
  };

  const renderAsHtml = (data: RichTextField) => {
    if (!data) return '';

    return prismicH.asHTML(data);
  };


  return {
    renderAsHtml,
    renderAsText,
  };
};

export {
  useCms,
};
