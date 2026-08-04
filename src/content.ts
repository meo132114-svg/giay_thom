export const SHOPEE_URL = 'https://shopee.vn';
export const TIKTOK_URL = 'https://shop.tiktok.com';

export type PageId = 'home' | 'story' | 'products' | 'benefits' | 'faq';

export const PAGES: { id: PageId; label: string; short: string }[] = [
  { id: 'home', label: 'Trang Chủ', short: 'Trang Chủ' },
  { id: 'story', label: 'Câu Chuyện', short: 'Giới Thiệu' },
  { id: 'products', label: 'Sản Phẩm & Mùi Hương', short: 'Sản Phẩm' },
  { id: 'benefits', label: 'Công Dụng', short: 'Công Dụng' },
  { id: 'faq', label: 'FAQ & Liên Hệ', short: 'FAQ' },
];

export const IMAGES = {
  // Hero / product
  pouchWhite: '/image.png',
  pouchBlue: 'https://images.pexels.com/photos/3850531/pexels-photo-3850531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pouchTwo: 'https://images.pexels.com/photos/3850586/pexels-photo-3850586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pouchSimple: 'https://images.pexels.com/photos/3850539/pexels-photo-3850539.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pouchCanvas: 'https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pouchBlueEmpty: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Charcoal
  charcoal: 'https://images.pexels.com/photos/7256076/pexels-photo-7256076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  charcoalPour: 'https://images.pexels.com/photos/8021316/pexels-photo-8021316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  charcoalMacro: 'https://images.pexels.com/photos/7256076/pexels-photo-7256076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Shoes
  sneakersWhite: 'https://images.pexels.com/photos/6748354/pexels-photo-6748354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sneakersWood: 'https://images.pexels.com/photos/267326/pexels-photo-267326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sneakersBox: 'https://images.pexels.com/photos/9660927/pexels-photo-9660927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sneakersFloor: 'https://images.pexels.com/photos/11946030/pexels-photo-11946030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Sports
  runningShoe: 'https://images.pexels.com/photos/4065509/pexels-photo-4065509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  tyingShoes: 'https://images.pexels.com/photos/4498554/pexels-photo-4498554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  gymLegs: 'https://images.pexels.com/photos/4753991/pexels-photo-4753991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Students
  studentStreet: 'https://images.pexels.com/photos/4530420/pexels-photo-4530420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  studentLockers: 'https://images.pexels.com/photos/8617617/pexels-photo-8617617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Scents
  orangeFresh: 'https://images.pexels.com/photos/5689628/pexels-photo-5689628.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  orangeSlices: 'https://images.pexels.com/photos/9108253/pexels-photo-9108253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mintClose: 'https://images.pexels.com/photos/9893134/pexels-photo-9893134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mintLeaves: 'https://images.pexels.com/photos/5498007/pexels-photo-5498007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  lemongrass: 'https://images.pexels.com/photos/38004213/pexels-photo-38004213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  cinnamon: 'https://images.pexels.com/photos/14381804/pexels-photo-14381804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  cinnamonSticks: 'https://images.pexels.com/photos/5060288/pexels-photo-5060288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Herbs / natural
  herbsFlat: 'https://images.pexels.com/photos/2235324/pexels-photo-2235324.png?auto=compress&cs=tinysrgb&h=650&w=940',
  oilLavender: 'https://images.pexels.com/photos/6694212/pexels-photo-6694212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  herbsOil: 'https://images.pexels.com/photos/6694180/pexels-photo-6694180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  lavender: 'https://images.pexels.com/photos/13076226/pexels-photo-13076226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  herbsRustic: 'https://images.pexels.com/photos/5471730/pexels-photo-5471730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Eco / craft
  ecoCraft: 'https://images.pexels.com/photos/29820060/pexels-photo-29820060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  herbalPowder: 'https://images.pexels.com/photos/13014207/pexels-photo-13014207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bambooBundles: 'https://images.pexels.com/photos/37848174/pexels-photo-37848174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  wovenCraft: 'https://images.pexels.com/photos/34667125/pexels-photo-34667125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  fiberBundles: 'https://images.pexels.com/photos/14055719/pexels-photo-14055719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ecoTags: 'https://images.pexels.com/photos/4841368/pexels-photo-4841368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Nature
  forestWalk: 'https://images.pexels.com/photos/3013982/pexels-photo-3013982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  greenPath: 'https://images.pexels.com/photos/5222527/pexels-photo-5222527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  weaving: 'https://images.pexels.com/photos/37852581/pexels-photo-37852581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  fiberWorker: 'https://images.pexels.com/photos/29848205/pexels-photo-29848205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const SCENTS = [
  {
    name: 'Hương Cam Tươi Mát',
    icon: 'Citrus',
    desc: 'Sảng khoái, tiếp thêm năng lượng tươi mới. Hương cam ngọt ngào giúp không gian bên trong giày luôn tươi mới, tràn đầy sức sống.',
    notes: 'Tươi mát · Sảng khoái · Năng động',
    img: 'orangeFresh',
    color: 'eco',
  },
  {
    name: 'Hương Bạc Hà Mát Lạnh',
    icon: 'Leaf',
    desc: 'Cảm giác mát sảng, đánh bay mùi hôi sau khi tập thể thao. Bạc Hà mang lại hơi thở mát lạnh, sạch sẽ cho đôi giày.',
    notes: 'Mát lạnh · Sạch sẽ · Tỉnh táo',
    img: 'mintClose',
    color: 'eco',
  },
  {
    name: 'Hương Chanh Sả Thanh Sạch',
    icon: 'Sparkles',
    desc: 'Khử mùi mạnh mẽ, tạo cảm giác thư thái, sạch sẽ. Sự kết hợp giữa chanh tươi và sả ấm giúp triệt tiêu mùi hôi tận gốc.',
    notes: 'Thanh sạch · Khử mùi · Thư thái',
    img: 'lemongrass',
    color: 'wood',
  },
  {
    name: 'Hương Quế Ấm Áp',
    icon: 'Flame',
    desc: 'Lưu hương lâu dài, phong cách ấm áp, cổ điển. Hương quế mang lại cảm giác ấm áp, thích hợp cho mùa lạnh và không gian kín.',
    notes: 'Ấm áp · Lưu hương lâu · Cổ điển',
    img: 'cinnamon',
    color: 'wood',
  },
];

