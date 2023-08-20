<template>
  <div class="home">
    <CarouselView/>
    <CTA/>
    <router-view/>
  </div>
</template>

<script>
import CarouselView from '@/components/CarouselView.vue';
import CTA from '@/components/CTA.vue'

export default {
  name: 'HomeView',
  components: {
    CarouselView,
    CTA
  }
  
}
</script>
