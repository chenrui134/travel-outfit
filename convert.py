from PIL import Image

# 打开 JPG 图片
img = Image.open('assets/images/banner.jpg')

# 转换并保存为 WebP
img.save('assets/images/banner.webp', 'WEBP', quality=80) 