export const BENEFITS = [
  {
    icon: 'Droplets',
    title: 'Hút Ẩm Cấp Tốc',
    desc: 'Hấp phụ độ ẩm dư thừa bên trong lòng giày sau vận động, giữ môi trường bên trong luôn khô thoáng.',
  },
  {
    icon: 'Wind',
    title: 'Khử Mùi Tận Gốc',
    desc: 'Than hoạt tính với cấu trúc xốp gốm giúp bẫy và triệt tiêu các hợp chất hữu cơ gây mùi hôi.',
  },
  {
    icon: 'Flower2',
    title: 'Hương Thơm Tự Nhiên',
    desc: 'Tinh dầu nguyên chất tạo hương thơm dịu nhẹ, sảng khoái, không gây nồng gắt như hóa chất.',
  },
  {
    icon: 'Shield',
    title: 'Thành Phần An Toàn',
    desc: 'Không chứa hóa chất tổng hợp hay chất bảo quản độc hại, an toàn tuyệt đối cho da chân.',
  },
  {
    icon: 'RefreshCw',
    title: 'Tái Sử Dụng Lâu Dài',
    desc: 'Chỉ cần phơi nắng định kỳ 2-3 tuần/lần để giải phóng ẩm và tái hoạt hóa than hoạt tính.',
  },
  {
    icon: 'Package',
    title: 'Thiết Kế Tinh Gọn',
    desc: 'Kích thước nhỏ gọn, dễ mang theo trong cặp sách, túi gym để sử dụng mọi lúc, mọi nơi.',
  },
  {
    icon: 'Shoe',
    title: 'Đa Dạng Ứng Dụng',
    desc: 'Phù hợp với tất cả dòng giày: giày thể thao, giày học sinh, giày da, giày bảo hộ...',
  },
  {
    icon: 'Leaf',
    title: 'Thân Thiện Môi Trường',
    desc: '100% nguyên liệu tự nhiên, có khả năng tái sử dụng cao, giảm thiểu rác thải nhựa.',
  },
];

