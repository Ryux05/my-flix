<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <title>Bypass Fluxus</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@4.9.0/dist/full.min.css"
      rel="stylesheet"
      type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>

  <body
    class="relative min-h-screen flex flex-col items-center justify-start bg-anime bg-cover bg-center bg-fixed pt-[90px]">
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Content container to ensure it sits above the overlay -->
    <div
      class="relative z-10 w-full flex flex-col items-center">
      <!-- logo fluxus -->

      <!-- input -->
      <div class="isikey text-center">
        <img
          src="./fluxus.png"
          alt="fluxus"
          class="w-auto h-[180px] mb-8 rounded-full mx-auto" />

        <!-- input getkey -->
        <form action="text">
          <input
            placeholder="isi key fluxus"
            type="text"
            name="key"
            id="getkey"
            class="input input-bordered w-full max-w-xs bg-[white]" />
        </form>
      </div>

      <!-- button bypass -->
      <div
        class="justify-center items-center text-center p-[24px]">
        <button
          id="successButton"
          onclick="fluxus()"
          class="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-800">
          BYPASS FLUXUS
        </button>
      </div>

      <!-- KEY -->
      <div class="text-center text-white">
        <div
          class="w-auto h-auto bg-gray-500/65 text-center align-middle items-center rounded-[15px]">
          <h1 class="p-[8px] text-4xl">KEY :</h1>
          <p id="key" class="p-[8px] text-5xl">KOSONG</p>
        </div>
        <br />
        <button
          id="btnCopyText"
          class="bg-blue-500 p-3 text-2xl rounded-lg hover:bg-blue-700">
          COPY KEY
        </button>
      </div>

      <!-- popup berhasil bypass -->
      <div
        id="popup"
        class="fixed left-1/2 top-0 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded shadow-lg hidden slide-down">
        <p>BERHASIL YA, SILAKAN LIHAT DI BAWAH</p>
      </div>
    </div>

    <!-- popup berhasil copy -->
    <div
      id="poopy"
      class="fixed left-1/2 top-0 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded shadow-lg hidden slide-down">
      <p>BERHASIL COPY</p>
    </div>

    <script src="./script.obfuscated.js"></script>

    <!-- Footer -->
    <footer
      class="absolute bottom-0 w-full text-center p-4 bg-black text-white">
      <p>&copy; 2024 | BY : RYUKURO</p>
    </footer>
  </body>
</html>
