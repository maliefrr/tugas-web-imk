const fullImg = document.querySelector('.full-display');
const displayInner = document.querySelectorAll('.produk-top img');
const inner = document.querySelector('.display-inner');
const innerImg = document.querySelector('.full-img');
const judul = document.querySelector('.caption');
const detail = document.querySelector('.fitur-detail');
// const fiturDetail = document.querySelector('fitur-detail')

// detail dari data 
const fitur = [['CPU Liquid cooler','Noise level : 6-30 dBA','Rated Voltage : 12 VDC'],
                ['RGB Fan Cooler','Efisien dan tenang','Memiliki Ukuran 12 cm dengan Bearing Type Hydraulic','memiliki sistem anti-getaran'],
                ['Core Clock 1860 MHz (Reference Card: 1695 MHz)','CUDA® Cores 10496 ','Memory Clock 19500 MHz','Memory Size 24 GB','Memory Type GDDR6X','Memory Bus 384 bit Memory'],
                ['Sound : stereo','Frequency Response : 20 Hz-20 KHz','Microphone size : 6x5 mm','Connectors : 2x3,5 mm jack','Cable Length : 2 m'],
                ['Neodymium Drivers : 40mm','Headphone Frequency Response : 20-22000 Hz','Headphone Sensitivity : 98db','Headphone Impedance : 32 Ohm','Headphone Volume Control : On Ear Cup'],
                ['RGB Colors LED Backlight','Standar Layout','Design For Gamer'],
                ['memiliki Nuts Ultra Durable dan Perfect Key','Material keyboard menggunakan plat besi dan kabel Brainded','memiliki 2 mode lampu yakni Mode Breathing dan Mode Static)'],
                ['OLED Display delivers information straight from games and apps',`Instant notifications from Discord, Tidal and games - Durable mechanical gaming switches`,'series 5000 Aircraft grade Aluminium frame'],
                ['Curved Gaming Monitor','Quantum dot Color','Super-fast and Smooth Gameplay','1(MPRT)ms Response Time-Resulotion 2560x1440p'],
                ['Display sixe ; 24 Inch LCD Panel LED Backlight','Brightness (typical) : 250cd/m2','NTSC : sRGB, 85% :110%','Contrast (Typical) : 3000 : 1','Response Time (Typical) : 1ms'],
                ['Wireless gaming mouse','Ergonomic Design','1800 DPI Sensor'],
                ['Mouse Wireless','Scroll wheel dan tombol yang nyaman','Desain ergonomis nan ringkas','Plug and Go Nano Transceiver']

]

displayInner.forEach(img => {
    img.addEventListener('click',() =>{
        fullImg.classList.add('open');
        inner.classList.add('open')
        // dynamic thing
        const imgSrc = img.getAttribute("data-original");
        innerImg.src = `./gambar/Jual PC-20210612T044646Z-001/Jual PC/${imgSrc}`
        const judulProduk = img.alt;
        judul.textContent = judulProduk;
        const imgPos = img.getAttribute("data-point");
        fitur[imgPos - 1].forEach((item) => {
            detail.innerHTML += `<li>${item}</li>`;
        });
    });
});


const beli = document.querySelector(".beli");
const form = document.querySelector(".myForm")
const jumlahBeli = document.querySelector(".number");

function handleForm(event) { 
    event.preventDefault(); 
    beli.addEventListener('click',(ev)=> {
        console.log(jumlahBeli.value);
        if(parseInt(jumlahBeli.value) > 0){
            alert(`Pesanan Anda sedang diproses,Terimakasih telah membeli produk kami`);
            form.reset()
        }
        else{
            ev.target.setCustomValidity("Form tidak boleh kosong atau berisi nilai negatif");
            form.reset();
        }
    });
} 
form.addEventListener('submit', handleForm);


fullImg.addEventListener('click',(ev) => {
    if(ev.target.classList.contains("full-display")){
        fullImg.classList.remove("open");
        inner.classList.remove('open');
        detail.innerHTML = '';
        jumlahBeli.value = '';
    }
})
