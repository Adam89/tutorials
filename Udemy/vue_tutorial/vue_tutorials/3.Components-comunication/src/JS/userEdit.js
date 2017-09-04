import { eventBus } from '../main'; // import from main js file have to add this in multiple places

export default {
	props:['propUserAge'],
    methods: {
        editAge() {
            this.propUserAge = 30; // have to pass this prop through the parent component
            // this.$emit('ageWasEditied', this.propUserAge); // pass a custom event emitter
            // eventBus.$emit('ageWasEditied', this.propUserAge); // this is a way of passing data between two childs without going via parent vue instance has the emit method. The event bus is emitted on the new vue instance and not this specific instance
            eventBus.changeAge(this.propUserAge); // this is used for when you define the
        }
    }
};