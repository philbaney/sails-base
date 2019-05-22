
module.exports = {
  attributes: {
    id: { type: 'int', required: true },
    crsid: { type: 'string', required: false },
    name: { type: 'string', required: false },
    email: { type: 'string' },
    type_post: { type: 'string', required: false },
    quantity: { type: 'int', required: false },
    location: { type: 'string', required: false },
    notes: { type: 'string' },
    date: { type: 'date', required: false },
    reminder: { type: 'bit', required: false },
    collected: { type: 'bit', required: false },
    date_col: { type: 'date' },
    overdue: { type: 'bit', required: false },
    returned: { type: 'bit' },

  },
};
