export const lengthAwareMixin = { // object name has to be same on component import

	  computed: {
            testFunction() {
                return this.secondText + " (" + this.secondText.length + ")";
            }
        }

};


// all components have to have secondText stored in data object