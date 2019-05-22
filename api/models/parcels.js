
module.exports = {
  attributes: {
    id: { type: 'number', required: true },
    crsid: { type: 'string', required: false },
    name: { type: 'string', required: false },
    email: { type: 'string' },
    type_post: { type: 'string', required: false },
    quantity: { type: 'number', required: false },
    location: { type: 'string', required: false },
    notes: { type: 'string' },
    date: { type: 'string', required: false },
    reminder: { type: 'boolean', required: false },
    collected: { type: 'boolean', required: false },
    date_col: { type: 'string' },
    overdue: { type: 'boolean', required: false },
    returned: { type: 'boolean' },

  },
};
