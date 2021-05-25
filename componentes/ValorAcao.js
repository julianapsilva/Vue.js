export default {
  data() {
    return {
      valorMercado: 0,
    };
  },
  methods: {
    getValor() {
      fetch("https://api.origamid.dev/stock/aapl/quote")
        .then((r) => r.json())
        .then((r) => (this.valorMercado = r.marketCap));
    },
  },
  template: `<p>O valor de mercado da Apple hoje é de {{valorMercado}}</p>`,

  created() {
    this.getValor();
  },
};
