/**
 * GitHub Pages等のサブディレクトリ（BASE_URL）に対応したアセットパスを生成するヘルパー関数
 */
export const getAssetUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
