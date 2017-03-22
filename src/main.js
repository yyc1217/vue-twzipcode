import Vue from 'vue'
import Zipcode from './components/zipcodes.vue'
import County from './components/counties.vue'
import ZipcodeGroupby from './components/zipcodes.groupby.vue'
import './assets/demo.scss'

// https://laracasts.com/discuss/channels/vue/use-a-global-event-bus
const bus = new Vue({})

bus.$on('twzipcode__zipcode--7:change', function(event) {
  document.getElementById('demoCallback').textContent = event.value
})

new Vue({
  el: '#app',
  components: {
    TwzipcodeZipcode: Zipcode,
    TwzipcodeZipcodeGroupby: ZipcodeGroupby,
    TwzipcodeCounty: County
  },
  data () {
    return {
      bus
    }
  }
})