export const PROBLEMS = [
  {
    icon: 'Frown',
    title: 'Mùi hôi khó chịu',
    desc: 'Giày xuất hiện mùi hôi sau các tiết học thể dục hoặc hoạt động vận động mạnh.',
  },
  {
    icon: 'Droplets',
    title: 'Ẩm ướt bên trong',
    desc: 'Bên trong giày luôn ẩm ướt do mồ hôi chân tiết ra nhiều sau khi vận động.',
  },
  {
    icon: 'EyeOff',
    title: 'Thiếu tự tin',
    desc: 'Mùi hôi giày khiến bạn thiếu tự tin khi giao tiếp hoặc tháo giày nơi đông người.',
  },
  {
    icon: 'AlertTriangle',
    title: 'Hóa chất kích ứng',
    desc: 'Bình xịt khử mùi hóa chất tạo mùi nồng gắt, dễ gây kích ứng hoặc hỏng chất liệu giày.',
  },
];

export const REVIEWS = [
  {
    name: 'Minh Anh',
    role: 'Học sinh THPT',
    text: 'Giày của mình sau tiết thể dục thường có mùi khá khó chịu. Từ khi dùng Giày Thơm, mùi hôi giảm rõ rệt và giày luôn giữ được hương thơm tự nhiên.',
    rating: 5,
  },
  {
    name: 'Tuấn Kiệt',
    role: 'Sinh viên',
    text: 'Túi nhỏ gọn, rất tiện mang theo. Tối đi đá bóng về chỉ cần bỏ túi thơm vào giày là sáng hôm sau giày khô ráo và thơm mát.',
    rating: 5,
  },
  {
    name: 'Hoài Thương',
    role: 'Nhân viên văn phòng',
    text: 'Sản phẩm an toàn, không nồng mùi hóa chất như mấy loại xịt. Giá thành rất hợp lý cho học sinh, sinh viên.',
    rating: 5,
  },
];

export const FAQS = [
  {
    q: 'Một túi thơm Giày Thơm có thời gian sử dụng bao lâu?',
    a: 'Tùy thuộc vào tần suất sử dụng và độ ẩm của giày. Khách hàng chỉ cần phơi nắng định kỳ 2-3 tuần/lần để tái sử dụng hiệu quả trong nhiều tháng.',
  },
  {
    q: 'Sản phẩm có dùng được cho giày đá bóng hoặc giày da không?',
    a: 'Có. Giày Thơm được thiết kế an toàn và phù hợp cho mọi chất liệu giày, bao gồm giày thể thao, giày da, giày vải học sinh và giày bảo hộ.',
  },
  {
    q: 'Tinh dầu trong túi thơm có gây kích ứng da chân không?',
    a: 'Sản phẩm sử dụng tinh dầu và nguyên liệu thiên nhiên lành tính. Tuy nhiên, nếu bạn có tiền sử dị ứng đặc biệt với một loại tinh dầu cụ thể, nên tham khảo kỹ danh mục mùi hương trước khi chọn.',
  },
  {
    q: 'Ngoài giày ra có thể dùng cho các không gian khác không?',
    a: 'Có thể đặt túi thơm vào tủ quần áo, balo, túi xách hoặc tủ giày để khử mùi ẩm mốc và duy trì không gian thơm tho.',
  },
  {
    q: 'Cách phơi nắng tái sử dụng như thế nào?',
    a: 'Đơn giản! Chỉ cần lấy túi thơm ra phơi dưới ánh nắng mặt trời 2-3 giờ, 2-3 tuần/lần. Nắng mặt trời giúp giải phóng ẩm và tái hoạt hóa than hoạt tính.',
  },
  {
    q: 'Một hộp sản phẩm gồm những gì?',
    a: 'Mỗi quy cách đóng gói hộp gồm 4 túi thơm nhỏ gọn, đủ dùng cho 2 đôi giày cùng lúc hoặc thay phiên trong nhiều tháng.',
  },
];
