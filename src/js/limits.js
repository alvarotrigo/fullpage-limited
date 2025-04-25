import * as utils from './common/utils.js';
import { getContainer, getOptions } from "./common/options.js";
import { getState, setState } from "./common/state.js";
import { EventEmitter } from './common/eventEmitter.js';

(function(){
    function bindEvents(){
        EventEmitter.on('onInitialise', init);
    }

    function init(){
        bindEvents();
        console.log("getState");
        console.log(getState());
        console.log(getOptions());
        console.log("isLimitSectionsValid(): " + isLimitSectionsValid() );
        console.log("isLimitSlidesValid(): " + isLimitSlidesValid() );
        console.log("areLimitsOk(): " + areLimitsOk() );

        setState({
            isLimitSectionsValid: isLimitSectionsValid(),
            isLimitSlidesValid: isLimitSlidesValid(),
            isLimitSectionsWithSlides: isLimitSectionsWithSlides(),
            areLimitsOk: areLimitsOk(),
        });
    }

    function areLimitsOk(){
        return isLimitSectionsValid() && isLimitSlidesValid() && isLimitSectionsWithSlides();
    }

    function isLimitSectionsValid(){
        var maxSections = 4;
        var sectionsItems = utils.$(getOptions().sectionSelector, getContainer());
        console.log(getOptions().sectionSelector);
        console.log(getContainer());
        console.log(sectionsItems);
        return sectionsItems.length <= maxSections;
    }

    function isLimitSectionsWithSlides(){
        var maxSectionsWithSlides = 1;
        var sectionsItems = utils.$(getOptions().sectionSelector, getContainer());
        var sectionsWithSlidesCount = 0;

        sectionsItems.forEach(function(sectionItem){
            if(utils.$(getOptions().slideSelector, sectionItem).length > 1){
                sectionsWithSlidesCount++;
            }
        });

        return sectionsWithSlidesCount <= maxSectionsWithSlides;
    }

    function isLimitSlidesValid(){
        var isValid = true;
        var maxSlides = 3;
        console.log(getContainer());
        var sectionsItems = utils.$(getOptions().sectionSelector, getContainer());
        sectionsItems.forEach(function(sectionItem){
            console.log(getOptions().slideSelector);
            console.log(sectionItem);
            console.log(utils.$(getOptions().slideSelector, sectionItem));
            if(utils.$(getOptions().slideSelector, sectionItem).length > maxSlides){
                isValid = false;
            }
        });

        return isValid
    }

    bindEvents();

})();
