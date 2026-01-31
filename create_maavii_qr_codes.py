#!/usr/bin/env python3
"""
Script to generate QR codes with embedded logos for Maavii business card
"""
import os
from PIL import Image, ImageDraw, ImageFont
import qrcode

def create_qr_code_with_logo(data, filename, logo_path=None, fill_color=(0, 0, 0), back_color=(255, 255, 255)):
    """Create a QR code with an optional logo in the center"""
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,  # Higher error correction to accommodate logo
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    # Create QR code image
    qr_img = qr.make_image(fill_color=fill_color, back_color=back_color).convert('RGB')

    if logo_path and os.path.exists(logo_path):
        try:
            # Open and resize logo
            logo = Image.open(logo_path).convert("RGBA")

            # Calculate logo size (typically 10% of QR code size)
            qr_width, qr_height = qr_img.size
            logo_size = min(qr_width, qr_height) // 5

            # Resize logo while maintaining aspect ratio
            logo.thumbnail((logo_size, logo_size), Image.Resampling.LANCZOS)

            # Calculate position to center the logo
            logo_pos = ((qr_width - logo.size[0]) // 2, (qr_height - logo.size[1]) // 2)

            # Create a transparent overlay for the logo
            pos = logo_pos
            qr_img.paste(logo, pos, mask=logo)
        except Exception as e:
            print(f"Could not add logo to QR code: {e}")

    qr_img.save(filename)
    print(f"Created QR code with logo: {filename}")

def create_maavii_business_card():
    """Create the Maavii business card with QR codes"""

    # Create directory if it doesn't exist
    os.makedirs("public/images", exist_ok=True)

    # Create QR codes with logos
    # WhatsApp QR with WhatsApp logo
    whatsapp_logo_path = "public/images/whatsapp.jpg"  # Look for WhatsApp logo
    if not os.path.exists(whatsapp_logo_path):
        whatsapp_logo_path = None  # Use None if logo doesn't exist
    create_qr_code_with_logo("https://wa.me/821044092301", "public/images/whatsapp_qr.png", whatsapp_logo_path)

    # Kakao QR with Kakao logo
    kakao_logo_path = "public/images/kappframework-YMBBwe(1)(1).png"  # Look for Kakao logo
    if not os.path.exists(kakao_logo_path):
        kakao_logo_path = "public/images/kakao_qr.png"  # Fallback to existing Kakao QR as logo
    if not os.path.exists(kakao_logo_path):
        kakao_logo_path = None  # Use None if logo doesn't exist
    create_qr_code_with_logo("https://open.kakao.com/o/sfnml5di", "public/images/kakao_id_qr.png", kakao_logo_path)

    # Website QR with website logo
    website_logo_path = "public/images/maavi.png"  # Use Maavii logo for website
    if not os.path.exists(website_logo_path):
        website_logo_path = None  # Use None if logo doesn't exist
    create_qr_code_with_logo("https://maaviicom.vercel.app", "public/images/website_qr.png", website_logo_path)

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

    # Load Main Logo
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
        ("public/images/whatsapp_qr.png", "WhatsApp"),
        ("public/images/kakao_id_qr.png", "Open Kakao"),
        ("public/images/website_qr.png", "Website")
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
    output_path = "public/images/maavii_business_card_with_qr.png"
    bg.save(output_path)
    print(f"Business card generated: {output_path}")

if __name__ == "__main__":
    create_maavii_business_card()