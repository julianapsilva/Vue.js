export default {
  name: "PrevisaoClima",
  data() {
    return {
      maxTemp: "",
    };
  },

  methods: {
    getTemperatura() {
      fetch("https://www.metaweather.com/api/location/455825")
        .then((r) => r.json())
        .then((r) => (this.maxTemp = r.consolidated_weather[0].max_temp));
    },
  },
  template: `<p> A temperatura máxima hoje é: {{maxTemp}} </p>`,
  created() {
    this.getTemperatura();
  },
};
