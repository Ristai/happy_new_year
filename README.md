# 🧧 Xuân Gắn Kết 2026 - Tết Bính Ngọ

Website chúc Tết tương tác với hiệu ứng sống động và lời chúc may mắn cho người thân.

## ✨ Tính năng

- 🎊 **Giao diện Glassmorphism** hiện đại với tông màu đỏ vàng truyền thống
- 🧧 **Hệ thống đăng nhập** bằng bao lì xì với animation mượt mà
- 🎆 **Hiệu ứng pháo hoa** bắn tự động khi đăng nhập thành công
- 🎯 **Lời chúc ngẫu nhiên** - Mỗi lần nhận lộc là một câu chúc khác nhau
- 🎵 **Nhạc nền Tết** (optional) - Có thể bật/tắt
- 📱 **Responsive** - Hoạt động tốt trên mọi thiết bị
- ⚡ **Animations mượt mà** với GSAP

## 🚀 Cách sử dụng

### Chạy local (Cách 1 - Đơn giản nhất)
1. Mở file `index.html` bằng trình duyệt
2. Thế thôi! 🎉

### Chạy với Live Server (Cách 2 - Khuyên dùng để test)
1. Cài extension "Live Server" trong VS Code
2. Click phải vào `index.html` → "Open with Live Server"
3. Tự động mở trình duyệt tại `http://localhost:5500`

## 🔐 Tài khoản mẫu

| Username | Password | Tên hiển thị |
|----------|----------|--------------|
| bacuong  | 123456   | Bá Cường     |
| meyen    | 123456   | Mẹ Yến       |
| anhhai   | 123456   | Anh Hải      |
| chihang  | 123456   | Chị Hằng     |
| emlinh   | 123456   | Em Linh      |

## 📝 Tùy chỉnh

### Thêm/Sửa tài khoản
Mở file `data.js` và chỉnh sửa:
```javascript
const accounts = {
    "username": "password",
    // Thêm tài khoản mới ở đây
};

const displayNames = {
    "username": "Tên Hiển Thị",
    // Thêm tên hiển thị tương ứng
};
```

### Thêm lời chúc mới
Trong file `data.js`, thêm vào mảng `wishes`:
```javascript
const wishes = [
    "Lời chúc mới của bạn ở đây! 🎊",
    // Thêm nhiều lời chúc khác...
];
```

### Thêm nhạc nền
1. Thêm file nhạc MP3 vào folder dự án (ví dụ: `tet-music.mp3`)
2. Mở `index.html`, uncomment dòng này:
```html
<source src="tet-music.mp3" type="audio/mpeg">
```
3. Thay `tet-music.mp3` bằng tên file của bạn

## 🌐 Deploy lên Internet

### Option 1: Vercel (Khuyên dùng - Miễn phí)
1. Tạo tài khoản tại [vercel.com](https://vercel.com)
2. Kéo thả toàn bộ folder vào Vercel
3. Nhận link ngay: `xuangket2026.vercel.app`
4. (Optional) Gắn domain riêng miễn phí

### Option 2: Netlify
1. Đăng ký tại [netlify.com](https://netlify.com)
2. Drag & drop folder vào Netlify
3. Link deploy: `xuangket2026.netlify.app`

### Option 3: GitHub Pages
1. Tạo repository mới trên GitHub
2. Upload tất cả files
3. Vào Settings → Pages → Chọn branch `main`
4. Link: `username.github.io/xuangket2026`

## 📂 Cấu trúc dự án

```
Gif_2026/
├── index.html      # Trang chính
├── style.css       # Styling
├── script.js       # Logic và animations
├── data.js         # Dữ liệu accounts & lời chúc
└── README.md       # File này
```

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc
- **CSS3** - Glassmorphism design
- **Vanilla JavaScript** - Logic
- **GSAP** - Smooth animations
- **Canvas Confetti** - Hiệu ứng pháo hoa
- **Google Fonts** - Typography

## 💡 Tips

- Để trải nghiệm tốt nhất, sử dụng trình duyệt Chrome/Edge/Safari
- Bật âm thanh để nghe nhạc nền (nếu có)
- Thử nhấn "Nhận Lộc Mới" nhiều lần để xem các lời chúc khác nhau!

## 📱 Responsive

Website tự động điều chỉnh cho:
- 💻 Desktop (1920px+)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (< 768px)

## 🎨 Màu sắc chủ đạo

- Đỏ: `#DC143C` (Red Primary)
- Vàng: `#FFD700` (Gold Primary)
- Nền: Gradient đỏ đậm - đen

## ❤️ Chúc mừng năm mới 2026!

Chúc bạn và gia đình một năm mới tràn đầy niềm vui, sức khỏe và thành công! 🎊🧧

---

Được tạo bởi **Droid** - Factory AI
"# happy_new_year" 
