// Danh sách tài khoản (username: password)
const accounts = {
    "kimngan": "kimngan123",
    "balong": "xuanlong1970",
    "plasma": "plesto2004",
    "chihang": "123456",
    "emlinh": "123456"
};

// Bộ sưu tập lời chúc Tết 2026 - Năm Bính Ngọ (Lời chúc dài và ý nghĩa)
const wishes = [
    "🐴 Năm Bính Ngọ 2026 đã đến! Chúc bạn như ngựa phi nước đại, vượt qua mọi chông gai, chinh phục mọi đỉnh cao. Sự nghiệp thăng tiến vượt bậc, tài lộc đong đầy, gia đình hạnh phúc viên mãn. Mỗi ngày đều là một ngày tươi đẹp, mỗi bước đi đều dẫn đến thành công! ✨",
    
    "🌸 Xuân về trên khắp nẻo đường, mang theo muôn vàn điều may mắn đến với bạn và gia đình. Chúc năm mới sức khỏe dồi dào như suối nguồn bất tận, công việc thuận buồm xuôi gió, tiền tài như nước chảy về nguồn. Hãy để năm 2026 là năm của những ước mơ thành hiện thực! 🎊",
    
    "💰 Tân Xuân Bính Ngọ - Chúc bạn tiền vào như nước sông Hồng mùa lũ, lộc đến như mưa xuân tưới mát, may mắn gấp trăm lần năm cũ! Gia đình sum vầy đầm ấm, con cháu hiếu thảo, vợ chồng hòa thuận. Mọi điều tốt đẹp nhất đang chờ đón bạn phía trước! 🧧",
    
    "🏆 Mã Đáo Thành Công! Năm Ngựa đến, chúc bạn phi như thiên lý mã, đi đến đâu thành công đến đó. Sự nghiệp lên như diều gặp gió, tình duyên viên mãn trọn vẹn, sức khỏe tràn đầy năng lượng. Năm 2026 sẽ là năm bứt phá ngoạn mục của bạn! 🐴",
    
    "🎆 Pháo hoa rực rỡ đón xuân sang, chúc bạn năm mới vạn sự hanh thông! Tiền bạc đầy két, vàng đầy hũ, hạnh phúc ngập tràn từng góc nhà. Công danh sự nghiệp thăng hoa rực rỡ, gia đạo ấm êm, con cái thành đạt. Xuân Bính Ngọ mang đến cho bạn tất cả những gì tốt đẹp nhất! 🌟",
    
    "❤️ Năm mới đến, xin gửi đến bạn ngàn lời chúc tốt đẹp nhất! Chúc bạn luôn khỏe mạnh để tận hưởng cuộc sống, luôn vui vẻ để lan tỏa niềm vui, luôn thành công để tự hào về bản thân. Gia đình là nơi bình yên nhất, và bạn xứng đáng có được tất cả điều đó! 🏡",
    
    "🌈 Xuân Bính Ngọ 2026 - Chúc bạn một năm tràn ngập sắc màu của hạnh phúc! Sức khỏe như rồng bay phượng múa, tài lộc như suối nguồn tuôn chảy, tình yêu như hoa xuân nở rộ. Mỗi ngày thức dậy đều là một ngày đáng sống, mỗi giấc mơ đều có thể thành hiện thực! 🎯",
    
    "💎 Năm Ngựa vàng đến nhà, mang theo phú quý vinh hoa! Chúc bạn năm mới làm ăn phát đạt, buôn may bán đắt, tiền vào như nước. Gia đình hòa thuận, con cháu đề huề, vợ chồng ân ái. Sức khỏe dồi dào để tận hưởng mọi thành quả của cuộc sống! 🐴💰",
    
    "🎁 Tết đến xuân về, vạn vật đổi mới! Chúc bạn năm 2026 gặp nhiều quý nhân phù trợ, công việc thuận lợi hanh thông, tài chính dư dả sung túc. Gia đình là điểm tựa vững chắc, bạn bè là nguồn động viên to lớn. Hãy để năm mới này là khởi đầu cho những điều tuyệt vời! ✨",
    
    "🏮 Đèn lồng đỏ thắp sáng đêm xuân, pháo hoa rực rỡ chào năm mới! Chúc bạn và gia đình năm Bính Ngọ 2026 an khang thịnh vượng, phúc lộc đầy nhà, con cháu sum vầy. Mọi ước nguyện đều thành hiện thực, mọi nỗ lực đều được đền đáp xứng đáng! 🎊",
    
    "⭐ Năm mới - Hy vọng mới - Thành công mới! Chúc bạn năm 2026 bước đi trên con đường rải đầy hoa hồng, mỗi quyết định đều sáng suốt, mỗi cơ hội đều được nắm bắt. Sức khỏe là vàng, hạnh phúc là kim cương, và bạn xứng đáng sở hữu cả hai! 💫",
    
    "🐴 Ngựa vàng phi nước đại, mang theo vận may đến từng nhà! Chúc bạn năm Bính Ngọ công thành danh toại, gia đình hạnh phúc, con cái hiếu thảo. Tiền bạc dư dả để lo cho người thân, sức khỏe dồi dào để tận hưởng cuộc sống. Xuân này hơn hẳn xuân qua! 🌸",
    
    "🎉 Giao thừa đến, năm mới sang! Chúc bạn 365 ngày tràn đầy niềm vui, 12 tháng luôn gặp may mắn, 52 tuần đều có tin vui. Công việc suôn sẻ, tình yêu ngọt ngào, gia đình ấm áp. Năm 2026 sẽ là năm đáng nhớ nhất trong cuộc đời bạn! 🥳",
    
    "💕 Xuân về mang theo hương sắc mới, chúc bạn năm mới tình yêu viên mãn, hạnh phúc trọn vẹn! Dù bạn đang yêu hay đang tìm kiếm tình yêu, năm Bính Ngọ sẽ mang đến cho bạn những điều ngọt ngào nhất. Gia đình là nơi trở về, tình yêu là nguồn sức mạnh! ❤️",
    
    "🌟 Năm Ngựa đến - Vận may đến - Tài lộc đến! Chúc bạn năm 2026 mọi việc đều thuận lợi như ý, tiền bạc không thiếu, sức khỏe không lo. Gia đình hòa thuận, bạn bè đông vui, cuộc sống viên mãn. Hãy mở rộng vòng tay đón nhận những điều tốt đẹp đang đến! 🎊"
];

// Tên hiển thị tương ứng với username
const displayNames = {
    "kimngan": "Mẹ Ngân",
    "balong": "Ba Long",
    "anhhai": "Anh Hải",
    "chihang": "Chị Hằng",
    "emlinh": "Em Linh"
};
