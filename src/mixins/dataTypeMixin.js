export default {
  methods: {
    _isString: (value) => {
      return typeof value === 'string' || value instanceof String;
    },
    _isNumber: (value) => {
      return typeof value === 'number' && isFinite(value);
    }
  },
}