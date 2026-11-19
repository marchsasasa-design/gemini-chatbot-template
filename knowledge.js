/**
 * ============================================================================
 * LOCAL RAG KNOWLEDGE BASE (knowledge.js)
 * ============================================================================
 */

const KNOWLEDGE_BASE = [
    {
        id: "promo-01",
        title: "Tentang PromoBot",
        keywords: ["promobot", "promo", "diskon", "promosi", "penngertian"],
        content: `PromoBot adalah chatbot yang di rancang untuk membantu pengguna mendapatkan informasi seputar promosi, diskon, potongan harga, dan penawaran menarik. PromoBot memberikan informasi secara cepat dan mudah dipahami.`
    },
    {
        id: "promo-02",
        title: "Tujuan PromoBot",
        keywords: ["tujuan", "fungsi", "manfaat", "kegunaan"],
        content: `PromoBot bertujuan untuk memudahkan pengguna dalam mencari informasi promosi, mengetahui penawaran yang tersedia, serta membantu pengguna memahami keuntungan dari suatu promo.`
    },
    {
        id: "promo-03",
        title: "Jenis-Jenis Promosi",
        keywords: ["jenis promo", "diskon", "cashback", "voucher", "gratis ongkir"],
        content: `Jenis promosi meliputi diskon atau potongan harga, cashback, voucher belanja, gratis ongkir, bundling produk, dan promo beli satu gratis satu.`
    },
    {
        id: "promo-04",
        title: "Cara Menggunakan Promo",
        keywords: ["cara menggunakan","cara mendapatkan", "voucher", "kode promo"],
        content: `Untuk menggukan promo, pengguna perlu membaca syarat dan ketentuan, memeriksa masa berlaku promo, memastikan produk memenuhi persyaratan, kemudian memasukan kode voucher jika diperlukan.`
    },
    {
        id: "promo-05",
        title: "Tips Memilih Promo",
        keywords: ["tips", "memilih promo", "promo terbaik", "hemat"],
        content: `Pilih promo sesuai kebutuhan, bandingkan potongan harga, perhatikan minimal pembelian, cek masa berlaku, dan pastikan tidak ada biaya tambahan yang merugikan.`
    },
    {
        id: "promo-06",
        title: "FAQ  PromoBot",
        keywords: ["faq", "pertanyaan", "bantuan", "promo tidak berlaku"],
        content: `Jika promo tidak dapat digunakan, periksa kembali masa berlaku, syarat minimal pembelian, produk yang memenuhi ketentuan, serta kode promo yang dimasukan.`
    }
];

Object.freeze(KNOWLEDGE_BASE);
