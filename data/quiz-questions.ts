export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correct: string
  explanation: string
}

export interface QuizData {
  title: string
  description: string
  category: string
  difficulty: string
  timePerQuestion: number
  questions: QuizQuestion[]
}

// Emergency Quiz Data
const emergencyQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Bạn bị chuột rút ở bắp chân khi đang bơi, bạn nên:",
    options: [
      "A. Cố bơi tiếp đến bờ",
      "B. Nổi ngửa và xoa bóp vùng bị chuột rút",
      "C. Lặn sâu xuống nước",
      "D. Giữ nguyên tư thế",
    ],
    correct: "B",
    explanation:
      "Khi bị chuột rút, cần giữ bình tĩnh, nổi ngửa để dễ thở và xoa bóp nhẹ vùng bị chuột rút để giảm đau.",
  },
  {
    id: 2,
    question: "Cách thở phù hợp khi xử lý chuột rút:",
    options: ["A. Hít thở chậm, đều", "B. Nín thở", "C. Thở nhanh để lấy sức", "D. Thở bằng mũi liên tục"],
    correct: "A",
    explanation: "Thở chậm và đều giúp bạn giữ bình tĩnh, cung cấp đủ oxy cho cơ thể và xử lý tình huống hiệu quả hơn.",
  },
  {
    id: 3,
    question: "Động tác nào giúp giảm chuột rút ở bắp chân?",
    options: ["A. Co chân lại và giữ", "B. Duỗi chân và kéo nhẹ các ngón chân", "C. Đạp nước mạnh", "D. Nằm yên"],
    correct: "B",
    explanation:
      "Duỗi thẳng chân và kéo nhẹ ngón chân về phía mình giúp kéo giãn cơ bắp chân, làm giảm cơn chuột rút hiệu quả.",
  },
  {
    id: 4,
    question: "Nên làm gì sau khi đã xử lý xong cơn chuột rút?",
    options: ["A. Bơi nhẹ nhàng hoặc nổi", "B. Tiếp tục bơi nhanh", "C. Nằm dưới nước", "D. Bơi ra xa hơn"],
    correct: "A",
    explanation:
      "Sau khi xử lý chuột rút, nên bơi nhẹ nhàng về bờ hoặc nổi nghỉ ngơi để tránh gây căng thẳng cho cơ vừa bị chuột rút.",
  },
  {
    id: 5,
    question: "Chuột rút thường xảy ra khi:",
    options: [
      "A. Sau khi ăn no",
      "B. Khi trời lạnh",
      "C. Khi bơi quá lâu hoặc không khởi động",
      "D. Khi bơi vào buổi tối",
    ],
    correct: "C",
    explanation: "Chuột rút thường xảy ra khi cơ thể mệt mỏi do bơi quá lâu, không khởi động đầy đủ hoặc thiếu nước.",
  },
  {
    id: 6,
    question: "Cách phòng tránh chuột rút khi bơi là:",
    options: [
      "A. Ăn nhẹ trước khi bơi",
      "B. Khởi động kỹ và giữ cơ thể ấm",
      "C. Ngâm nước lạnh trước khi bơi",
      "D. Bơi ngay khi xuống nước",
    ],
    correct: "B",
    explanation: "Khởi động kỹ càng và giữ cơ thể ấm giúp cơ bắp sẵn sàng hoạt động, giảm nguy cơ chuột rút khi bơi.",
  },
  {
    id: 7,
    question: "Bạn cảm thấy dấu hiệu chuột rút, điều đầu tiên nên làm là:",
    options: [
      "A. Tăng tốc độ bơi",
      "B. Dừng bơi ngay lập tức",
      "C. Nổi lên mặt nước và thư giãn",
      "D. Lặn sâu xuống nước",
    ],
    correct: "C",
    explanation:
      "Khi cảm thấy dấu hiệu chuột rút, cần nổi lên mặt nước ngay và thư giãn để tránh cơn chuột rút trở nên nghiêm trọng hơn.",
  },
  {
    id: 8,
    question: "Một cách xử lý nhanh chuột rút nhẹ là:",
    options: [
      "A. Dừng bơi ngay và gọi giúp đỡ",
      "B. Duỗi cơ, xoa bóp và tiếp tục nổi",
      "C. Nắm chân kéo mạnh",
      "D. Nín thở",
    ],
    correct: "B",
    explanation: "Với chuột rút nhẹ, có thể duỗi cơ và xoa bóp nhẹ nhàng, sau đó tiếp tục nổi để theo dõi tình trạng.",
  },
  {
    id: 9,
    question: "Chuột rút ở tay nên xử lý thế nào?",
    options: ["A. Cố dùng tay để bơi", "B. Gập tay sát người", "C. Để tay bất động", "D. Duỗi tay và xoa bóp vùng đau"],
    correct: "D",
    explanation: "Khi bị chuột rút ở tay, cần duỗi tay ra và xoa bóp nhẹ vùng đau để giảm căng thẳng cơ bắp.",
  },
  {
    id: 10,
    question: "Khi bị chuột rút, bạn nên tránh:",
    options: ["A. Duỗi cơ liên tục", "B. Cố bơi nhanh hơn", "C. Hoảng loạn và vùng vẫy", "D. Giữ bình tĩnh và nổi lên"],
    correct: "C",
    explanation:
      "Tuyệt đối tránh hoảng loạn và vùng vẫy mạnh vì điều này sẽ làm cơn chuột rút trở nên nghiêm trọng hơn và tiêu tốn năng lượng.",
  },
  {
    id: 11,
    question: "Nếu bị chuột rút và không có ai xung quanh:",
    options: [
      "A. Tự nổi, xoa bóp nhẹ và từ từ vào bờ",
      "B. Gọi người xuống cứu",
      "C. Cố bơi vào bờ nhanh",
      "D. Chờ người khác đến giúp",
    ],
    correct: "A",
    explanation: "Khi một mình, cần tự xử lý bằng cách nổi, xoa bóp nhẹ và từ từ di chuyển về bờ một cách an toàn.",
  },
  {
    id: 12,
    question: "Tư thế an toàn khi bị chuột rút là:",
    options: [
      "A. Nằm sấp và duỗi chân",
      "B. Nổi ngửa để dễ thở và giữ thăng bằng",
      "C. Co chân liên tục",
      "D. Đạp nước mạnh",
    ],
    correct: "B",
    explanation: "Tư thế nổi ngửa giúp dễ thở, giữ thăng bằng và có thể xử lý chuột rút một cách hiệu quả nhất.",
  },
  {
    id: 13,
    question: "Bơi khi quá mệt dễ gây:",
    options: ["A. Cảm giác buồn ngủ", "B. Sụt cân", "C. Dễ bị chuột rút và mất kiểm soát", "D. Nhiệt độ cơ thể tăng"],
    correct: "C",
    explanation:
      "Khi cơ thể quá mệt, cơ bắp dễ bị căng thẳng và chuột rút, đồng thời khả năng kiểm soát cơ thể cũng giảm sút.",
  },
  {
    id: 14,
    question: "Làm gì sau khi bị chuột rút lần đầu?",
    options: [
      "A. Không bơi nữa",
      "B. Tránh bơi lúc lạnh",
      "C. Không ăn trước khi bơi",
      "D. Ghi nhớ nguyên nhân và học cách phòng tránh",
    ],
    correct: "D",
    explanation:
      "Sau lần đầu bị chuột rút, cần phân tích nguyên nhân và học cách phòng tránh để tránh tái diễn trong tương lai.",
  },
  {
    id: 15,
    question: "Tình huống nào có nguy cơ chuột rút cao nhất?",
    options: [
      "A. Bơi lúc trời lạnh, không khởi động",
      "B. Bơi theo nhóm",
      "C. Bơi khi có người giám sát",
      "D. Bơi trong hồ bơi nông",
    ],
    correct: "A",
    explanation:
      "Bơi trong thời tiết lạnh mà không khởi động kỹ là tình huống có nguy cơ chuột rút cao nhất do cơ bắp chưa sẵn sàng.",
  },
]

