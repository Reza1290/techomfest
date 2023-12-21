import Vue from 'vue'

Vue.withDirectives('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
      // Focus the element
      el.focus()
    }
  })