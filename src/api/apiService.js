import apiData from './data';

const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const apiService = {
    // Tüm Kahve Demleme Yöntemlerini Getir
    async getAllCoffees() {
        await simulateDelay(300); // API gecikmesi simülasyonu
        return apiData.coffees;
    },

    // Belirli bir Kahve Demleme Yöntemini ID'ye Göre Getir
    async getCoffeeById(id) {
        await simulateDelay(300);
        return apiData.coffees.find(coffee => coffee.id === parseInt(id));
    },

    // Tüm Espresso Çekirdeklerini Getir
    async getAllEspressoBeans() {
        await simulateDelay(300);
        return apiData.espressoBeans;
    },

    // Belirli bir Espresso Çekirdeğini ID'ye Göre Getir
    async getEspressoBeanById(id) {
        await simulateDelay(300);
        return apiData.espressoBeans.find(bean => bean.id === parseInt(id));
    },

    // Tüm Blog Yazılarını Getir
    async getAllBlogPosts() {
        await simulateDelay(300);
        return apiData.blogPosts;
    },

    // Belirli bir Blog Yazısını ID'ye Göre Getir
    async getBlogPostById(id) {
        await simulateDelay(300);
        return apiData.blogPosts.find(post => post.id === id);
    },

    // Blog Yazısı Ekle (Sadece Mock - Gerçek API'de POST isteği olurdu)
    async addBlogPost(newPost) {
        await simulateDelay(300);
        const newId = `blog-${apiData.blogPosts.length + 1}`;
        const postToAdd = { ...newPost, id: newId, date: new Date().toISOString().split('T')[0] };
        apiData.blogPosts.push(postToAdd);
        return postToAdd;
    },

    // Blog Yazısı Güncelle (Sadece Mock - Gerçek API'de PUT isteği olurdu)
    async updateBlogPost(id, updatedFields) {
        await simulateDelay(300);
        const index = apiData.blogPosts.findIndex(post => post.id === id);
        if (index > -1) {
            apiData.blogPosts[index] = { ...apiData.blogPosts[index], ...updatedFields };
            return apiData.blogPosts[index];
        }
        return null;
    },

    // Blog Yazısı Sil (Sadece Mock - Gerçek API'de DELETE isteği olurdu)
    async deleteBlogPost(id) {
        await simulateDelay(300);
        const initialLength = apiData.blogPosts.length;
        apiData.blogPosts = apiData.blogPosts.filter(post => post.id !== id);
        return apiData.blogPosts.length < initialLength; // Silindi mi?
    },

    // Tüm Kullanıcıları Getir (Yönetici Paneli vb. için)
    async getAllUsers() {
        await simulateDelay(300);
        // Hassas bilgileri filtreleyerek döndürebilirsiniz
        return apiData.users.map(({ password, ...rest }) => rest);
    },

    // Kullanıcı Girişi Simülasyonu (Çok Basit - Gerçek projede JWT/Auth mantığı olurdu)
    async loginUser(username, password) {
        await simulateDelay(500);
        const user = apiData.users.find(u => u.username === username);
        if (user) {
            // Gerçek projede şifre karşılaştırması ve token üretimi olurdu
            // Şimdilik sadece username kontrolü
            return { success: true, user: { id: user.id, username: user.username, role: user.role } };
        }
        return { success: false, message: "Kullanıcı adı veya şifre yanlış." };
    },

    // Ek Verileri Getir (İpuçları, Kurslar, Etkinlikler)
    async getAdditionalData() {
        await simulateDelay(300);
        return apiData.additional;
    }
};

export default apiService;