// Rescue Quiz Data
const rescueQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Dấu hiệu thường gặp của người sắp đuối nước là:",
    options: ["A. Im lặng, vùng vẫy yếu", "B. Hét lớn cầu cứu", "C. Bơi mạnh về phía người khác", "D. Nằm im"],
    correct: "A",
    explanation: "Người sắp đuối nước thường im lặng, vùng vẫy yếu ớt vì khó thở, không thể gọi to như trong phim ảnh.",
  },
  {
    id: 2,
    question: "Khi thấy người đuối nước, bạn nên làm gì đầu tiên?",
    options: ["A. Gọi người giúp đỡ ngay", "B. Nhảy xuống cứu", "C. Bơi ra kéo họ", "D. Bỏ qua và tiếp tục bơi"],
    correct: "A",
    explanation: "Ưu tiên gọi cấp cứu và người giúp đỡ trước khi hành động để đảm bảo có hỗ trợ khi cần thiết.",
  },
  {
    id: 3,
    question: "Nếu không biết bơi tốt, cách tốt nhất để giúp người đuối nước là:",
    options: [
      "A. Bơi đến gần và kéo",
      "B. Ném phao hoặc vật nổi",
      "C. Hô hấp nhân tạo dưới nước",
      "D. Chạy đi tìm giúp đỡ",
    ],
    correct: "B",
    explanation: "Nếu không biết bơi tốt, hãy ném phao hoặc vật nổi để hỗ trợ thay vì mạo hiểm xuống nước.",
  },
  {
    id: 4,
    question: "Khi tiếp cận người đuối nước, bạn nên:",
    options: ["A. Bơi đối mặt họ", "B. Đến từ phía sau, giữ khoảng cách", "C. Ôm họ từ phía trước", "D. Kéo tay họ"],
    correct: "B",
    explanation: "Tiếp cận từ phía sau và giữ khoảng cách an toàn để tránh bị người đuối nước vùng vẫy và kéo chìm.",
  },
  {
    id: 5,
    question: "Cứu người đuối nước cần tránh điều gì nhất?",
    options: ["A. Bơi quá nhanh", "B. Gọi quá to", "C. Tiếp cận không an toàn", "D. Không gọi cấp cứu"],
    correct: "C",
    explanation: "Tiếp cận không an toàn có thể khiến cả người cứu và người bị nạn đều gặp nguy hiểm.",
  },
  {
    id: 6,
    question: "Nếu có phao hoặc cây dài, bạn nên:",
    options: ["A. Đưa cho người bị nạn", "B. Giữ lại để dùng sau", "C. Bỏ mặc", "D. Ném xuống nước không kiểm soát"],
    correct: "A",
    explanation: "Sử dụng phao hoặc cây dài để đưa cho người bị nạn là cách an toàn nhất, tránh tiếp xúc trực tiếp.",
  },
  {
    id: 7,
    question: "Sau khi đưa nạn nhân vào bờ, cần làm gì?",
    options: ["A. Cho họ nghỉ", "B. Cung cấp nước", "C. Để họ tự phục hồi", "D. Gọi cấp cứu và sơ cứu"],
    correct: "D",
    explanation: "Sau khi đưa nạn nhân vào bờ, cần gọi cấp cứu ngay và thực hiện sơ cứu ban đầu nếu cần thiết.",
  },
  {
    id: 8,
    question: "Nếu người đuối nước bất tỉnh:",
    options: ["A. Đưa lên bờ và sơ cứu ngay", "B. Vỗ vai gọi họ dậy", "C. Đợi người thân tới", "D. Cho họ nghỉ ngơi"],
    correct: "A",
    explanation: "Người bất tỉnh cần được đưa lên bờ ngay và thực hiện sơ cứu, có thể cần hô hấp nhân tạo.",
  },
  {
    id: 9,
    question: "Đâu là kỹ thuật an toàn khi tiếp cận người đuối nước?",
    options: [
      "A. Kéo nhanh vào bờ",
      "B. Dùng tay kéo từ trước",
      "C. Tiếp cận từ sau và giữ an toàn",
      "D. Đẩy bằng chân",
    ],
    correct: "C",
    explanation: "Tiếp cận từ phía sau và duy trì khoảng cách an toàn là kỹ thuật chuẩn trong cứu hộ đuối nước.",
  },
  {
    id: 10,
    question: "Thời gian vàng để cứu người đuối nước là:",
    options: ["A. 10 phút", "B. 3–4 phút đầu", "C. 15 phút", "D. 20 phút"],
    correct: "B",
    explanation: "3-4 phút đầu là thời gian vàng, sau đó não bộ có thể bị tổn thương do thiếu oxy.",
  },
  {
    id: 11,
    question: "Trong nhóm, ai nên là người cứu?",
    options: ["A. Người yếu nhất", "B. Người to khỏe", "C. Người được huấn luyện cứu hộ", "D. Người gần nhất"],
    correct: "C",
    explanation: "Người được huấn luyện cứu hộ có kỹ năng và kiến thức cần thiết để thực hiện cứu hộ an toàn.",
  },
  {
    id: 12,
    question: "Khi cứu hộ, giữ khoảng cách để:",
    options: [
      "A. Để người đuối nước tự bơi",
      "B. Tiếp cận từ phía trước",
      "C. Giữ khoảng cách để bảo vệ bản thân",
      "D. Hô hấp nhân tạo",
    ],
    correct: "C",
    explanation:
      "Giữ khoảng cách an toàn để tránh bị người đuối nước vùng vẫy và kéo chìm trong tình trạng hoảng loạn.",
  },
  {
    id: 13,
    question: "Đưa người vào bờ bằng cách nào an toàn nhất?",
    options: ["A. Kéo từ tay", "B. Dùng phao và kéo dần vào bờ", "C. Bơi nhanh kéo theo", "D. Ôm vào vai"],
    correct: "B",
    explanation:
      "Sử dụng phao và kéo dần vào bờ là cách an toàn nhất, tránh tiếp xúc trực tiếp và kiểm soát được tốc độ.",
  },
  {
    id: 14,
    question: "Thổi ngạt cần thực hiện khi nào?",
    options: ["A. Ngay khi ra khỏi nước", "B. Khi họ tỉnh", "C. Sau 10 phút", "D. Khi bác sĩ có mặt"],
    correct: "A",
    explanation: "Hô hấp nhân tạo cần thực hiện ngay khi đưa nạn nhân ra khỏi nước nếu họ không thở.",
  },
  {
    id: 15,
    question: "Phản xạ thường thấy của người đuối nước là:",
    options: ["A. Hét thật to", "B. Vẫy tay cầu cứu", "C. Không phản ứng mạnh", "D. Cười lớn"],
    correct: "B",
    explanation: "Người đuối nước thường vẫy tay cầu cứu trong tình trạng hoảng loạn, cố gắng giữ đầu trên mặt nước.",
  },
  {
    id: 16,
    question: "Cách bạn hỗ trợ khi không thể xuống nước là:",
    options: ["A. Chụp ảnh", "B. Gọi người tới xem", "C. Ném phao hoặc vật nổi", "D. Chờ họ tự lên"],
    correct: "C",
    explanation: "Khi không thể xuống nước, hãy ném phao, cây dài hoặc vật nổi để hỗ trợ người đuối nước.",
  },
  {
    id: 17,
    question: "Khi nào nên gọi cấp cứu?",
    options: ["A. Sau 10 phút", "B. Khi người thân đến", "C. Khi họ ngất", "D. Ngay khi phát hiện nguy hiểm"],
    correct: "D",
    explanation: "Cần gọi cấp cứu ngay khi phát hiện tình huống nguy hiểm để có sự hỗ trợ chuyên nghiệp kịp thời.",
  },
  {
    id: 18,
    question: "Để cứu người mà không gây nguy hiểm cho bản thân, bạn nên:",
    options: [
      "A. Cứu bất chấp nguy hiểm",
      "B. Nhảy xuống nước ngay",
      "C. Đảm bảo an toàn bản thân trước",
      "D. Chạy đi",
    ],
    correct: "C",
    explanation: "Luôn đảm bảo an toàn bản thân trước khi cứu hộ để tránh tạo thêm nạn nhân.",
  },
  {
    id: 19,
    question: "Cách tốt nhất để học cứu hộ là:",
    options: ["A. Đọc trên mạng", "B. Tham gia lớp huấn luyện cứu hộ", "C. Xem video", "D. Tự học"],
    correct: "B",
    explanation:
      "Tham gia lớp huấn luyện cứu hộ chuyên nghiệp để học kỹ thuật đúng và thực hành trong môi trường an toàn.",
  },
  {
    id: 20,
    question: "Khi thấy người đuối nước ở xa bờ:",
    options: ["A. Ném phao và gọi cứu hộ", "B. Lao xuống nước", "C. Kêu người khác bơi ra", "D. Quay lưng đi"],
    correct: "A",
    explanation: "Với người đuối nước ở xa bờ, hãy ném phao để hỗ trợ tạm thời và gọi cứu hộ chuyên nghiệp.",
  },
]

