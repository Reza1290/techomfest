<script></script>

<template>
  <NuxtLayout>
    <Hero />
    <section class="my-20 mx-20">
      <div class="flex justify-between items-start">
        <div class="max-w-[60%]">
          <h1 class="text-[65px] font-bold text-[#1F420F]">
            Apa Itu LokaBestari?
          </h1>
          <p class="text-[#0F890D] italic text-[24px] line-clamp-3">
            <span class="font-medium">bestari</span> /bes·ta·ri/ = luas dan
            dalam pengetahuannya; berpendidikan baik; baik budi pekerti
          </p>
          <div class="max-w-[642px] text-[24px] font-medium">
            <p class="my-7">
              LokaBestari merupakan situs web yang mempersembahkan
              keanekaragaman budaya yang ada di Indonesia.
            </p>
            <p class="my-7">
              Di LokaBestari, kami membangun sebuah ruang digital yang
              mempersembahkan kekayaan tradisi, seni, dan inovasi dari penjuru
              nusantara. Dari kesenian, hidangan otentik, dan masih banyak yang
              lainnya.
            </p>
            <p class="my-7">
              LokaBestari memberi kemudahan bagi Anda untuk mengeksplor lebih
              dalam pengetahuan Anda tentang warisan budaya yang ada di
              Indonesia.
            </p>
          </div>
        </div>
        <div class="relative">
          <div class="">
            <img
              src="~/assets/css/image2.png"
              class="w-[515px] h-[610px] rounded-3xl"
              alt=""
            />
            <img
              src="~/assets/css/image.png"
              class="w-[473px] h-[329px] -mt-[230px] -ml-[80px] rounded-3xl outline outline-8 outline-[#EFFFF3]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-[65px] text-[#1F420F] font-bold">Kategori</h1>
          <p class="text-[#0F890D] text-[31px] font-medium">
            Kami berikan beberapa rekomendasi kategori menarik untuk anda
          </p>
        </div>
        <div class="flex mt-4 gap-14">
          <a class="rounded-xl h-[550px] w-[262px] bg-black" href=""> </a>
          <a class="rounded-xl h-[550px] w-[262px] bg-black" href=""> </a>
          <a class="rounded-xl h-[550px] w-[262px] bg-black" href=""> </a>
          <a class="rounded-xl h-[550px] w-[262px] bg-black" href=""> </a>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-[65px] text-[#1F420F] font-bold">Eksplorasi</h1>
          <p class="text-[#0F890D] text-[31px] font-medium">
            Ini adalah beberapa daerah yang mungkin menarik untuk anda jelajahi
          </p>
        </div>
        <div class="flex mt-4 gap-20">
          <a
            class="flex justify-center rounded-xl h-[203px] w-[337px] bg-black relative"
            href=""
          >
            <div
              class="bg-white rounded-t-xl absolute bottom-0 w-[240px] h-[127px]"
            >
              <img src="" alt="logo" />
            </div>
          </a>
          <a
            class="flex justify-center rounded-xl h-[203px] w-[337px] bg-black relative"
            href=""
          >
            <div
              class="bg-white rounded-t-xl absolute bottom-0 w-[240px] h-[127px]"
            >
              <img src="" alt="logo" />
            </div>
          </a>
          <a
            class="flex justify-center rounded-xl h-[203px] w-[337px] bg-black relative"
            href=""
          >
            <div
              class="bg-white rounded-t-xl absolute bottom-0 w-[240px] h-[127px]"
            >
              <img src="" alt="logo" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="px-20 mt-20 mb-10">
      <div
        class="bg-[url('~/assets/css/image3.png')] rounded-3xl w-full h-[467px] bg-black flex flex-col justify-between items-center backdrop-blur-lg"
      >
        <div class="flex flex-col items-center">
          <h1 class="text-gray-100 text-[65px] font-bold">Mainkan Gim</h1>
          <p class="text-[32px] font-medium">
            Cari tahu yuk seberapa jauh sih pengetahuanmu
          </p>
        </div>
        <div>Mainkan Gim</div>
      </div>
    </section>
    <Footer></Footer>
  </NuxtLayout>
</template>
