/**
 * ============================================================================
 * ADMIN CONFIGURATION FILE (config.js)
 * ============================================================================
 */

const BOT_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------
    botName: "PromoBot AI",
    botSubtitle: "Asisten Promosi Cerdas Berbasis AI",
    botAvatar: "📢",
    userAvatar: "🤖",
    welcomeHeading: "Hello! Selamat datang di PromoBot AI!",
    welcomeSubtext: "Mau membuat promosi produk yang menarik? Yuk, mulai di sini!",

    introCards: [
        {
            icon: "📚",
            title: "Buat Coption Promosi",
            description: "Buat caption jualan yang menarik.",
            prompt: "Buatkan caption promosi untuk produk saya."
        },
        {
            icon: "⚡",
            title: "Ide Nama Produk",
            description: "Temukan nama produk yang unik.",
            prompt: "Berikan ide nama produk yang kreatif."
        },
        {
            icon: "💡",
            title: "Promosi Media Sosial",
            description: "Buat konten promosi untuk media sosial.",
            prompt: "Buatkan ide konten promosi Instagram untuk produk saya."
        },
        {
            icon: "🛠️",
            title: "Promosi Media Sosial",
            description: "Buat konten promosi untuk media sosial.",
            prompt: "Buatkan ide konten promosi Instagram untuk produk saya."
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & ENDPOINT SETTINGS 
    // ------------------------------------------------------------------------
    // PROXY_URL forces the app to route requests through your Netlify backend
    authMode: "PROXY_URL", 
    // Replace this with your actual Netlify function URL once deployed
    proxyEndpoint: "https://your-site.netlify.app/.netlify/functions/gemini-proxy", 
    modelName: "gemini-3.5-flash-lite",

    // ------------------------------------------------------------------------
    // 3. ADVANCED GENERATION PARAMETERS
    // ------------------------------------------------------------------------
    generationConfig: {
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
    },

    // ------------------------------------------------------------------------
    // 4. CONVERSATION MEMORY & RAG SETTINGS
    // ------------------------------------------------------------------------
    contextWindowLimit: 10,

    ragConfig: {
        enabled: false,
        topKChunks: 2,
        minRelevanceScore: 0.12
    },

    // ------------------------------------------------------------------------
    // 5. SYSTEM PROMPT & GUARDRAILS
    // ------------------------------------------------------------------------
    systemPrompt: `You are PromoBot AI, an intelligent and friendly digital marketing assistant.

    Your main purpose is to help users create attractive promotional content for their products and businesses.
    
Follow these core rules at all times:
1. LANGUEAGE:
Always communicate in Indonesian unless the user requests another language.
2. CAPTION GENERATOR:
Create attractive, creative, and persuasive product captions based on the information provided buy the user.
3. SLOGAN GENERATOR:
Create short, memorable, and relevan promotional slogans.
4. PRODUCT NAME IDEAS:
Suggest creative and unique product on brand names.
5. SOCIAL MEDIA CONTENT:
Help users create promotional content for Instagram, Tiktok, WhatsApp, and other social media platforms.
6. STYLE:
Adapt your writing style to the user's preferences, such as funny, aesthetic, formal, casual, or professional.
7. ACCURACY:
Never invent product prices, discounts, certifications, or benefits that the user has not provided.
8. INTERACTION:
If product information is incomplete, ask the user for the missing details.
9. RESPONSE FORMAT:
Make your responses clear, organized, attractive, and easy to copy.
10. IDENTITY:
You are PromoBot AI. Focus on marketing, branding, and product promotion. `,

    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] to answer the user's question accurately. If the documents are not relevant to the question, rely on your general knowledge without mentioning the documents explicitly.`
};

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
