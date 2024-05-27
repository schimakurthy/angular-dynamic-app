export const SECTION_DATA = {
  sectionId: 'A',
  fields: [],
  locked: false,
  sectionName: 'Section A',
  subsections: [
    {
      sectionId: 'A1',
      sectionName: 'SubSection 1',
      subsections: [],
      fields: [
        {
          name: 'unit',
          label: 'Unit type',
          type: 'selection',
          config: {
            options: [
              {
                label: 'Gram (GM)',
                value: 'GM'
              },
              {
                label: 'Milliliter (ML)',
                value: 'ML'
              },
              {
                label: 'Each (EA)',
                value: 'EA'
              }
            ]
          }
        }
      ]
    }
  ]
}