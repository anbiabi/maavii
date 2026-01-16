
import { TranslationStrings, MenuItem } from './types';

export const TRANSLATIONS: TranslationStrings = {
  navHome: { EN: 'Home', KR: '홈' },
  navAbout: { EN: 'About', KR: '소개' },
  navServices: { EN: 'Services', KR: '서비스' },
  navMenu: { EN: 'Menu', KR: '메뉴' },
  navGallery: { EN: 'Gallery', KR: '갤러리' },
  navComingSoon: { EN: 'Coming Soon', KR: '준비 중' },
  navContact: { EN: 'Contact', KR: '문의하기' },
  heroTagline: { EN: 'Handcrafted with Love • Fresh Daily', KR: '사랑으로 빚은 손맛 • 매일 만드는 신선함' },
  heroTitle: { EN: 'African & Korean Fusion Culinary Journey', KR: '아프리카와 한국의 융합, 미식의 여정' },
  viewMenu: { EN: 'View Menu', KR: '메뉴 보기' },
  addToCart: { EN: 'Add to Cart', KR: '장바구니 담기' },
  cartTitle: { EN: 'Your Cart', KR: '장바구니' },
  cartEmpty: { EN: 'Your cart is empty', KR: '장바구니가 비어 있습니다' },
  checkout: { EN: 'Checkout', KR: '결제하기' },
  total: { EN: 'Total', KR: '합계' },
  contactTitle: { EN: 'Get in Touch', KR: '문의하기' },
  contactName: { EN: 'Name', KR: '이름' },
  contactEmail: { EN: 'Email', KR: '이메일' },
  contactMessage: { EN: 'Message', KR: '메시지' },
  contactSubmit: { EN: 'Send Inquiry', KR: '문의 보내기' },
  contactPhone: { EN: 'Phone', KR: '전화번호' },
  mainDishes: { EN: 'Main Dishes', KR: '메인 요리' },
  snacksDesserts: { EN: 'Snacks & Desserts', KR: '스낵 & 디저트' },
  all: { EN: 'All Items', KR: '전체 메뉴' },
  searchPlaceholder: { EN: 'Search for a dish...', KR: '요리 검색...' },
  noResults: { EN: 'No dishes found matching your search.', KR: '검색 결과가 없습니다.' },
  aboutTitle: { EN: "About Maavii's Cuisine", KR: "Maavii's Cuisine 소개" },
  aboutBody1: {
    EN: "Maavii's Cuisine is born from a passion for sharing the rich, vibrant flavors of Cameroon and the refined techniques of French cooking. Maavii pours her heart into every dish, from savory brochettes grilled over open flames to delicate French salads and hearty, home-style meals from our Cameroonian Corner.",
    KR: "Maavii's Cuisine은 카메룬의 풍부하고 활기찬 맛과 프랑스 요리의 정교한 기술을 공유하고자 하는 열정에서 탄생했습니다. Maavii는 직화로 구운 짭짤한 꼬치 요리부터 섬세한 프랑스식 샐러드, 그리고 카메룬 코너의 든든한 가정식 요리에 이르기까지 모든 요리에 진심을 담습니다."
  },
  aboutBody2: {
    EN: "We believe in food that brings people together. Whether it's a small lunch box, a large party, or a church gathering, we provide memorable culinary experiences. We are ready to discuss a custom menu that perfectly fits your event and venue.",
    KR: "우리는 음식이 사람들을 하나로 묶어준다고 믿습니다. 소박한 도시락부터 대규모 파티, 교회 모임에 이르기까지 잊지 못할 미식 경험을 선사합니다. 행사와 장소에 완벽하게 어울리는 맞춤형 메뉴를 상담해 드릴 준비가 되어 있습니다."
  },
  aboutBody3: {
    EN: "Fresh Ingredients • Authentic Recipes • Made with Love",
    KR: "신선한 재료 • 정통 레시피 • 사랑으로 만든 요리"
  },
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    category: 'main',
    name: { EN: 'Grilled Chicken Wings', KR: '그릴드 치킨 윙' },
    description: { EN: 'Marinated in spicy African Peri-Peri sauce with Korean aromatics.', KR: '매콤한 아프리카 페리페리 소스와 한국의 향신료로 마리네이드한 날개 요리.' },
    price: 18000,
    image: '/images/food/02_roasted_chicken_pieces.jpg'
  },
  {
    id: '2',
    category: 'main',
    name: { EN: 'Grilled Meat Skewers', KR: '그릴드 미트 꼬치' },
    description: { EN: 'Tender beef and pork skewers inspired by Suya seasoning.', KR: '수야 시즈닝에서 영감을 받은 부드러운 소고기와 돼지고기 꼬치.' },
    price: 22000,
    image: '/images/food/colorful-meat-skewers.jpg'
  },
  {
    id: '3',
    category: 'main',
    name: { EN: 'Jollof Rice Special', KR: '졸로프 라이스 스페셜' },
    description: { EN: 'West African classic smoky rice served with spicy kimchi slaw.', KR: '스파이시 김치 슬로우와 함께 제공되는 서아프리카 정통 스모키 라이스.' },
    price: 15000,
    image: '/images/food/rice-sauce-meal.jpg'
  },
  {
    id: '4',
    category: 'snack',
    name: { EN: 'Golden Fried Dough Balls', KR: '골든 프라이드 도우 볼 (퍼프퍼프)' },
    description: { EN: 'Sweet or savory deep-fried yeast dough, a perfect snack.', KR: '달콤하거나 짭짤한 튀김 반죽 요리, 완벽한 간식.' },
    price: 8000,
    image: '/images/food/04_fried_dough_balls_bolinho.jpg'
  },
  {
    id: '5',
    category: 'snack',
    name: { EN: 'Caramelized Nuts', KR: '카라멜 견과류' },
    description: { EN: 'Crispy, honey-glazed mixed nuts with a hint of cinnamon.', KR: '계피 향이 가미된 바삭하고 달콤한 꿀 코팅 견과류.' },
    price: 6000,
    image: 'https://images.unsplash.com/photo-1536511110591-7eafc96bb504?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '6',
    category: 'snack',
    name: { EN: 'Bread Pudding', KR: '브레드 푸딩' },
    description: { EN: 'Warm, comforting pudding made with artisanal brioche.', KR: '수제 브리오슈로 만든 따뜻하고 부드러운 푸딩.' },
    price: 12000,
    image: '/images/food/09_dense_cake_slice.jpg'
  },
  {
    id: '7',
    category: 'snack',
    name: { EN: 'Ring-shaped Cake', KR: '링 모양 케이크' },
    description: { EN: 'Traditional bundt-style cake with a citrus glaze.', KR: '시트러스 글레이즈를 얹은 전통적인 분트 스타일 케이크.' },
    price: 25000,
    image: '/images/food/bundt_cake.webp'
  },
  {
    id: '8',
    category: 'main',
    name: { EN: 'Fresh Garden Salad', KR: '신선한 정원 샐러드' },
    description: { EN: 'Crisp seasonal greens with a house special vinaigrette.', KR: '하우스 스페셜 비네그레트를 곁들인 아삭한 제철 채소.' },
    price: 8500,
    image: '/images/food/salad.jpg'
  },
  {
    id: '9',
    category: 'snack',
    name: { EN: 'Fried Pastries (Pastel)', KR: '튀김 만두 (파스텔)' },
    description: { EN: 'Crispy pastry pockets filled with spiced meat or vegetables.', KR: '양념된 고기나 야채로 채운 바삭한 페이스트리.' },
    price: 7500,
    image: '/images/food/fried_pastries.jpg'
  },
  {
    id: '10',
    category: 'snack',
    name: { EN: 'Rolled Crepes', KR: '롤 판케이크/크레페' },
    description: { EN: 'Delicate crepes rolled with sweet or savory fillings.', KR: '달콤하거나 짭짤한 속을 채운 부드러운 롤 크레페.' },
    price: 9000,
    image: '/images/food/rolled_crepes_panquecas.jpg'
  }
];
