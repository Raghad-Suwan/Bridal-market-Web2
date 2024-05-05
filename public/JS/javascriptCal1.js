
mobiscroll.setOptions({
    locale: mobiscroll.localeEn,             // Specify language like: locale: mobiscroll.localePl or omit setting to use default
    theme: 'ios',                            // Specify theme like: theme: 'ios' or omit setting to use default
      themeVariant: 'light'                  // More info about themeVariant: https://mobiscroll.com/docs/javascript/datepicker/api#opt-themeVariant
  });
  
  var min = '2024-05-01T00:00';
  var max = '2024-11-01T00:00';
  

  
  mobiscroll.datepicker('#demo-booking-datetime', {
    display: 'inline',                       // Specify display mode like: display: 'bottom' or omit setting to use default
    controls: ['calendar', 'timegrid'],      // More info about controls: https://mobiscroll.com/docs/javascript/datepicker/api#opt-controls
    min: min,                                // More info about min: https://mobiscroll.com/docs/javascript/datepicker/api#opt-min
    max: max,                                // More info about max: https://mobiscroll.com/docs/javascript/datepicker/api#opt-max
    minTime: '08:00',
    maxTime: '19:59',
    stepMinute: 60,
    width: null,                             // More info about width: https://mobiscroll.com/docs/javascript/datepicker/api#opt-width
    onPageLoading: function (event, inst) {  // More info about onPageLoading: https://mobiscroll.com/docs/javascript/datepicker/api#event-onPageLoading
      getDatetimes(event.firstDay, function callback(bookings) {
        inst.setOptions({
          labels: bookings.labels,           // More info about labels: https://mobiscroll.com/docs/javascript/datepicker/api#opt-labels
          invalid: bookings.invalid,         // More info about invalid: https://mobiscroll.com/docs/javascript/datepicker/api#opt-invalid
        });
      });
    },
  });
  
  
  function getPrices(d, callback) {
    var invalid = [];
    var labels = [];
  
    mobiscroll.getJson(
      'https://trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
      function (bookings) {
        for (var i = 0; i < bookings.length; ++i) {
          var booking = bookings[i];
          var d = new Date(booking.d);
  
          if (booking.price = 0) {
            labels.push({
              start: d,
              title: '$' + booking.price,
              textColor: '#e1528f',
            });
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      'jsonp',
    );
  }
  
  function getDatetimes(day, callback) {
    var invalid = [];
    var labels = [];
  
    mobiscroll.getJson(
      'https://trial.mobiscroll.com/getbookingtime/?year=' + day.getFullYear() + '&month=' + day.getMonth(),
      function (bookings) {
        for (var i = 0; i < bookings.length; ++i) {
          var booking = bookings[i];
          var bDate = new Date(booking.d);
  
          if (booking.nr > 0) {
            labels.push({
              start: bDate,
              title: booking.nr + 'available',
              textColor: '#AC5857',
            });
            invalid = invalid.concat(booking.invalid);
          } else {
            invalid.push(bDate);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      'jsonp',
    );
  }
  
  function getBookings(d, callback) {
    var invalid = [];
    var labels = [];
  
    mobiscroll.getJson(
      'https://trial.mobiscroll.com/getbookings/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
      function (bookings) {
        for (var i = 0; i < bookings.length; ++i) {
          var booking = bookings[i];
          var d = new Date(booking.d);
  
          if (booking.nr > 0) {
            labels.push({
              start: d,
              title: booking.nr + ' SPOTS',
              textColor: '#e1528f',
            });
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      'jsonp',
    );
  }