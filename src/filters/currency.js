import Vue from 'vue';

Vue.filter('toCurrency', function (value) {
    // BOF: hack for demo due to backend passing full amount as a single integer (ie: 719 as opposed to 7.19)
    let newValue = value/100;
    // EOF: hack for demo due to backend passing full amount as a single integer (ie: 719 as opposed to 7.19)

    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    return formatter.format(newValue);
});