// Safety Quiz Data
const safetyQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Nên làm gì trước khi bơi ở nơi không có nhân viên cứu hộ?",
    options: [
      "A. Kiểm tra độ sâu và dòng chảy",
      "B. Nhảy ngay xuống nước",
      "C. Chơi trò chơi dưới nước",
      "D. Không cần chuẩn bị",
    ],
    correct: "A",
    explanation: "Cần kiểm tra kỹ độ sâu, dòng chảy và các yếu tố nguy hiểm trước khi bơi ở nơi không có giám sát.",
  },
  {
    id: 2,
    question: "Vật dụng nên mang theo khi bơi ở nơi không giám sát?",
    options: ["A. Phao cứu sinh", "B. Kính râm", "C. Bóng đá", "D. Khăn tắm"],
    correct: "A",
    explanation: "Phao cứu sinh là vật dụng an toàn cần thiết nhất khi bơi ở nơi không có sự giám sát.",
  },
  {
    id: 3,
    question: "Điều quan trọng nhất khi bơi ở sông, hồ là:",
    options: [
      "A. Bơi càng xa bờ càng tốt",
      "B. Bơi khi trời tối",
      "C. Quan sát dòng chảy và mực nước",
      "D. Không cần chuẩn bị",
    ],
    correct: "C",
    explanation: "Quan sát dòng chảy và mực nước giúp đánh giá mức độ an toàn và tránh các khu vực nguy hiểm.",
  },
  {
    id: 4,
    question: "Trong trường hợp không có ai xung quanh, bạn gặp sự cố, bạn nên:",
    options: [
      "A. Giữ bình tĩnh và nổi trên mặt nước",
      "B. Lặn xuống tìm đường",
      "C. Gọi điện thoại",
      "D. Cố gắng bơi nhanh",
    ],
    correct: "A",
    explanation: "Giữ bình tĩnh và nổi trên mặt nước để bảo toàn sức lực và tìm cách xử lý tình huống an toàn.",
  },
  {
    id: 5,
    question: "Vì sao không nên bơi một mình?",
    options: ["A. Để tự do", "B. Không ai hỗ trợ khi gặp sự cố", "C. Tự tin thể hiện", "D. Tiết kiệm thời gian"],
    correct: "B",
    explanation:
      "Bơi một mình rất nguy hiểm vì không có ai hỗ trợ khi gặp sự cố như chuột rút, kiệt sức hay đuối nước.",
  },
  {
    id: 6,
    question: "Đâu là dấu hiệu nguy hiểm ở sông/hồ?",
    options: ["A. Sóng yên", "B. Mặt nước phẳng", "C. Dòng nước chảy xiết, đá ngầm", "D. Cá bơi nhiều"],
    correct: "C",
    explanation: "Dòng nước chảy xiết và đá ngầm là những dấu hiệu nguy hiểm cần tránh khi bơi ở sông, hồ.",
  },
  {
    id: 7,
    question: "Nếu nước đục hoặc không rõ độ sâu:",
    options: ["A. Không nên nhảy xuống", "B. Nhảy luôn nếu thích", "C. Lội bộ xuống", "D. Đứng nhìn"],
    correct: "A",
    explanation: "Không nên nhảy xuống nước đục hoặc không rõ độ sâu vì có thể có chướng ngại vật hoặc nước quá sâu.",
  },
  {
    id: 8,
    question: "Khi bơi nhóm, điều cần thiết là:",
    options: ["A. Cạnh tranh bơi nhanh", "B. Bơi xa nhau", "C. Không liên lạc", "D. Giữ khoảng cách và quan sát nhau"],
    correct: "D",
    explanation: "Khi bơi nhóm, cần giữ khoảng cách hợp lý và luôn quan sát nhau để hỗ trợ khi cần thiết.",
  },
  {
    id: 9,
    question: "Khi thời tiết thay đổi đột ngột, bạn nên:",
    options: ["A. Tiếp tục bơi", "B. Lên bờ và dừng bơi", "C. Chờ hết giông", "D. Bơi sang chỗ khác"],
    correct: "B",
    explanation: "Khi thời tiết thay đổi đột ngột, cần lên bờ ngay để tránh nguy hiểm từ sét, gió lớn hoặc sóng.",
  },
  {
    id: 10,
    question: "Có nên nhảy từ trên cao xuống nước không rõ độ sâu?",
    options: ["A. Có", "B. Tùy cảm giác", "C. Không nên vì nguy hiểm", "D. Khi có người cổ vũ"],
    correct: "C",
    explanation:
      "Tuyệt đối không nên nhảy từ trên cao xuống nước không rõ độ sâu vì có thể gây chấn thương nghiêm trọng.",
  },
  {
    id: 11,
    question: "Thiết bị nào không thể thay thế phao cứu sinh?",
    options: ["A. Kính bơi", "B. Kính râm", "C. Áo phao", "D. Phao cứu sinh"],
    correct: "D",
    explanation: "Không có thiết bị nào có thể thay thế hoàn toàn phao cứu sinh về mặt an toàn và hiệu quả.",
  },
  {
    id: 12,
    question: "Tại sao cần khởi động trước khi bơi?",
    options: ["A. Cho đỡ lạnh", "B. Tránh chuột rút và chuẩn bị cơ thể", "C. Tăng sức mạnh", "D. Không cần thiết"],
    correct: "B",
    explanation: "Khởi động giúp chuẩn bị cơ thể, tăng nhiệt độ cơ bắp và giảm nguy cơ chuột rút khi bơi.",
  },
]

