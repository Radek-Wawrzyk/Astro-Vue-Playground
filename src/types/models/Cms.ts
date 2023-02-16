import type { RichTextField, ImageField } from '@prismicio/types';

interface CmsSection {
  primary: any;
  items: any[];
  id: string;
  slice_type: string;
  slice_label: null | string;
}

interface CmsSectionCta extends CmsSection {
  primary: {
    image: ImageField;
    button_text: string;
    button_url: string;
    heading: RichTextField;
  };
}

export type { 
  CmsSectionCta, 
  CmsSection,
};
