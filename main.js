// ==========================================================================
// Furni.UZ - Asosiy JavaScript
// Imkoniyatlar: Dark Mode (Tungi rejim), Ko'p Rasmlar Galereyasi, Qidiruv, Sevimlilar (Like), Savat
// ==========================================================================

// Sahifa yuklanishidan oldin darhol temani o'rnatish
(function() {
  const savedTheme = localStorage.getItem('furni_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
})();

// Mebellar ro'yxati (Har bir mebelda bir-birini takrorlamaydigan mutlaqo noyob rasmlar)
const furnitureData = [
  {
    id: 1,
    name: "Chesterfield Royal Premium Divan",
    category: "mehmonxona",
    categoryName: "Mehmonxona Mebeli",
    badge: "badge-hot",
    badgeText: "Xit Savdo",
    price: 6800000,
    oldPrice: 7900000,
    material: "Tabiiy eman karkasi, 32-zichlikdagi elastik ortopedik ko'pik, suv va kirlanishga qarshi turk baxmali (velur).",
    origin: "Turkiya (Inegöl mebel sanoat klasteri)",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 2,
    name: "Nordic Comfort Skandinavcha Kreslo",
    category: "mehmonxona",
    categoryName: "Mehmonxona / Dam olish",
    badge: "badge-new",
    badgeText: "Yangi",
    price: 1950000,
    oldPrice: 2400000,
    material: "Tabiiy qayin yog'och oyoqlar, nafas oluvchi yumshoq zig'ir (len) mato, gipoallergen eko-paxta to'ldiruvchi.",
    origin: "O'zbekiston (Toshkent mebel fabrikasi)",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 3,
    name: "Imperator Dream 2 Kishilik Krovat",
    category: "yotoqxona",
    categoryName: "Yotoqxona Mebeli",
    badge: "badge-sale",
    badgeText: "-15% Chegirma",
    price: 8400000,
    oldPrice: 9700000,
    material: "Qattiq qarag'ay massivi, yumshoq baxmal krovat boshi, 7-zonalik ortopedik pocket-spring mustaqil prujinali matras.",
    origin: "Rossiya (Moskva Askona litsenziyasi asosida)",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 4,
    name: "Milano Elegance Mramor Stol & 6 Stul",
    category: "oshxona",
    categoryName: "Oshxona & Mehmonxona",
    badge: "badge-hot",
    badgeText: "Premium",
    price: 11200000,
    oldPrice: 13000000,
    material: "Chidamliligi yuqori kvars-mramor sirt, oltin xrom zanglamas po'lat oyoqlar, nafis mikrofibra qoplamali qulay stullar.",
    origin: "Italiya (Milano dizayni, O'zbekistonda montaj)",
    images: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 5,
    name: "ErgoPro Master Ergonomik Kreslo",
    category: "ofis",
    categoryName: "Ofis mebeli",
    badge: "badge-new",
    badgeText: "Xit",
    price: 2650000,
    oldPrice: 3100000,
    material: "Nafas oluvchi to'r (mesh), anatomik bel suyanchig'i, quyma alyuminiy poydevor va 3D moslashuvchan qo'l tayanchlari.",
    origin: "Janubiy Koreya (Seul Ergonomics)",
    images: [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 6,
    name: "Bursa Family Katta Burchak Divani",
    category: "mehmonxona",
    categoryName: "Mehmonxona Mebeli",
    badge: "badge-sale",
    badgeText: "Aksiya",
    price: 12500000,
    oldPrice: 14000000,
    material: "Evrokitob ochiluvchi metall mexanizm, teflon dog' yuqmas mato, keng ichki zig'ir saqlash qutilari.",
    origin: "Turkiya (Bursa mebel klasteri)",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 7,
    name: "Loft Bookshelf Zamonaviy Stellaj",
    category: "ofis",
    categoryName: "Ofis & Mehmonxona",
    badge: "badge-new",
    badgeText: "Yangi",
    price: 3100000,
    oldPrice: 3600000,
    material: "Tabiiy yong'oq teksturali sifatli MDF (E1 standart), qora mot kukunli bo'yoqdagi baquvvat metall rom.",
    origin: "O'zbekiston (Samarqand Mebel Zavodi)",
    images: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 8,
    name: "Modern Glassic Oshxona Garnituri",
    category: "oshxona",
    categoryName: "Oshxona Mebeli",
    badge: "badge-hot",
    badgeText: "Top Sifat",
    price: 18900000,
    oldPrice: 21500000,
    material: "AGT Ultra High Gloss fasad (Turkiya), Blum avstriyskiy yumshoq dovodchik mexanizmlar, namlikka chidamli 38mm stoleshnitsa.",
    origin: "O'zbekiston (Germaniya texnologiyasi)",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 9,
    name: "Junior Castle Bolalar Yotoq To'plami",
    category: "bolalar",
    categoryName: "Bolalar xonasi",
    badge: "badge-new",
    badgeText: "Eko-Sifat",
    price: 7800000,
    oldPrice: 8900000,
    material: "100% tabiiy oq qayin yog'ochi, hidsiz suv asosli hipoallergen bo'yoq, yumaloqlangan shikastlanmaydigan burchaklar.",
    origin: "Belarus (Minsk bolalar mebellari fabrikasi)",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 10,
    name: "Aura Marble Premium Jurnal Stoli",
    category: "mehmonxona",
    categoryName: "Mehmonxona Mebeli",
    badge: "badge-sale",
    badgeText: "Aksiya",
    price: 1450000,
    oldPrice: 1800000,
    material: "Zarbaga chidamli chiniqtirilgan mramor naqshli oyna, korroziyaga qarshi qoplangan metall oltin poydevor.",
    origin: "O'zbekiston (Toshkent dizayn studiyasi)",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 11,
    name: "Venice 4-Eshikli Oynali Garderob",
    category: "yotoqxona",
    categoryName: "Yotoqxona Mebeli",
    badge: "badge-hot",
    badgeText: "Katta Sig'im",
    price: 9800000,
    oldPrice: 11500000,
    material: "Kronospan sifatli laminat plitasi, bronza tusli to'liq bo'y ko'zgu, ichki avtomatik sensorli LED chiroqlar.",
    origin: "Polsha / Turkiya hamkorligi",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 12,
    name: "Loft Executive Qattiq Eman Stoli",
    category: "ofis",
    categoryName: "Ofis & Ish xonasi",
    badge: "badge-new",
    badgeText: "Yangi",
    price: 3900000,
    oldPrice: 4600000,
    material: "Tabiiy massiv eman yog'ochi, ekologik moy-mum qoplamasi, kabel-menejment paneli va temir profilli oyoqlar.",
    origin: "O'zbekiston (Toshkent mebel ustaxonasi)",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 13,
    name: "Comfort Velvet Yumshoq Pufik",
    category: "mehmonxona",
    categoryName: "Mehmonxona & Dahliz",
    badge: "badge-new",
    badgeText: "Yangi",
    price: 750000,
    oldPrice: 950000,
    material: "Oltin metall poydevor, zich ko'pik va ipaksimon mayin turk velur qoplamasi.",
    origin: "O'zbekiston (Toshkent mebel sexi)",
    images: [
      "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 14,
    name: "Grand Loft Orolcha Oshxona Stoli",
    category: "oshxona",
    categoryName: "Oshxona Mebeli",
    badge: "badge-hot",
    badgeText: "Top Sifat",
    price: 8500000,
    oldPrice: 9800000,
    material: "Issiqqa chidamli kvars stol usti, o'rnatilgan shkafchalari va tabiiy qoraqarag'ay javonlari.",
    origin: "Turkiya (Anqara dizayn studiyasi)",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 15,
    name: "Smart Kids O'quvchi Stoli va Javoni",
    category: "bolalar",
    categoryName: "Bolalar & O'quvchi",
    badge: "badge-sale",
    badgeText: "-20% Chegirma",
    price: 2900000,
    oldPrice: 3600000,
    material: "Bo'yi va qiyaligi moslashuvchan mexanizm, zararsiz eko-MDF, kitob va daftar uchun maxsus polkalar.",
    origin: "O'zbekiston (Samarqand bolalar mebeli)",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 16,
    name: "Relax Pro Tebranuvchi Lounge Kreslo",
    category: "mehmonxona",
    categoryName: "Dam olish va Zal",
    badge: "badge-new",
    badgeText: "Xit",
    price: 3400000,
    oldPrice: 4100000,
    material: "Bukilgan tabiiy eman yog'ochi, qulay bosh tayanchi, nafas oluvchi paxtali mato.",
    origin: "Germaniya litsenziyasi (O'zbekistonda yig'ilgan)",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80"
    ]
  }
];

// Savat va Sevimlilar ma'lumotlari (localStorage bilan doimiy)
let cart = JSON.parse(localStorage.getItem('furni_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('furni_favorites')) || [];

// Modalda ko'rsatilayotgan mahsulot va faol rasm indeksi
let activeModalProduct = null;
let activeModalImgIndex = 0;

// Narxni so'mda chiroyli formatlash
function formatPrice(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

// ================= DARK MODE (TUNGI REJIM) TIZIMI =================
function initTheme() {
  const savedTheme = localStorage.getItem('furni_theme');
  const isDark = savedTheme === 'dark';
  if (isDark) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  updateThemeIcons(isDark);
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('furni_theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
  showToast(isDark ? "Tungi rejim yoqildi 🌙" : "Kunduzgi rejim yoqildi ☀️");
}

function updateThemeIcons(isDark) {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    btn.title = isDark ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish";
  });
}

// ================= HISOB-KITOBLAR VA BADGE'LAR =================
function updateCartCount() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    badge.innerText = totalCount;
  }
}

function updateFavCount() {
  const badge = document.getElementById('favBadge');
  if (badge) {
    badge.innerText = favorites.length;
  }
}

// ================= SEVIMLILAR (LIKE / FAVORITES) TIZIMI =================
function isFavorite(productId) {
  return favorites.some(item => item.id === productId);
}

function toggleFavorite(productId, event) {
  if (event) {
    event.stopPropagation();
  }

  const product = furnitureData.find(item => item.id === productId);
  if (!product) return;

  const index = favorites.findIndex(item => item.id === productId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast(`"${product.name}" sevimlilardan olib tashlandi.`);
  } else {
    favorites.push({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      img: product.images[0],
      material: product.material,
      origin: product.origin
    });
    showToast(`"${product.name}" sevimlilarga qo'shildi! ❤️`);
  }

  localStorage.setItem('furni_favorites', JSON.stringify(favorites));
  updateFavCount();
  updateLikeButtonsState();
  renderFavoritesModal();
}

function updateLikeButtonsState() {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach(btn => {
    const pId = parseInt(btn.getAttribute('data-product-id'));
    if (isFavorite(pId)) {
      btn.classList.add('liked');
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
      btn.title = "Sevimlilardan o'chirish";
    } else {
      btn.classList.remove('liked');
      btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      btn.title = "Sevimlilarga qo'shish";
    }
  });
}

// Sevimlilar Modalini ochish
function openFavoritesModal() {
  renderFavoritesModal();
  const modal = document.getElementById('favoritesModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeFavoritesModal() {
  const modal = document.getElementById('favoritesModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function renderFavoritesModal() {
  const container = document.getElementById('favItemsContainer');
  if (!container) return;

  if (favorites.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #64748b;">
        <i class="fa-regular fa-heart" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 12px; display: block;"></i>
        <h4>Hozircha sevimli mebellar yo'q</h4>
        <p style="font-size: 0.9rem; margin-top: 6px;">O'zingizga yoqqan mebellardagi yurakcha ❤️ belgisini bosing.</p>
      </div>
    `;
    return;
  }

  let html = '';
  favorites.forEach(item => {
    html += `
      <div class="fav-modal-item">
        <img src="${item.img}" alt="${item.name}" class="fav-modal-img">
        <div class="fav-modal-info">
          <div class="fav-modal-title">${item.name}</div>
          <div class="fav-modal-price">${formatPrice(item.price)}</div>
          <div style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">
            <i class="fa-solid fa-earth-americas"></i> ${item.origin}
          </div>
        </div>
        <button class="btn-primary" style="padding: 8px 14px; font-size: 0.85rem;" onclick="addToCart('${item.name}', ${item.price}, '${item.img}')" title="Savatga qo'shish">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
        <button class="remove-btn" onclick="toggleFavorite(${item.id})" title="O'chirish" style="font-size: 1.1rem; color: #ef4444; border:none; background:none; cursor:pointer; padding:6px;">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ================= SAVATGA QO'SHISH =================
function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      name: name,
      price: price,
      img: img,
      quantity: 1
    });
  }

  localStorage.setItem('furni_cart', JSON.stringify(cart));
  updateCartCount();
  showToast(`"${name}" savatga qo'shildi! 🛒`);
}

// Bildirishnoma (Toast)
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

// ================= MAHSULOTLARNI RENDER QILISH (GRID) =================
function renderProducts(productsList) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (productsList.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--white); border-radius: 14px; border: 1px solid var(--border-color);">
        <i class="fa-solid fa-couch" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 15px;"></i>
        <h3>Mebel topilmadi</h3>
        <p style="color: #64748b; margin-top: 6px;">Iltimos, boshqa so'z bilan qidiring yoki barcha toifalarni ko'ring.</p>
      </div>
    `;
    return;
  }

  let html = '';
  productsList.forEach(p => {
    const isLiked = isFavorite(p.id);
    const firstImg = p.images[0];
    const imgCount = p.images.length;

    html += `
      <div class="product-card" data-category="${p.category}" data-name="${p.name}">
        <div class="product-img-wrapper">
          <span class="badge-tag ${p.badge}">${p.badgeText}</span>
          
          <!-- Rasmlar soni belgisi -->
          <div class="product-img-count" title="${imgCount} ta rasm mavjud">
            <i class="fa-solid fa-images"></i> ${imgCount} ta rasm
          </div>

          <!-- Tepa O'ng Amallar: Like va Batafsil -->
          <div class="product-top-actions">
            <button class="like-btn ${isLiked ? 'liked' : ''}" data-product-id="${p.id}" onclick="toggleFavorite(${p.id}, event)" title="${isLiked ? 'Sevimlilardan o\'chirish' : 'Sevimlilarga qo\'shish'}">
              <i class="${isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
            </button>
            <button class="quick-view-btn" onclick="openProductModal(${p.id})" title="Rasmlarni va tafsilotlarni ko'rish">
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>

          <img src="${firstImg}" alt="${p.name}" class="product-img" onclick="openProductModal(${p.id})" style="cursor: pointer;">
        </div>

        <div class="product-body">
          <span class="product-category">${p.categoryName}</span>
          <h3 class="product-title">${p.name}</h3>
          
          <div class="product-specs">
            <div class="spec-item">
              <i class="fa-solid fa-hammer"></i>
              <div>
                <span class="spec-label">Nima qilingan:</span>
                <span class="spec-val">${p.material}</span>
              </div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-earth-americas"></i>
              <div>
                <span class="spec-label">Qayerdanligi:</span>
                <span class="spec-val">${p.origin}</span>
              </div>
            </div>
          </div>

          <div class="product-footer">
            <div class="price-wrap">
              <span class="old-price">${formatPrice(p.oldPrice)}</span>
              <span class="current-price">${formatPrice(p.price)}</span>
            </div>
            <button class="add-cart-btn" onclick="addToCart('${p.name}', ${p.price}, '${firstImg}')" title="Savatga qo'shish">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

// ================= MODAL & KO'P RASMLAR GALEREYASI =================
function openProductModal(id) {
  const product = furnitureData.find(item => item.id === id);
  if (!product) return;

  activeModalProduct = product;
  activeModalImgIndex = 0;

  document.getElementById('modalCategory').innerText = product.categoryName;
  document.getElementById('modalTitle').innerText = product.name;
  document.getElementById('modalPrice').innerText = formatPrice(product.price);
  document.getElementById('modalMaterial').innerText = product.material;
  document.getElementById('modalOrigin').innerText = product.origin;

  updateModalGallery();

  const addBtn = document.getElementById('modalAddToCartBtn');
  if (addBtn) {
    addBtn.onclick = function() {
      addToCart(product.name, product.price, product.images[0]);
      closeProductModal();
    };
  }

  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function updateModalGallery() {
  if (!activeModalProduct) return;

  const mainImg = document.getElementById('modalImg');
  const thumbsContainer = document.getElementById('modalThumbnails');

  mainImg.src = activeModalProduct.images[activeModalImgIndex];

  let thumbsHtml = '';
  activeModalProduct.images.forEach((imgUrl, idx) => {
    const isActive = idx === activeModalImgIndex ? 'active' : '';
    thumbsHtml += `
      <div class="thumb-item ${isActive}" onclick="selectModalImage(${idx})">
        <img src="${imgUrl}" alt="Mebel burchagi ${idx + 1}">
      </div>
    `;
  });

  thumbsContainer.innerHTML = thumbsHtml;
}

function selectModalImage(index) {
  activeModalImgIndex = index;
  updateModalGallery();
}

function nextModalImage() {
  if (!activeModalProduct) return;
  activeModalImgIndex = (activeModalImgIndex + 1) % activeModalProduct.images.length;
  updateModalGallery();
}

function prevModalImage() {
  if (!activeModalProduct) return;
  activeModalImgIndex = (activeModalImgIndex - 1 + activeModalProduct.images.length) % activeModalProduct.images.length;
  updateModalGallery();
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// ================= QIDIRUV VA FILTRLASH LOGIKASI =================
function handleSearch(query) {
  const q = query.toLowerCase().trim();
  const filtered = furnitureData.filter(item => {
    return (
      item.name.toLowerCase().includes(q) ||
      item.material.toLowerCase().includes(q) ||
      item.origin.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q)
    );
  });

  renderProducts(filtered);

  const catalogSection = document.getElementById('catalog');
  if (catalogSection && q.length > 0) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Dastur yuklanganda ishga tushish
document.addEventListener('DOMContentLoaded', () => {
  // Theme (Dark Mode) initsializatsiyasi
  initTheme();

  updateCartCount();
  updateFavCount();

  // Boshlang'ich mahsulotlarni chizish
  renderProducts(furnitureData);

  // Kategoriya bo'yicha filter tugmalari
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-category');
      if (filterValue === 'all') {
        renderProducts(furnitureData);
      } else {
        const filtered = furnitureData.filter(p => p.category === filterValue);
        renderProducts(filtered);
      }
    });
  });

  // Katalog ustidagi keng va qulay Qidiruv paneli
  const catalogSearchInput = document.getElementById('catalogSearchInput');
  const catalogSearchBtn = document.getElementById('catalogSearchBtn');

  if (catalogSearchBtn && catalogSearchInput) {
    catalogSearchBtn.addEventListener('click', () => {
      handleSearch(catalogSearchInput.value);
    });
    catalogSearchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        handleSearch(catalogSearchInput.value);
      }
    });
    catalogSearchInput.addEventListener('input', () => {
      handleSearch(catalogSearchInput.value);
    });
  }

  // Modallarni tashqarisiga bosganda yopish
  window.addEventListener('click', (e) => {
    const productModal = document.getElementById('productModal');
    const favModal = document.getElementById('favoritesModal');
    if (e.target === productModal) {
      closeProductModal();
    }
    if (e.target === favModal) {
      closeFavoritesModal();
    }
  });
});
