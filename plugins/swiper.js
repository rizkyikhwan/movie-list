import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Autoplay, Navigation } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Autoplay, Navigation])

Vue.use(VueAwesomeSwiper)
Vue.use(getAwesomeSwiper(SwiperClass))