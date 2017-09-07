<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() { // returns data object
        	return {

        	}
        }
    }
</script>


<style>

.panel-body {
    font-family:'Arizonia', cursive;
    font-size:24px;
    color:#636363;
    }
    .quote {
        cursor:pointer;
    }
    .quote:hover {
        background-color:red;
    }
</style>


<!--

    quote content will come from outside inside the slot the thing passing in the quote content will decide on the style. This component is only the place where it will be rendered.

    This is a single quote component

 -->