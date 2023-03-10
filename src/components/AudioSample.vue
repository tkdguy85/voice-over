<template>
  <div class="audio-box">
    <h2>Demos:</h2>
    <div class="audio-link">
      <audio controls :src="sample[0]"></audio>
      <button @click="playMp3(0)">Sample 1</button>
    </div>
    <div class="audio-link">
      <audio controls :src="sample[1]"></audio>
      <button @click="playMp3(1)">Sample 2</button>
    </div>
    <div class="audio-link">
      <audio controls :src="sample[2]"></audio>
      <button @click="playMp3(2)">Sample 3</button>
    </div>
  </div>
</template>