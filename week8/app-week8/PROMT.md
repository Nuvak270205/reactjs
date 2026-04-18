Bạn là một Senior Frontend Engineer chuyên gia về React.js. Hãy giúp tôi code một giao diện web dựa trên hình ảnh được cung cấp (hoặc mô tả dưới đây) với các yêu cầu kỹ thuật khắt khe về tính mở rộng (scalable) và Clean Code.

1. Tech Stack Bắt Buộc:

Framework: React.js (Functional Components, Hooks).
Styling: Tailwind CSS.
Routing: React Router v7 (sử dụng các API mới nhất nếu có, hoặc cấu trúc routing chuẩn mực).
State Management: Recoil (Quản lý trạng thái đóng/mở của Modal và các step của onboarding).
2. Chiết xuất Constraints Layout (Design System từ hình ảnh): Hãy thiết lập cấu hình Tailwind (trong file tailwind.config.js hoặc sử dụng arbitrary values hợp lý) dựa trên các thông số sau:

Colors:
Primary (Hồng Chefify): text-[#F04E8A] / bg-[#F04E8A] (Dùng cho Title, Pagination dot active, Button Next, text Skip).
Background Overlay: bg-black/40 hoặc bg-gray-900/50 kèm backdrop-blur nhẹ.
Text Secondary: text-gray-500 (Subtitle, inactive dots).
Background Modal: bg-white.
Typography:
Title Modal ("Discover Chefify"): text-2xl hoặc text-3xl, font-bold.
Subtitle: text-sm, font-medium, text-center.
Spacing & Sizing:
Modal Container: max-w-2xl hoặc w-[600px], rounded-2xl, p-6 hoặc p-8.
Nút Close (X): Góc trên cùng bên phải (absolute top-4 right-4), size w-6 h-6, màu text-gray-500 hover thành text-gray-800.
Nút Next (Primary Button): w-full, py-3, rounded-lg hoặc rounded-xl, font-semibold.
Nút Skip: mt-4, text-sm, font-semibold.
Pagination Dots: w-2.5 h-2.5, rounded-full, gap giữa các dot là gap-2.
3. Cấu trúc Component (Scalable Architecture): Hãy chia nhỏ component thật rõ ràng, dễ bảo trì. Gợi ý cấu trúc:

/store:
onboardingState.js: Chứa Recoil atom quản lý isOpen (boolean) và currentStep (number) của Onboarding.
/components:
/layout/Navbar.jsx: Header có Logo (Chefify), Search bar, Navigation Links (What to cook, Recipes...), nút Login, Subscribe.
/modals/OnboardingModal.jsx: Component chính chứa Modal.
/ui/Button.jsx: Reusable button component hỗ trợ variant (primary, outline, ghost).
/pages:
HomePage.jsx: Trang chủ chứa Navbar và background mờ, gọi <OnboardingModal />.
4. Yêu cầu chi tiết về UI/UX (Onboarding Modal):

Layout Modal: Căn giữa màn hình bằng flexbox hoặc grid (fixed inset-0 flex items-center justify-center).
Nội dung Modal: - Bao gồm: Title -> Subtitle -> Image (dùng placeholder image có tỷ lệ aspect-[4/3] hoặc h-64 rounded) -> Pagination (3 chấm tròn, chấm đầu tiên màu hồng, 2 chấm sau màu xám nhạt) -> Nút "Next" -> Nút "Skip".
Interaction:
Bấm vào nút "X" hoặc "Skip" -> Cập nhật Recoil state để đóng modal.
Bấm vào "Next" -> Chuyển sang step tiếp theo (cập nhật recoil state) hoặc đóng modal nếu là step cuối.
Click ra ngoài vùng background overlay (outside click) -> Đóng modal.
5. Output Yêu cầu: Vui lòng cung cấp code hoàn chỉnh cho các file:

App.jsx (Setup RecoilRoot, Router v7)
store/onboardingState.js
components/modals/OnboardingModal.jsx (Chi tiết nhất, dùng Tailwind CSS chuẩn xác theo constraints)
pages/HomePage.jsx
Hãy viết code thật Clean, thêm comment ở những chỗ logic quan trọng.