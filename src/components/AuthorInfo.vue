<template>
  <div class="author-info-wrapper">
    <h2>whatzih.io</h2>
    <div class="author-info-content" style="display: flex">
      <img
        src="../assets/pp.jpg"
        width="55"
        height="55"
        style="border-radius: 50%; margin-right: 5px"
      />
      <p>
        Personal blog by Nezih Tartilaci <br />
        Front-End Developer
      </p>
    </div>
  </div>
</template>

<style scoped>
.author-info-wrapper {
  max-width: 600px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.author-info-wrapper h2 {
  color: #8130d0;
}

.author-info-content {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
</style>
