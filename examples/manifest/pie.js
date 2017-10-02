module.exports =
{
  id: 'sucrose-pie',
  type: 'pie',
  title: 'Pie Chart',
  optionPresets: {
    file: 'pie_data'
  },
  optionDefaults: {
    show_labels: 'true',
    hole_label: 'false',
    donut: 'true',
    donut_ratio: '0.4'
  },
  ui: {
    '[name=show_labels]': {
      setChartOption: function (v, self) {
        var value = sucrose.utility.toBoolean(v);
        self.Chart.showLabels(value);
      },
      check: /false|true/i,
      events: 'change.my',
      title: 'Show Values',
      type: 'select'
    },
    '[name=donut]': {
      setChartOption: function (v, self) {
        var value = sucrose.utility.toBoolean(v);
        self.Chart.donut(value);
      },
      check: /false|true/i,
      events: 'change.my',
      title: 'Use donut',
      type: 'radio'
    },
    '[name=hole_label]': {
      setChartOption: function (v, self) {
        var value = sucrose.utility.toBoolean(v) ? 10 : false;
        self.Chart.hole(value);
      },
      check: /false|true/i,
      events: 'change.my',
      title: 'Show hole label',
      type: 'radio'
    },
    '[name=donut_ratio]': {
      setChartOption: function (v, self) {
        var value = parseFloat(v);
        self.Chart.donutRatio(value);
      },
      check: /[0-9]+/i,
      events: 'change.my',
      title: 'Donut hole ratio',
      type: 'text'
    }
  }
};
