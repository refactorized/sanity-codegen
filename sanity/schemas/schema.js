// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import category from './documents/category';
import department from './documents/department';
import departmentTeam from './documents/departmentTeam';
import event from './documents/event';
import eventCategory from './documents/eventCategory';
import eventSeries from './documents/eventSeries';
import page from './documents/page';
import news from './documents/news';
import postType from './documents/postType';
import resource from './documents/resource';
import resourceType from './documents/resourceType';
import siteConfig from './documents/siteConfig';
import staff from './documents/staff';

// page-builder sections (also called blocks)
import admissionsCallout from './sections/admissionsCallout';
import announcementBar from './sections/announcementBar';
import carousel from './sections/carousel';
import outcomesCarousel, {testimonialCard, statCard} from './sections/outcomesCarousel';
import flexCollar, {flexCollarCard} from './sections/flexCollar';
import introBlock from './sections/introBlock';
import linkMenu from './sections/linkMenu';
import preFooter from './sections/preFooter';
import textAndImageBlock from './sections/textAndImageBlock';
import heroBlock, {heroCard} from './sections/hero';
import calloutBand from './sections/calloutBand';

// objects
import basicText from './objects/basicText';
import footerConfig, {footerLink} from './objects/config/footerConfig';
import link from './objects/link';
import pageInfo from './objects/pageInfo';
import pageLink from './objects/pageLink';
import placeholder from './objects/placeholder';
import prose from './objects/prose';

// We import object and document schemas
import blockContent from './documents/blockContent';
import externalContributor from './documents/externalContributor';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    announcementBar,
    externalContributor,
    blockContent,
    category,
    department,
    departmentTeam,
    event,
    eventCategory,
    eventSeries,
    page,
    news,
    postType,
    resource,
    resourceType,
    siteConfig,
    staff,
    // Page Builder block Documents, and co-located objects
    admissionsCallout,
    carousel,
    outcomesCarousel,
    flexCollar,
    flexCollarCard,
    introBlock,
    linkMenu,
    pageInfo,
    pageLink,
    preFooter,
    textAndImageBlock,
    heroBlock,
    heroCard,
    calloutBand,
    // objects
    basicText,
    footerConfig,
    footerLink,
    link,
    placeholder,
    prose,
    testimonialCard,
    statCard,
  ]),
});
