import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Chính sách Quyền riêng tư - Distenda</title>
      </Helmet>

      <div className="flex flex-col w-full min-h-screen">
        {/* Nội dung chính */}
        <main className="flex-grow">
          <div className="max-w-full flex flex-col items-center w-full px-5 py-5 sm:px-8 md:px-12 pb-20 bg-opacity-5 backdrop-blur-xl mx-auto shadow-2xl">
            {/* Tiêu đề chính */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Chính sách Quyền riêng tư
              </h2>
              <p className="mt-5 text-white/60 text-lg sm:text-xl md:text-2xl font-light">
                Cập nhật lần cuối: 23 tháng 12 năm 2025
              </p>
            </div>

            {/* Nội dung chính */}
            <div className="w-full max-w-[70%] text-white/90 space-y-10 md:space-y-12 text-lg leading-relaxed">
              <p>
                Distenda (sau đây gọi là "chúng tôi", "Distenda" hoặc "website") cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn khi bạn sử dụng dịch vụ học tập trực tuyến tại{" "}
                <a
                  href="https://distenda.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                >
                  https://distenda.vercel.app/
                </a>{" "}
                (sau đây gọi là "Dịch vụ").
              </p>

              <p>
                Chính sách này giải thích cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ thông tin cá nhân của bạn.
              </p>

              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-10 border-b border-white/20 pb-4">
                  1. Thông tin chúng tôi thu thập
                </h2>

                <div>
                  <h3 className="text-2xl font-semibold text-white/90 mb-4">a. Thông tin bạn cung cấp trực tiếp</h3>
                  <ul className="list-disc pl-6 space-y-3 text-white/80">
                    <li>Họ tên</li>
                    <li>Địa chỉ email</li>
                    <li>Ảnh đại diện (nếu đăng nhập qua Facebook/Google)</li>
                    <li>Thông tin khóa học đăng ký, tiến độ học, điểm số, chứng chỉ</li>
                    <li>Bình luận, đánh giá, câu hỏi trong bài học</li>
                    <li>Thông tin thanh toán (nếu mua khóa học – xử lý qua cổng bên thứ ba)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white/90 mb-4">b. Thông tin thu thập tự động</h3>
                  <ul className="list-disc pl-6 space-y-3 text-white/80">
                    <li>Địa chỉ IP, loại trình duyệt, thiết bị, hệ điều hành</li>
                    <li>Thời gian truy cập, trang đã xem, hành vi sử dụng</li>
                    <li>Cookie và công nghệ theo dõi</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-10 border-b border-white/20 pb-4">
                  2. Mục đích sử dụng thông tin
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-white/80">
                  <li>Tạo và quản lý tài khoản học tập</li>
                  <li>Cung cấp, duy trì, cải thiện chất lượng khóa học</li>
                  <li>Gửi thông báo tiến độ, cập nhật, khuyến mãi (nếu bạn đồng ý)</li>
                  <li>Xử lý thanh toán và cấp chứng chỉ</li>
                  <li>Phát hiện, ngăn chặn gian lận, lạm dụng</li>
                  <li>Phân tích thống kê cải thiện trải nghiệm</li>
                  <li>Tuân thủ pháp luật</li>
                </ul>
              </div>

              {/* Các phần còn lại tương tự, giữ cấu trúc ngắn gọn, dễ đọc */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-10 border-b border-white/20 pb-4">
                  3. Chia sẻ thông tin
                </h2>
                <p className="text-white/80">
                  Chúng tôi <strong>không bán</strong> thông tin cá nhân. Chỉ chia sẻ khi:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-white/80">
                  <li>Với nhà cung cấp dịch vụ đáng tin cậy (thanh toán, email, hosting, CDN…)</li>
                  <li>Khi có yêu cầu pháp lý từ cơ quan nhà nước</li>
                  <li>Để bảo vệ quyền, an toàn của Distenda và người dùng</li>
                </ul>
              </div>

              {/* Các phần khác tương tự, bạn có thể copy thêm */}
              {/* ... */}

              <div className="mt-16 text-center text-white/50 italic text-xl">
                Bằng cách tiếp tục sử dụng dịch vụ, bạn đồng ý với Chính sách quyền riêng tư này.
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;