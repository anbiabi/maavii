import os
try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Please install Pillow first.")
    exit(1)

# Canvas setup (Horizontal Business Card: 1200x750 approx for high res)
W, H = 1200, 750
background_color = (255, 255, 255) # White
bg = Image.new('RGB', (W, H), background_color)
draw = ImageDraw.Draw(bg)

# Colors
maavii_orange = (249, 115, 22) # #F97316
maavii_charcoal = (50, 50, 50)
maavii_teal = (20, 184, 166)

# Draw generic organic shape (orange header)
# Simple polygon for header background
draw.polygon([(0,0), (W,0), (W, 250), (0, 180)], fill=maavii_orange)

# Load Logo
try:
    logo_path = "public/images/maavi.png"
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert("RGBA")
        # Resize logo to fit nicely (max height 200)
        logo.thumbnail((500, 300))
        # Center logo horizontally
        logo_x = (W - logo.width) // 2
        logo_y = 20 # slightly down from top
        bg.paste(logo, (logo_x, logo_y), logo)
    else:
        print(f"Error: Logo file not found at {logo_path}")
except Exception as e:
    print(f"Error loading logo: {e}")

# Load QRs
qr_paths = [
    ("public/images/website_qr.png", "Website"),
    ("public/images/whatsapp_qr.png", "WhatsApp"),
    ("public/images/kakao_id_qr.png", "Open Kakao")
]

qr_images = []
for path, label in qr_paths:
    if os.path.exists(path):
        try:
            img = Image.open(path).convert("RGBA")
            qr_images.append((img, label))
        except Exception as e:
            print(f"Error loading QR {path}: {e}")
    else:
        print(f"Missing QR: {path}")

# Default font
try:
    font = ImageFont.truetype("DejaVuSans-Bold.ttf", 36) # Try to find a system font if possible
except:
    font = ImageFont.load_default() # Fallback, likely very small

# Layout QRs
if qr_images:
    qr_size = 220
    spacing = 60
    total_width = (qr_size * 3) + (spacing * 2)
    start_x = (W - total_width) // 2
    qr_y = 350 # Start QRs lower down

    for i, (qr_img, label) in enumerate(qr_images):
        qr_resized = qr_img.resize((qr_size, qr_size))
        x_pos = start_x + i * (qr_size + spacing)
        bg.paste(qr_resized, (x_pos, qr_y), qr_resized)

        # Draw Label
        # Measure text size approximately
        try:
            bbox = draw.textbbox((0, 0), label, font=font)
            text_width = bbox[2] - bbox[0]
        except AttributeError:
             # Fallback for old Pillow
             text_width = len(label) * 10
        
        text_x = x_pos + (qr_size - text_width) // 2
        draw.text((text_x, qr_y + qr_size + 20), label, fill=maavii_charcoal, font=font)

# Add Footer Text
footer_text = "Natural Tastes of Africa"
try:
    bbox = draw.textbbox((0, 0), footer_text, font=font)
    fw = bbox[2] - bbox[0]
    draw.text(((W - fw) // 2, H - 80), footer_text, fill=maavii_orange, font=font)
except:
    pass

# Save
output_path = "public/images/maavii_business_card_v2.png"
bg.save(output_path)
print(f"Card generated: {output_path}")
