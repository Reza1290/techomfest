<template>
  <div class="px-5 lg:px-[101px]">
    <section id="hero-detail">
      <div class="w-full h-[380px] lg:h-[480px] flex justify-center">
        <div class="w-full max-h-full cursor-pointer card-detail">
          <div
            class="card-detail-image bg-[url('~/assets/images/hidangan/rendang.jpeg')]"
          ></div>
          <div
            class="flex items-center justify-center w-full min-h-full backdrop-brightness-[.7]"
          >
            <p class="font-bold text-center text-white text-5xl lg:text-7xl">
              Rendang
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex justify-center py-4">
      <div class="w-3/4">
        <h3 class="text-2xl lg:text-4xl font-bold text-primary">Rendang</h3>
        <h5 class="mt-1 text-xl lg:text-2xl font-bold text-[#469951]">
          Padang, Sumatera Barat
        </h5>
      </div>
      <div class="flex justify-end w-1/4">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[70px] h-[70px] lg:w-[97px] lg:h-[97px]"
        >
          <path
            d="M16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
            stroke="#1F420F"
            stroke-width="1.5"
          />
          <path
            opacity="0.5"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#1F420F"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </section>
    <div class="w-full">
      <svg
        class="w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="3"
        viewBox="0 0 1238 2"
        fill="none"
      >
        <path d="M0 1L1238 0.999892" stroke="#6C6C6C" />
      </svg>
    </div>
    <section id="description" class="py-7 pr-7">
      <p class="text-base lg:text-xl font-medium">
        Rendang adalah masakan khas Indonesia tepatnya berasal dari Padang,
        Sumatera Barat yang terkenal di seluruh dunia. <br /><br />Pada tahun
        2011 dan 2017, rendang terpilih sebagai makanan terenak di dunia. Nama
        asli rendang adalah randang, yang diambil dari kata ‘merandang,’ artinya
        ‘lambat.’ Hal ini merujuk pada durasi memasak rendang yang lama, minimal
        delapan jam, bahkan ada yang memasak semalaman. <br /><br />Rendang
        dimasak dalam beberapa tahapan hingga bumbu meresap sempurna ke dalam
        daging. Saat membelah daging rendang, terdapat serat-serat lengket
      </p>
    </section>
  </div>
  <section id="carousel">
    <div class="h-full py-10 lg:py-[120px]">
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-3xl lg:text-5xl text-[#1F420F] font-bold">
            Jelajahi Hidangan Lain
          </h1>
        </div>
        <div class="hidden lg:relative lg:flex mt-7 gap-14">
          <div
            class="absolute z-20 left-[97.5%] top-[40%] cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r="31.5"
                fill="#8CFE5C"
                class="hover:shadow-2xl"
              />
              <path
                d="M36.8286 25L43 31.1714L36.8286 37.3428"
                stroke="#1F420F"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.8 31.2432H20"
                stroke="#1F420F"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <!-- CARD START -->
          <div
            class="w-1/3 overflow-hidden transition-all duration-300 bg-white shadow-2xl cursor-pointer rounded-3xl hover:shadow-2xl hover:scale-105"
          >
            <img
              src="`~/assets/images/hidangan/lumpia.jpeg`"
              alt="nama"
              class="h-[277px] w-full rounded-2xl"
            />
            <div class="p-5">
              <h4 class="text-[#469951] text-center font-bold uppercase">
                Jawa Tengah
              </h4>
              <h1 class="py-2 text-3xl font-bold text-center text-primary">
                Lumpia
              </h1>
            </div>
          </div>
          <!-- CARD END -->
          <!-- CARD START -->
          <div
            class="w-1/3 overflow-hidden transition-all duration-300 bg-white shadow-2xl cursor-pointer rounded-3xl hover:shadow-2xl hover:scale-105"
          >
            <img
              src="`~/assets/images/hidangan/seblak.jpeg`"
              alt="nama"
              class="h-[277px] w-full rounded-2xl"
            />
            <div class="p-5">
              <h4 class="text-[#469951] text-center font-bold uppercase">
                Jawa Barat
              </h4>
              <h1 class="py-2 text-3xl font-bold text-center text-primary">
                Seblak
              </h1>
            </div>
          </div>
          <!-- CARD END -->
          <!-- CARD START -->
          <div
            class="w-1/3 overflow-hidden transition-all duration-300 bg-white shadow-2xl cursor-pointer rounded-3xl hover:shadow-2xl hover:scale-105"
          >
            <img
              src="`~/assets/images/hidangan/papeda.jpeg`"
              alt="nama"
              class="h-[277px] w-full rounded-2xl"
            />
            <div class="p-5">
              <h4 class="text-[#469951] text-center font-bold uppercase">
                Papua Jaya
              </h4>
              <h1 class="py-2 text-3xl font-bold text-center text-primary">
                Papeda
              </h1>
            </div>
          </div>
          <!-- CARD END -->
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script setup>
import Footer from "~/components/Footer.vue"
</script>
