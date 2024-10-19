/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Вы можете указать дополнительные настройки MDX здесь
  extension: /\.mdx?$/, // Поддержка .md и .mdx
});

const nextConfig = {
  // Добавляем расширения для страниц
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
