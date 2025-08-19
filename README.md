# Poke Deck

Poke Deck là ứng dụng Next.js cho phép bạn khám phá danh sách các Pokémon theo từng loại (type) và phân trang để xem nhiều Pokémon hơn. Dữ liệu được lấy trực tiếp từ [PokeAPI](https://pokeapi.co/).

## Tính năng

- Lọc Pokémon theo loại (type).
- Phân trang danh sách Pokémon.
- Xem chi tiết thông tin từng Pokémon.
- Giao diện hiện đại sử dụng [Tailwind CSS](https://tailwindcss.com/).
- Sử dụng App Router của Next.js với trang chính ở `app/page.tsx` và layout tổng ở `app/layout.tsx`.
- Tổ chức component trong thư mục `components`.
- Fetch dữ liệu kết hợp giữa Client Component và Server Component.

## Cài đặt & chạy ứng dụng

1. Cài đặt dependencies:

   ```bash
   npm install
   ```

2. Khởi chạy server phát triển:

   ```bash
   npm run dev
   ```

3. Truy cập [http://localhost:3000](http://localhost:3000) trên trình duyệt để sử dụng ứng dụng.

## Cấu trúc dự án

- `app/page.tsx`: Trang chính hiển thị danh sách Pokémon.
- `app/layout.tsx`: Layout tổng cho toàn bộ ứng dụng.
- `components/`: Chứa các component tái sử dụng.
- Sử dụng App Router của Next.js.

## Công nghệ sử dụng

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokeAPI](https://pokeapi.co/) (nguồn dữ liệu Pokémon)

## Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)

## Đóng góp

Mọi ý kiến đóng góp hoặc báo lỗi xin gửi về [GitHub repository](https://github.com/vercel/next.js).

## Triển khai

Bạn có thể triển khai ứng dụng dễ dàng trên [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Tham khảo [tài liệu triển khai Next.js](https://nextjs.org/docs/app/building-your-application/deploying) để biết thêm chi tiết.
