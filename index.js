var rangePlugin = {}

rangePlugin.install = function(Vue, options) {
  Vue.mixin({ 
    methods: { 
      range: function(start, end, step) {

        if(start !== 0 && !start) return [];

        if(!end) [start, end] = [0, start]

        step = step || 1;

        if(typeof start !== 'number') {
          console.warn(`Vue-for-range: provided argument for start - ${start} - is not a number.`)
          return [];
        }
        if(typeof end !== 'number') {
          console.warn(`Vue-for-range: provided argument for end - ${end} - is not a number.`)
          return [];
        }
        if(typeof step !== 'number') {
          console.warn(`Vue-for-range: provided argument for step - ${step} - is not a number.`)
          return [];
        }

        step = step > 0 ? step : 1;

        // swap values, if they are not in order
        if(start > end) [start, end] = [end, start];

        var arr = [];

        while (start < end) {
          arr.push(start);
          start+=step;
        }

        return arr
      }
    }  
  })
}

module.exports = rangePlugin