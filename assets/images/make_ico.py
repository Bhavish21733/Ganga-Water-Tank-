import struct, os

DEST = "/Users/apple/Downloads/Ganga water clean/assets/images"

def read_png(path):
    with open(path, 'rb') as f:
        return f.read()

sizes = [16, 32, 48]
png_files = [os.path.join(DEST, f"favicon-{s}x{s}.png") for s in sizes]
png_data = [read_png(p) for p in png_files]

num_images = len(sizes)
header_size = 6 + num_images * 16

ico_data = bytearray()
ico_data += struct.pack('<HHH', 0, 1, num_images)

offset = header_size
entries = []
for s, data in zip(sizes, png_data):
    sz = len(data)
    entries.append((s, sz, offset))
    offset += sz

for (s, sz, off) in entries:
    w = s if s < 256 else 0
    h = s if s < 256 else 0
    ico_data += struct.pack('<BBBBHHII', w, h, 0, 0, 1, 32, sz, off)

for data in png_data:
    ico_data += data

out_path = "/Users/apple/Downloads/Ganga water clean/favicon.ico"
with open(out_path, 'wb') as f:
    f.write(ico_data)

print(f"favicon.ico created: {len(ico_data)} bytes at {out_path}")