// Export quiz data
export const quizData: Record<string, QuizData> = {
  emergency: {
    title: "Xử lý chuột rút khi bơi",
    description: "Học cách xử lý tình huống khẩn cấp khi bị chuột rút trong khi bơi",
    category: "Khẩn cấp",
    difficulty: "Cơ bản",
    timePerQuestion: 10,
    questions: emergencyQuestions,
  },
  rescue: {
    title: "Phát hiện người đuối nước",
    description: "Kỹ năng nhận biết và cứu hộ người đuối nước một cách an toàn",
    category: "Cứu hộ",
    difficulty: "Trung bình",
    timePerQuestion: 15,
    questions: rescueQuestions,
  },
  safety: {
    title: "Bơi ở nơi không giám sát",
    description: "Các biện pháp an toàn khi bơi ở những nơi không có nhân viên cứu hộ",
    category: "An toàn",
    difficulty: "Cơ bản",
    timePerQuestion: 12,
    questions: safetyQuestions,
  },
}

// Helper function to get quiz by type
export const getQuizData = (type: string): QuizData | null => {
  return quizData[type] || null
}

// Helper function to get random questions from a quiz
export const getRandomQuestions = (type: string, count: number): QuizQuestion[] => {
  const quiz = getQuizData(type)
  if (!quiz) return []

  const shuffled = [...quiz.questions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.min(count, quiz.questions.length))
}
