/* global ga */
import Ember from 'ember';
import environment from 'cadunico-web/config/environment';

/**
 * @see https://support.google.com/adwords/answer/1722054
 */
var conversionUrl = '//www.googleadservices.com/pagead/conversion/%@/?label=%@';
export function trackConversion (id, label) {
  var img = document.createElement('img');
  img.src = conversionUrl.fmt(id, label);
  img.style.position = 'absolute';
  img.style.left = '-9999em';

  document.body.appendChild(img);
}

export function trackPageview () {
  if (Ember.get(environment, 'ga.tracking.id')) {
    ga('send', 'pageview');
  }
}
