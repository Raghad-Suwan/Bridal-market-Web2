

mobiscroll.setOptions({
  locale: mobiscroll.localeEn,         // Specify language like: locale: mobiscroll.localePl or omit setting to use default
  theme: 'ios',                       // Specify theme like: theme: 'ios' or omit setting to use default
  themeVariant: 'light'              // More info about themeVariant: https://mobiscroll.com/docs/javascript/datepicker/api#opt-themeVariant
});

mobiscroll.datepicker('#demo-calendar', {
  controls: ['calendar', 'time'],       // More info about controls: https://mobiscroll.com/docs/javascript/datepicker/api#opt-controls
  select: 'range',                     // More info about select: https://mobiscroll.com/docs/javascript/datepicker/api#methods-select
  display: 'inline',                  // Specify display mode like: display: 'bottom' or omit setting to use default

});

mobiscroll.datepicker('#demo-calendar-timegrid', {
  controls: ['calendar', 'timegrid'],  // More info about controls: https://mobiscroll.com/docs/javascript/datepicker/api#opt-controls
  select: 'range',                    // More info about select: https://mobiscroll.com/docs/javascript/datepicker/api#methods-select
  display: 'inline',                 // Specify display mode like: display: 'bottom' or omit setting to use default
});

mobiscroll.datepicker('#demo-date', {
  controls: ['datetime'],              // More info about controls: https://mobiscroll.com/docs/javascript/datepicker/api#opt-controls
  select: 'range',                    // More info about select: https://mobiscroll.com/docs/javascript/datepicker/api#methods-select
  display: 'inline',                 // Specify display mode like: display: 'bottom' or omit setting to use default
});

mobiscroll.datepicker('#demo-one-input', {
  controls: ['datetime'],              // More info about controls: https://mobiscroll.com/docs/javascript/datepicker/api#opt-controls
  select: 'range',                    // More info about select: https://mobiscroll.com/docs/javascript/datepicker/api#methods-select

});

mobiscroll.datepicker('#demo-start-end', {
  controls: ['datetime'],              // More info about controls: https://mobiscroll.com/docs/javascript/datepicker/api#opt-controls
  select: 'range',                    // More info about select: https://mobiscroll.com/docs/javascript/datepicker/api#methods-select
  startInput: '#demo-start',         // More info about startInput: https://mobiscroll.com/docs/javascript/datepicker/api#opt-startInput
  endInput: '#demo-end',            // More info about endInput: https://mobiscroll.com/docs/javascript/datepicker/api#opt-endInput
});