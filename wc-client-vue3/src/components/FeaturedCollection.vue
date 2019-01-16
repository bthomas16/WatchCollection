
<template>
    <b-container fluid>
        <b-row no-gutters>
            <p class="bg-lightgray p-1 p-lg-2 white h2 m-h1 nowrap w-100"><strong>Featured Collection</strong></p>
            <b-col cols="12" class="mt-lg-1">
                <b-row no-gutters>
                    <b-col cols="6" md="4" v-for="watch in FeaturedWatches" :key="watch.id" class="pointer px-1 watchCard"  @click="selectWatch(watch)">
                        <b-row align-v="start" align-h="end" class="mb-3 bg-white" no-gutters>
                            <b-col cols="12" class="p-1 p-lg-3 bg-white watchImgWrapper center">
                                <b-img
                                @click="selectWatch(watch)"
                                :src="ROOT_API + watch.src.images[0].src"
                                class="watchImg">
                                </b-img>
                            </b-col>
                            <b-col cols="12" class="mx-auto p-1 bg-white-opaque">
                                <p class="my-0 h4 m-h2"><strong>{{watch.brand}}</strong> </p>
                                <p class="watchName my-0">{{watch.name}}</p>
                            </b-col>
                            <b-col cols="12 center bg-white-opaque my-0 pt-1 watchLogoWrapper">
                                <b-img id="brandLogo" :src="ROOT_API + watch.logoSrc_lg" class="watchLogo mx-auto p-1 p-md-2 p-lg-3"></b-img>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-modal :title="selectedWatch.name" ref="seeFeaturedWatchModal">
            <app-see-more :selectedWatch="selectedWatch"></app-see-more>
            <div slot="modal-footer" class="w-100">
                <b-btn v-if="selectedWatch.isFeaturedWatch" variant="info" target="_blank" :href="selectedWatch.siteLink">
                    Learn More
                </b-btn>
                <b-btn size="" class="float-right" variant="primary" @click="closeFeaturedWatchModel">
                    OK
                </b-btn>
            </div>
        </b-modal>

    </b-container>
</template>

