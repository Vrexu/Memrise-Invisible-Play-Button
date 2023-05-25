// ==UserScript==
// @name         Memrise Invisible Play Button
// @namespace    https://github.com/vrexu
// @version      0.1
// @description  Script to hide the Play Button from Memrise Videos
// @author       Vrexu
// @match        https://app.memrise.com/*
// @icon         https://avatars.githubusercontent.com/u/1530602
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create an observer instance with a callback function
    let observer = new MutationObserver(callback);

    // Select the element to observe (the body element in this case)
    let element = document.body;

    // Options for the observer (which mutations to observe)
    let options = {
        childList: true,
        subtree: true
    };

    // Start observing the element for configured mutations
    observer.observe(element, options);

    // Define the callback function that will handle the changes
    function callback(mutationList, observer) {
        // Loop through each mutation record
        for (let mutation of mutationList) {
            // Check if the mutation is a childList type
            if (mutation.type === "childList") {
                // Select the playButton element and its child elements by their data-testid attribute
                let playButtonAndChildren = document.querySelectorAll('[data-testid="playButton"], [data-testid="playButton"] *');

                // Check if the elements exist
                if (playButtonAndChildren) {
                    // Loop through the elements
                    for (let element of playButtonAndChildren) {
                        // Change their opacity to 0
                        element.style.opacity = 0;
                    }
                }
            }
        }
    }

    // DON'T STOP OBSERVING !!!
    // observer.disconnect();
})();
