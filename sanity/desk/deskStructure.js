import S from '@sanity/desk-tool/structure-builder'

export default () =>

    S.list()
        .title('Content Hub')
        .items([
            S.listItem()
                .title('News')
                .child(
                    S.list()
                        .title('News')
                        .items([
                            S.listItem()
                                .title('News Posts')
                                .child(
                                    S.document()
                                        .schemaType('news')
                                        .documentId('news')
                                ),
                                S.listItem()
                                .title('Post Types')
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
                                .child(
                                    S.document()
                                        .schemaType('resource')
                                        .documentId('resource')
                                ),
                                S.listItem()
                                .title('Resource Types')
                                .child(
                                    S.document()
                                        .schemaType('resourceType')
                                        .documentId('resourceType')
                                ),
                        ])
                ),
            S.listItem()
                .title('Events & Courses')
                .child(
                    S.list()
                        .title('Events & Courses')
                        .items([
                            S.listItem()
                                .title('Events')
                                .child(
                                    S.document()
                                        .schemaType('event')
                                        .documentId('event')
                                ),
                                S.listItem()
                                .title('Event Categories')
                                .child(
                                    S.document()
                                        .schemaType('eventCategory')
                                        .documentId('eventCategory')
                                ),
                            S.listItem()
                                .title('Event Series')
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
                                .child(
                                    S.document()
                                        .schemaType('staff')
                                        .documentId('staff')
                                ),
                                S.listItem()
                                .title('Department')
                                .child(
                                    S.document()
                                        .schemaType('department')
                                        .documentId('department')
                                ),
                            S.listItem()
                                .title('Teams')
                                .child(
                                    S.document()
                                        .schemaType('departmentTeam')
                                        .documentId('departmentTeam')
                                ),
                            S.listItem()
                                .title('External Contributors')
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
                .child(
                    S.document()
                        .schemaType('category')
                        .documentId('category')
                ),
            S.divider(),
            S.listItem()
                .title('Site Settings')
                .child(
                    S.document()
                        .schemaType('siteConfig')
                        .documentId('ID_SITE_CONFIG')
                ),
                ...S.documentTypeListItems().filter(listItem => !['news','postType','resource','resourceType','category','siteConfig','staff','department','team','externalContributor','event','eventCategory','eventSeries'].includes(listItem.getId())),
        ])