<template lang="html">
  <div id="app">
    <div class="container">
    	<div class="span8">
            <h1>Article name first</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum ex eget porttitor sollicitudin. Morbi cursus tempor placerat. Pellentesque suscipit tortor in orci pretium, ac facilisis ex pretium. Fusce hendrerit orci diam, vitae tristique quam porttitor eu. Donec ligula orci, ultricies in sagittis non, porta sed lorem. Aenean interdum posuere mattis. Curabitur dignissim dictum quam, vitae malesuada velit tristique a. </p>
            <div>
                <div class="more label"><a href="#">Read more</a></div>
                <div class="tags">
                    <span class="btn-info"><a href="#">energy</a></span><span class="btn-info"><a href="#">reality</a></span><span class="btn-info"><a href="#">world</a></span>
                </div>
            </div>
            <div class="clear"></div>
            <hr>
            <h1>Article name second</h1>
            <p>Sed interdum massa ac pretium faucibus. Integer semper euismod lorem faucibus molestie. Aenean luctus ut metus eget dignissim. Sed tincidunt augue non elementum pharetra. Suspendisse non feugiat urna. Etiam egestas neque euismod neque sollicitudin consectetur. Fusce facilisis augue a velit porta scelerisque. Sed mattis justo sapien. Sed ultrices lectus diam, id vestibulum ante finibus a. </p>
            <div>
                <div class="more label"><a href="#">Read more</a></div>
                <div class="tags">
                    <span class="btn-info"><a href="#"></a>energy</a></span><span class="btn-info"><a href="#">reality</a></span><span class="btn-info"><a href="#">world</a></span>
                </div>
            </div>
            <hr>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.clear {
    clear:both;
}
.btn-info {
    margin-right:15px;
    text-transform:uppercase;
    padding:10px;
    display:block;
    float:left;
}
.btn-info a {
    display:block;
    text-decoration:none;
    width:100%;
    height:100%;
    color:#fff;
}
.more.label {
    float:right;
}
</style>
