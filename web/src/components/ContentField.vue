<template>
    <div class="contatiner content-field">
        <div class="card">
            <div class="card-body">
                <!-- 填充的内容都会到这个标签里 -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
div.content-field{
    margin-top: 20px;
}
</style>