/** @fileoverview Поведение элемента отзыва */


'use strict';

/* jslint browser: true */
/* ESLint browser: true */


var getReviewsElement = require('./get-review-element');


/**
* @param {Object} data
* @param {HTMLElement} container
* @constructor
*/
var Review = function(data, container) {
  this.data = data;
  this.element = getReviewsElement(this.data, container);

  this.onQuizClick = function(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('review-quiz-answer')) {
      evt.target.classList.add('review-quiz-answer-active');
    }
  };

  this.remove = function() {
    this.element.parentNode.removeChild(this.element);
    this.element.removeEventListener('click', this.onQuizClick);
  };

  this.element.addEventListener('click', this.onQuizClick);
  container.appendChild(this.element);
};


module.exports = Review;
