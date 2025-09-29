// Simple zikr cycle
const zikrs = [
  { ar: "SubḥānAllāh (سُبْحَانَ ٱللَّٰهِ)", tr: "Glory be to Allah" },
  { ar: "Alḥamdulillāh (ٱلْـحَمْدُ لِلَّٰهِ)", tr: "All praise is due to Allah" },
  { ar: "Allāhu Akbar (ٱللَّٰهُ أَكْبَرُ)", tr: "Allah is the Greatest" },
  { ar: "Lā ilāha illallāh (لَا إِلٰهَ إِلَّا ٱللَّٰهُ)", tr: "There is no god but Allah" }
];

let index = 0;
setInterval(() => {
  index = (index + 1) % zikrs.length;
  document.getElementById("zikr-ar").textContent = zikrs[index].ar;
  document.getElementById("zikr-tr").textContent = zikrs[index].tr;
}, 4000);