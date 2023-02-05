import type { RichTextField, ImageField } from '@prismicio/types';


interface CmsSection {
  __typename: string;
  primary: any;
}

interface CmsSectionCta {
  __typename: string;
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
