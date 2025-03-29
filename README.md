ADMIN Quản lý tình nguyện viên
  http://localhost:3001/users/
  Get: "/" lấy danh sách user đã phân trang
  Post: "/detail"  lấy chi tiết user
  Put:"/"cập nhật user
  Delete:"/:id" xóa user

ADMIN Quản lý tổ chức
  http://localhost:3001/organizations/
  Post: "/request" user gửi yêu cầu duyệt
  Put: "/approve/:id" admin chấp nhận yêu cầu
  Put: "/reject/:id" admin không chấp nhận yêu cầu
  Get: "/" Lấy danh sách tổ chức
  Get: "/:id" Lấy thông tin chi tiết tổ chức
  Get: "/trash" Lấy danh sách các yêu cầu không được chấp nhận (tạm chưa có theo từng user)
  Delete: "/:id" xóa 1 yêu cầu tổ chức bị hủy 

ADMIN Quản lý role 
  http://localhost:3001/roles/
  Get: "/" Lấy các role
  Post:"/" Tạo role
