<script>
  import Abouttext from "./abouttext.svelte";
  import YoutubeCard from "./youtube-card.svelte";
</script>


<div class="container">
  <div class="about-text">
    <Abouttext />
  </div>
  <div class="about-video">
    <YoutubeCard 
      imagePath='/images/posters/portada-la-vida-es-un-viaje.jpg' 
      imageAlt='Youtube Slide Opener - La vida es un viaje'
      youtubeId='m17_nb2weMU'
      />
  </div>
</div>

<style lang="scss">
  .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: top;
  padding: 2rem 2rem;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  @media (min-width: 2000px) {
    flex-direction: column;
    align-items: center;
  }
}
.about-text {
  flex: 1;
  text-align: justify;
  font-size: large;
  max-width: 1000px;
  margin-bottom: 3rem;
  @media (min-width: 992px) {
    margin: 0 1rem 0 0;
  }
}

.about-video {
  flex: 1;
  cursor: pointer;
  @media (min-width: 992px) {
    max-width: 50%;
    margin: 0 0 0 1rem;
  }
  @media (min-width: 2000px) {
    width: 1000px;
    margin: 2rem 0 0 0;
  }
}
</style>