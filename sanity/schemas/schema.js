// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import page from './documents/page';
import siteConfig from './documents/siteConfig';
import announcementBar from './documents/announcementBar';

// pagebuilder block documents
import admissionsCallout from './documents/admissionsCallout';
import carousel from './documents/carousel';
import flexCollar from './documents/flexCollar';
import introBlock from './documents/introBlock';
import linkMenu from './documents/linkMenu';
import preFooter from './documents/preFooter';
import textAndImageBlock from './documents/textAndImageBlock';

// objects
import footerConfig, {footerLink} from './objects/config/footerConfig';
import placeholder from './objects/placeholder';
import prose from './objects/prose';

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import staff from './staff'
import department from './department'
import event from './event'
import eventSeries from './eventSeries'
import eventCategory from './eventCategory'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    announcementBar,
    page,
    siteConfig,
    // Page Builder block Documents
    admissionsCallout,
    carousel,
    flexCollar,
    introBlock,
    linkMenu,
    preFooter,
    textAndImageBlock,
    // objects
    footerConfig,
    footerLink,
    placeholder,
    prose,
    // The following are document types which will appear
    // in the studio.
    post,
    staff,
    category,
    department,
    event,
    eventSeries,
    eventCategory,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent, // @Adam should this be prose?
  ]),
});
