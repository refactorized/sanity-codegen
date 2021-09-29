import S from '@sanity/desk-tool/structure-builder'
import {IoDocumentsOutline,IoLibraryOutline,IoNewspaperOutline,IoPersonCircleOutline,IoSettingsOutline,IoCalendarOutline,IoPeopleCircleSharp,IoPricetagsOutline,IoFilterCircleOutline} from 'react-icons/io5'

export default () =>

    S.list()
        .title('Content Hub')
        .items([
            S.listItem()
                .title('Pages')
                .icon(IoDocumentsOutline)
                .child(S.documentTypeList('page').title('page')),
                S.listItem()
                .title('News')
                .icon(IoNewspaperOutline)
                .child(
                    S.list()
                        .title('News')
                        .items([
                            S.listItem()
                                .title('News Posts')
                                .icon(IoNewspaperOutline)
                                .child(S.documentTypeList('news').title('News Posts')),
                                S.listItem()
                                .title('Post Types')
                                .icon(IoFilterCircleOutline)
                                .child(S.documentTypeList('postType').title('Post Types')),
                        ])
                ),
            S.listItem()
                .title('Resources')
                .icon(IoLibraryOutline)
                .child(
                    S.list()
                        .title('Resources')
                        .items([
                            S.listItem()
                                .title('Resources')
                                .icon(IoLibraryOutline)
                                .child(S.documentTypeList('resource').title('Resources')),
                            S.listItem()
                                .title('Resource Types')
                                .icon(IoFilterCircleOutline)
                                .child(S.documentTypeList('resourceType').title('Resource Types')),
                        ])
                ),
            S.listItem()
                .title('Events & Courses')
                .icon(IoCalendarOutline)
                .child(
                    S.list()
                        .title('Events & Courses')
                        .items([
                            S.listItem()
                                .title('Events')
                                .icon(IoCalendarOutline)
                                .child(S.documentTypeList('event').title('Events')),
                            S.listItem()
                                .title('Event Categories')
                                .icon(IoFilterCircleOutline)
                                .child(S.documentTypeList('eventCategory').title('Event Categories')),
                            S.listItem()
                                .title('Event Series')
                                .icon(IoFilterCircleOutline)
                                .child(S.documentTypeList('eventSeries').title('Event Series')),
                        ])
                ),
            S.listItem()
                .title('Organization Info')
                .icon(IoPersonCircleOutline)
                .child(
                    S.list()
                        .title('Organization Settings')
                        .items([
                            S.listItem()
                                .title('Staff')
                                .icon(IoPersonCircleOutline)
                                .child(S.documentTypeList('staff').title('Staff')),
                            S.listItem()
                                .title('Department')
                                .icon(IoFilterCircleOutline)
                                .child(S.documentTypeList('department').title('Departments')),
                            S.listItem()
                                .title('Teams')
                                .icon(IoFilterCircleOutline)
                                .child(S.documentTypeList('departmentTeams').title('Teams')),
                            S.listItem()
                                .title('External Contributors')
                                .icon(IoPeopleCircleSharp)
                                .child(S.documentTypeList('externalContributor').title('External Contributors')),
                        ])
                ),
            S.divider(),
            S.listItem()
                .title('Taxonomy')
                .icon(IoPricetagsOutline)
                .child(S.documentTypeList('category').title('Taxonomy')),
            S.divider(),
            S.listItem()
                .title('Site Settings')
                .icon(IoSettingsOutline)
                .child(
                    S.documentList()
                        .schemaType('siteConfig')
                        .documentId('ID_SITE_CONFIG')
                ),
                ...S.documentTypeListItems().filter(listItem => !['page','news','postType','resource','resourceType','category','siteConfig','staff','department','departmentTeam','externalContributor','event','eventCategory','eventSeries'].includes(listItem.getId())),
        ])