<script>
import SeeMore from './Profile/Collection/Modals/SeeMoreModal.vue'
export default {
  name: 'featuredCollection',
  components: {
    appSeeMore: SeeMore
  },

  data () {
    return {
      selectedWatch: {},
      ROOT_API: process.env.VUE_APP_ROOT_API,
      TITLE: process.env.VUE_APP_TITLE,
      FeaturedWatches: [
        {
          id: 1,
          src: { images: [{ src: '/api/static-assets/oc-featured.jpg', order: 1 } ] },
          brand: 'Ocean Crawler',
          siteLink: 'https://www.oceancrawler.com/',
          name: 'Champion Diver',
          movementType: 'Automatic',
          movement: 'OC729 (Modified Seiko 4R36b)',
          sizeWidth: '44mm',
          sizeHeight: '15mm',
          sizeLugToLug: '22mm',
          accuracy: '+/- 5',
          crystal: 'Sapphire',
          watchStyle: 'Diver',
          waterResistance: '300m',
          Features: ["Shock resistance to 6000 G", "Rotating Bezel with 120 Clicks and Swiss SuperLuminova Marker", "Guaranteed to keep precise time for at least 5 years"],
          logoSrc_lg: '/api/static-assets/oc-logo_lg.png',
          isFeaturedWatch: true
        },
        {
          id: 2,
          src: { images: [{ src: '/api/static-assets/aragon-featured.jpg', order: 2 } ] },
          brand: 'Aragon',
          siteLink: 'https://www.aragonwatch.com/',
          name: 'Aragon Virtuoso',
          movementType: 'Automatic',
          movement: 'Valjoux 7750 Chronograph',
          sizeWidth: '48mm',
          sizeHeight: '18mm',
          sizeLugToLug: '24mm',
          crystal: 'Sapphire',
          watchStyle: 'Chronograph',
          waterResistance: '1000m',
          Features: ["Push Button Dual Deployant Clasp", "Titanium case", "Helium Valve", "Limited Edition to 100 Units"],
          logoSrc_lg: '/api/static-assets/aragon_lg.jpg',
          isFeaturedWatch: true
        },
        {
          id: 3,
          src: { images: [{ src: '/api/static-assets/ch-ward-featured.jpg', order: 3 } ] },
          brand: 'Christopher Ward',
          siteLink: 'https://www.christopherward.com/',
          name: 'C60 Trident Pro',
          movementType: 'Automatic',
          movement: 'Sellita SW200-1',
          sizeWidth: '43mm',
          sizeHeight: '13mm',
          sizeLugToLug: '22mm',
          crystal: 'Sapphire',
          watchStyle: 'Diver',
          waterResistance: '600m',
          accuracy: '+/- 20',
          Features: ["316L Stainless steel", "SuperLuminova SLN-T-C1", "Guilloche wave pattern dial", "Signature Trident counter-balance on seconds hand", "38 hour power reserve", "Unidirectional zirconia ceramic bezel"],
          logoSrc_lg: '/api/static-assets/ch-ward.png',
          isFeaturedWatch: true
        },
        {
          id: 4,
          src: { images: [{ src: '/api/static-assets/zelos-featured.jpg', order: 4 } ] },
          brand: 'Zelos',
          siteLink: 'https://zeloswatches.com/',
          name: 'Hammerhead',
          movementType: 'Automatic',
          movement: 'Seiko NH35',
          sizeWidth: '44mm',
          sizeHeight: '17mm',
          sizeLugToLug: '22mm',
          crystal: 'Sapphire',
          watchStyle: 'Diver',
          waterResistance: '1000m',
          Features: ["Titanium Case and Bracelet", "Double domed Sapphire with inner AR coating", "C3 Lumed Screw Down Crown", "C3 and BGW9 Lumed Bezel, Dial and Hands", "120 Click Unidirectional bezel"],
          logoSrc_lg: '/api/static-assets/zelos_lg.png',
          isFeaturedWatch: true
        },
        {
          id: 5,
          src: { images: [{ src: '/api/static-assets/tcm-featured.jpg', order: 5 } ] },
          brand: 'Terra Cielo Mare',
          siteLink: 'https://www.terracielomare.com/',
          name: 'Orienteering BP',
          movementType: 'Automatic',
          movement: 'ETA 2824-2',
          sizeWidth: '44mm',
          sizeHeight: '14mm',
          sizeLugToLug: '22mm',
          crystal: 'Sapphire',
          watchStyle: 'Diver',
          waterResistance: '100m',
          Features: ["Solar compass function", "Titanium medallion caseback", "Grade 2 titanium case with through screws", "Strap in English leather", "Handcrafted in Italy"],
          logoSrc_lg: '/api/static-assets/tcm_lg.png',
          isFeaturedWatch: true
        },
        {
          id: 6,
          src: { images: [{ src: '/api/static-assets/tcm-white-featured.jpg', order: 6 } ] },
          brand: 'Terra Cielo Mare',
          siteLink: 'https://www.terracielomare.com/',
          name: 'Orienteering El Alamein',
          movementType: 'Automatic',
          movement: 'ETA 2824-2',
          sizeWidth: '44mm',
          sizeHeight: '14mm',
          sizeLugToLug: '22mm',
          crystal: 'Sapphire',
          watchStyle: 'Diver',
          waterResistance: '100m',
          Features: ["Solar compass function", "Titanium medallion caseback", "Grade 2 titanium case with through screws", "Strap in English leather", "Handcrafted in Italy"],
          logoSrc_lg: '/api/static-assets/tcm_lg.png',
          isFeaturedWatch: true
        }
      ]
    }
  },

  methods: {
    selectWatch (watch) {
      this.selectedWatch = watch
      this.$refs.seeFeaturedWatchModal.show()

      this.$ga.event({
        eventCategory: 'Advertising',
        eventAction: 'Featured_Collection_Advertisement_Click',
        eventLabel: watch.name + ' - ' + watch.id
      })
    },

    closeFeaturedWatchModel () {
      this.$refs.seeFeaturedWatchModal.hide()
    }
  }
}
</script>

<style scoped>
    /* .container-fluid {
        height: 100%;
    } */

    /* .rowContainer {
        height: 100vh;
    } */

    .watchName {
        font-size: 1vw;
    }

    .watchCard {
        height: 19rem !important;
    }

    .watchImgWrapper {
        width: 100%;
        height: 10rem;

    }

    .watchImg {
        width: auto;
        max-width: 100%;
        height: 100%;
        background-color: white;
    }

    .watchLogoWrapper {
        width: 100%;
        height:4.75rem;
        background-color:#708090;
    }

    .watchLogo {
        width: auto;
        height: 100%;

    }

    @media(max-width: 990px) {
        .container-fluid {
            height: auto;
        }

        .watchName {
            font-size: 1.5vw;
        }

        .watchCard {
        height: 19.5rem !important;
    }

        .watchImgWrapper {
        width: 100%;
        height: 11rem;

    }

    .watchImg {
        width: auto;
        max-width: 100%;
        height: 100%;
    }

    .watchLogoWrapper {
        height: 3.5rem;
        padding: .75rem;
    }

    .watchLogo {
            margin-top: .25rem;
        }
    }

    @media(max-width: 625px) {

        .watchCard {
        height: 18.5rem !important;
        }

        .watchName {
            font-size: 3vw;
        }
    }

    @media(max-width: 525px) {
        .watchCard {
            height: 17.75rem !important;
        }
    }

</style>
