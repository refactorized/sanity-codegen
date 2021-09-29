import S from '@sanity/desk-tool/structure-builder'
import {IoDocumentsOutline,IoLibraryOutline,IoNewspaperOutline,IoPersonCircleOutline,IoSettingsOutline,IoCalendarOutline,IoPeopleCircleSharp,IoPricetagsOutline,IoFilterCircleOutline} from 'react-icons/io5'

export default () =>

    S.list()
        .title('Content Hub')
        .items([
            S.listItem()
                .title('Pages')
                .icon(IoDocumentsOutline)
                .child(
                    S.document()
                        .schemaType('page')
                        .documentId('page')
                ),
            S.listItem()
                .title('News')
                .child(
                    S.list()
                        .title('News')
                        .items([
                            S.listItem()
                                .title('News Posts')
                                .icon(IoNewspaperOutline)
                                .child(
                                    S.document()
                                        .schemaType('news')
                                        .documentId('news')
                                ),
                                S.listItem()
                                .title('Post Types')
                                .icon(IoFilterCircleOutline)
                                .child(
                                    S.document()
                                        .schemaType('postType')
                                        .documentId('postType')
                                ),
                        ])
                ),
            S.listItem()
                .title('Resources')
                .child(
                    S.list()
                        .title('Resources')
                        .items([
                            S.listItem()
                                .title('Resources')
                                .icon(IoLibraryOutline)
                                .child(
                                    S.document()
                                        .schemaType('resource')
                                        .documentId('resource')
                                ),
                            S.listItem()
                                .title('Resource Types')
                                .icon(IoFilterCircleOutline)
                                .child(
                                    S.document()
                                        .schemaType('resourceType')
                                        .documentId('resourceType')
                                ),
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
                                .child(
                                    S.document()
                                        .schemaType('event')
                                        .documentId('event')
                                ),
                            S.listItem()
                                .title('Event Categories')
                                .icon(IoFilterCircleOutline)
                                .child(
                                    S.document()
                                        .schemaType('eventCategory')
                                        .documentId('eventCategory')
                                ),
                            S.listItem()
                                .title('Event Series')
                                .icon(IoFilterCircleOutline)
                                .child(
                                    S.document()
                                        .schemaType('eventSeries')
                                        .documentId('eventSeries')
                                ),
                        ])
                ),
            S.listItem()
                .title('Organization Info')
                .child(
                    S.list()
                        .title('Organization Settings')
                        .items([
                            S.listItem()
                                .title('Staff')
                                .icon(IoPersonCircleOutline)
                                .child(
                                    S.document()
                                        .schemaType('staff')
                                        .documentId('staff')
                                ),
                            S.listItem()
                                .title('Department')
                                .icon(IoFilterCircleOutline)
                                .child(
                                    S.document()
                                        .schemaType('department')
                                        .documentId('department')
                                ),
                            S.listItem()
                                .title('Teams')
                                .icon(IoFilterCircleOutline)
                                .child(
                                    S.document()
                                        .schemaType('departmentTeam')
                                        .documentId('departmentTeam')
                                ),
                            S.listItem()
                                .title('External Contributors')
                                .icon(IoPeopleCircleSharp)
                                .child(
                                    S.document()
                                        .schemaType('externalContributor')
                                        .documentId('externalContributor')
                                ),
                        ])
                ),
            S.divider(),
            S.listItem()
                .title('Taxonomy')
                .icon(IoPricetagsOutline)
                .child(
                    S.document()
                        .schemaType('category')
                        .documentId('category')
                ),
            S.divider(),
            S.listItem()
                .title('Site Settings')
                .icon(IoSettingsOutline)
                .child(
                    S.document()
                        .schemaType('siteConfig')
                        .documentId('ID_SITE_CONFIG')
                ),
                ...S.documentTypeListItems().filter(listItem => !['page','news','postType','resource','resourceType','category','siteConfig','staff','department','departmentTeam','externalContributor','event','eventCategory','eventSeries'].includes(listItem.getId())),
        ])