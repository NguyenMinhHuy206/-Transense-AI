# Transense AI — Gemini + Google Translate

Đây là website có backend FastAPI thật. **Không dùng API Google Translate web không chính thức.**

## Chạy local (PowerShell Windows)

```powershell
cd D:\transense-ai
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r backend\requirements.txt
Copy-Item backend\.env.example backend\.env
notepad backend\.env
.\.venv\Scripts\python.exe -m uvicorn backend.app:app --host 127.0.0.1 --port 8000 --reload
```

Nếu đã có `backend/.env` với Gemini key, **giữ nguyên GEMINI_API_KEY**, chỉ thêm `GOOGLE_TRANSLATE_API_KEY`. Không tải file `.env` lên GitHub.

## Cách tạo API Google Translate

1. Truy cập https://console.cloud.google.com/ tạo/chọn project.
2. Bật **Cloud Translation API** và billing cho project.
3. Tạo API key trong APIs & Services > Credentials, giới hạn key cho Cloud Translation API.
4. Đặt `GOOGLE_TRANSLATE_API_KEY=...` trong `backend/.env`. **Key Gemini AI Studio không mặc định có quyền Cloud Translation.**
5. Restart backend và kiểm tra http://127.0.0.1:8000/api/health

Google Cloud Translation Basic v2 dùng REST `POST https://translation.googleapis.com/language/translate/v2`. Mức miễn phí cho NMT đầu tiên 500.000 ký tự/tháng áp dụng theo điều kiện giá Google Cloud; vượt mức tính phí. Xem https://cloud.google.com/products/translate/pricing

## Phân biệt tính năng

- **Gemini**: dịch + có thể giải thích từ đa nghĩa/thành ngữ theo ngữ cảnh cá nhân.
- **Google Translate**: bản dịch NMT, không trả về giải thích hoặc phân tích bối cảnh cá nhân. Website hiển thị thông báo đúng giới hạn này.
- Trang đăng ký/lịch sử vẫn mô phỏng bằng LocalStorage.

## Deploy

Frontend Vercel tĩnh không tự host FastAPI. Deploy backend ở Render hoặc tương tự với:
- Build: `pip install -r backend/requirements.txt`
- Start: `uvicorn backend.app:app --host 0.0.0.0 --port $PORT`
- Environment: GEMINI_API_KEY, GEMINI_MODEL, GOOGLE_TRANSLATE_API_KEY, ALLOWED_ORIGINS
- Đặt URL backend trong `js/api-config.js` của frontend.

Không đưa API key vào JavaScript trình duyệt. Chưa kiểm thử dịch API thực tế vì không có khóa API của người dùng.
