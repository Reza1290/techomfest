<template>
  <div class="flex flex-col gap-5 max-w-[850px] m-20 mx-auto">
    <div
      class="flex flex-col justify-center items-center py-1 h-max bg-secondary rounded-[28px]"
    >
      <h1 class="font-bold -mt-2 uppercase text-[54px]">QUIZ</h1>
      <p class="font-bold -mt-4 text-[16px]">tekan tombol untuk memilih</p>
    </div>
    <div class="bg-secondary rounded-[28px] p-5">
      <div class="rounded-[20px] bg-white w-full p-5">
        <div class="flex flex-col">
          <h1 class="text-[45px] font-bold">Tahukah Kamu?</h1>
          <p class="text-[18px] font-bold">
            Di Bawah ini mana salah satu suku yang ada di {{ nama }}?
          </p>
        </div>
        <div class="flex max-md:flex-col">
          <div class="flex gap-5 mt-2 w-full group" v-for="quizItem in quiz">
              <div class="w-full mx-2" v-for="(pil,quiz) in quizItem" :key="quiz">
                <label
                :for="'ans'+quiz"
                class="bg-secondary rounded-[12px] px-10 font-bold cursor-pointer hover:scale-105 h-12 w-full flex justify-center items-center transition-transform   "
                >{{ quiz }}</label
                >
                <input
                class="sr-only peer"
                value="0"
                type="radio"
                name="jawaban"
                :id="'ans'+quiz"
                />
                <div class="hidden peer-checked:block top-5 right-3 bg-secondary rounded-[12px] mt-2 flex justify-center items-center p-5 text-justify font-bold ">
                  JAWABAN ANDA {{ pil.benar == true ? 'BENAR!' : 'SALAH!' }}<p class="font-medium text-start">
                    {{ pil.jawaban }}
                  </p>
                  
                </div>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
       data : {
        default : []
       },
       nama : {
        default : ''
       },
       quiz:{
        default : []
       }
    }
  }

</script>