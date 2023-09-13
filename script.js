const btnFilters = document.querySelectorAll(".filter");
const nameFilter = document.querySelector(".name-filter");
const btnChooseImg = document.querySelector(".custom-file-label");

const fiturs = document.querySelector(".btn-fiturs");
const fileImg = document.querySelector(".btn-choose-save input");
const spaceImg = document.querySelector(".space-image");

const img = document.querySelector(".space-image img");

fileImg.addEventListener("change", function (e) {
  const selectedFile = e.target.files[0];

  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      img.setAttribute("src", event.target.result);

      spaceImg.style.border = "none";
    };
    reader.readAsDataURL(selectedFile);
  }
});

const outputRange = document.querySelector(".value-input");
const range = document.getElementById("range");

const image = document.querySelector("img");

// event fiturs
fiturs.addEventListener("click", function filters(e) {
  nameFilter.textContent = "";
  if (e.target.className == "filter 1") {
    nameFilter.textContent = "Brightness";
    e.preventDefault();
  } else if (e.target.className == "filter 2") {
    nameFilter.textContent = "Saturation";
    e.preventDefault();
  } else if (e.target.className == "filter 3") {
    nameFilter.textContent = "Inversion";
    e.preventDefault();
  } else if (e.target.className == "filter 4") {
    nameFilter.textContent = "Grayscale";
    e.preventDefault();
  } else if (e.target.className == "filter 5") {
    nameFilter.textContent = "Contrast";
    e.preventDefault();
  } else if (e.target.className == "filter 6") {
    nameFilter.textContent = "Opacity";
    e.preventDefault();
  }

  // change filter
  range.addEventListener("input", function inputRange(a) {
    const valueRange = Math.round(range.value);
    outputRange.textContent = valueRange;

    if (nameFilter.textContent === "Brightness") {
      image.style.filter = `brightness(${valueRange}%)`;
    } else if (nameFilter.textContent === "Saturation") {
      image.style.filter = `saturate(${valueRange}%)`;
    } else if (nameFilter.textContent === "Inversion") {
      image.style.filter = `invert(${valueRange}%)`;
    } else if (nameFilter.textContent === "Grayscale") {
      image.style.filter = `grayscale(${valueRange}%)`;
    } else if (nameFilter.textContent === "Contrast") {
      image.style.filter = `contrast(${valueRange}%)`;
    } else if (nameFilter.textContent === "Opacity") {
      image.style.filter = `opacity(${valueRange}%)`;
    }
  });
});

const blur = document.querySelector(".blur #blur");
blur.addEventListener("input", function () {
  const blurValue = blur.value;
  image.style.filter = blurValue;
});

// Save Image
const saveImg = document.getElementById("saveImage");
saveImg.addEventListener("click", function downloadImage() {
  // Pastikan file telah dipilih
  if (fileImg.files.length === 0) {
    alert("Pilih gambar terlebih dahulu.");
    return;
  }

  // Dapatkan file yang telah dipilih
  const selectedFile = fileImg.files[0];

  // Buat URL objek yang menunjuk ke file
  const fileURL = URL.createObjectURL(selectedFile);

  // Buat tautan unduhan
  const downloadLink = document.createElement("a");
  downloadLink.href = fileURL;
  downloadLink.download = selectedFile.name; // Nama file yang akan diunduh

  // Klik tautan unduhan secara otomatis
  downloadLink.click();

  // Hapus URL objek setelah pengunduhan
  URL.revokeObjectURL(fileURL);
});
