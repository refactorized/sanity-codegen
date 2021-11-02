// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import blockContent from './documents/blockContent';
import category from './documents/category';
import department from './documents/department';
import departmentTeam from './documents/departmentTeam';
import event from './documents/event';
import eventCategory from './documents/eventCategory';
import eventSeries from './documents/eventSeries';
import externalContributor from './documents/externalContributor';
import page from './documents/page';
import news from './documents/news';
import postType from './documents/postType';
import resource from './documents/resource';
import resourcePage from './documents/resourcePage';
import resourceType from './documents/resourceType';
import siteConfig from './documents/siteConfig';
import staff from './documents/staff';
import teamPage from './documents/teamPage';

// page-builder sections (also called blocks)
import admissionsCallout from './sections/admissionsCallout';
import announcementBar from './sections/announcementBar';
import carousel from './sections/carousel';
import outcomesCarousel, {
  testimonialCard,
  statCard,
} from './sections/outcomesCarousel';
import articleCarousel from './sections/articleCarousel';
import imageCarousel, {imageSlide} from './sections/imageCarousel';
import flexCollar, {flexCollarCard} from './sections/flexCollar';
import introBlock from './sections/introBlock';
import linkMenu, {linkMenuLink} from './sections/linkMenu';
import preFooter from './sections/preFooter';
import textAndImageBlock from './sections/textAndImageBlock';
import heroBlock, {heroCard} from './sections/hero';
import calloutBand from './sections/calloutBand';
import bioCallout, {bioCalloutCards} from './sections/bioCallout';
import drawerCombo, {drawerComboDrawer} from './sections/drawerCombo';
import comboCard, {comboCardCards} from './sections/comboCard';
import interiorHero from './sections/interiorHero';
import textTestimonialCard from './sections/textTestimonialCard';

// objects
import basicText from './objects/basicText';
import footerConfig, {footerLink} from './objects/config/footerConfig';
import link from './objects/link';
import pageInfo from './objects/pageInfo';
import pageLink from './objects/pageLink';
import placeholder from './objects/placeholder';
import prose, {ptImage} from './sections/prose';
import navConfig, {navItem, navList} from './objects/config/navConfig';

// Singletons, and co-located objects

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    announcementBar,
    blockContent,
    category,
    department,
    departmentTeam,
    event,
    eventCategory,
    eventSeries,
    externalContributor,
    news,
    page,
    postType,
    resource,
    resourcePage,
    resourceType,
    siteConfig,
    staff,

    // Page Builder block Documents, and co-located objects
    teamPage,
    admissionsCallout,
    calloutBand,
    bioCallout,
    bioCalloutCards,
    carousel,
    imageCarousel,
    articleCarousel,
    imageSlide,
    drawerCombo,
    drawerComboDrawer,
    flexCollar,
    flexCollarCard,
    heroBlock,
    heroCard,
    introBlock,
    linkMenu,
    linkMenuLink,
    outcomesCarousel,
    pageInfo,
    pageLink,
    preFooter,
    prose,
    textAndImageBlock,
    comboCard,
    comboCardCards,

    // objects
    basicText,
    footerConfig,
    footerLink,
    interiorHero,
    link,
    placeholder,
    ptImage,
    statCard,
    testimonialCard,
    textTestimonialCard,

    // singletons and co-located objects
    navConfig,
    navItem,
    navList,
  ]),
});
