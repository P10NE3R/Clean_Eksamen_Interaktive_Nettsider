const book  = {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 100)
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedYear',
      title: 'Published Year',
      type: 'number'
    },
    {
      name: 'isbn',
      title: 'ISBN',
      type: 'string'
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'genre' }] }]
    }
  ]
}


export default book