const brandColor = 'red';
const backgroundColor = 'grey';

export default {
  mounted() {
    this.$el.style.setProperty("--brand-color", brandColor);
    this.$el.style.setProperty("--background-color", backgroundColor);
  },
}